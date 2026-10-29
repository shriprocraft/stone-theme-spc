/**
 * Server-side Google Reviews integration — Google Places API (New).
 *
 * SECURITY CONTRACT
 * - GOOGLE_PLACES_API_KEY is read from server-only environment variables.
 * - The key is sent to Google exclusively as the `X-Goog-Api-Key` request
 *   header. It is never logged, never returned in any response, and this
 *   module must only ever be imported by server code (currently
 *   src/app/api/google-reviews/route.ts).
 * - Responses are normalized to a fixed shape; unknown/dangerous values
 *   (non-https URLs, missing text, unrated reviews) are dropped.
 *
 * CACHING
 * - In-memory cache with a configurable TTL (GOOGLE_REVIEWS_CACHE_TTL,
 *   seconds, default 3600). Google is called at most once per TTL window
 *   plus one in-flight dedupe, never on every page load.
 * - If a refresh fails, the last successful payload is served (stale)
 *   rather than erroring, so the section stays populated. Only a cold
 *   start with a failing upstream surfaces an error to the caller.
 *
 * SEED FALLBACK (see googleReviewsSeed.ts)
 * - Google currently returns HTTP 200 but omits the Enterprise-tier
 *   `reviews` field entirely (billing gating). When the live payload has
 *   zero reviews, the verified verbatim reviews from googleReviewsSeed.ts
 *   are served instead so the marquee always shows genuine content.
 *   Live Google reviews take over automatically as soon as the field is
 *   returned; the payload's `source` flag reports which path served.
 * - The same seed also covers an unavailable upstream: a missing or
 *   misconfigured key, a network failure, or a Google 4xx/5xx on a cold
 *   start degrades to the seed payload instead of surfacing an error to
 *   the page. The route's generic 502/503 remains only a last-resort
 *   safety net.
 *
 * NOTE ON THE CURRENT KEY
 * - The provided key is "Website restricted" (HTTP referrers). Server
 *   requests send no browser referer, so Google blocks them unless the
 *   optional GOOGLE_PLACES_API_REFERRER env var supplies the site origin.
 *   The recommended production fix is to change the key's Application
 *   restrictions to None/IP with API restrictions = Places API (New),
 *   after which GOOGLE_PLACES_API_REFERRER can be removed.
 */

import { seedReviews } from "./googleReviewsSeed";

export interface NormalizedReview {
  authorName: string;
  rating: number;
  text: string;
  /** ISO-8601 timestamp straight from Google. Never rendered by the UI. */
  publishTime: string | null;
  profilePhoto: string | null;
  /** Author profile link (Google attribution) falling back to the place URL. */
  googleMapsUri: string | null;
}

export interface GoogleReviewsPayload {
  businessName: string | null;
  rating: number | null;
  reviewCount: number | null;
  googleMapsUri: string | null;
  reviews: NormalizedReview[];
  /**
   * "google" = live Places API reviews.
   * "seed"  = verified verbatim fallback (googleReviewsSeed.ts), served
   *           only while Google withholds the reviews field.
   */
  source: "google" | "seed";
}

/** Env vars missing/misconfigured — a 503-class failure, not a Google outage. */
export class GoogleReviewsConfigError extends Error {}

/** Google call failed and no cached payload (not even stale) exists. */
export class GoogleReviewsFetchError extends Error {
  constructor(
    message: string,
    readonly upstreamStatus: number,
  ) {
    super(message);
  }
}

const PLACES_API_BASE = "https://places.googleapis.com/v1/places";
const FIELD_MASK = "displayName,rating,userRatingCount,googleMapsUri,reviews";
const REQUEST_TIMEOUT_MS = 8000;
const MIN_TTL_SECONDS = 60;
const DEFAULT_TTL_SECONDS = 3600;

export function googleReviewsCacheTtlSeconds(): number {
  const raw = Number.parseInt(process.env.GOOGLE_REVIEWS_CACHE_TTL ?? "", 10);
  if (Number.isFinite(raw) && raw > 0) return Math.max(MIN_TTL_SECONDS, raw);
  return DEFAULT_TTL_SECONDS;
}

function isHttpsUrl(value: unknown): value is string {
  return typeof value === "string" && value.startsWith("https://");
}

/* ------------------------------------------------------------------ */
/* Raw Places API (New) shapes — only what the field mask can return.  */
/* ------------------------------------------------------------------ */

interface RawReview {
  rating?: number;
  publishTime?: string;
  text?: { text?: string };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
}

interface RawPlace {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: RawReview[];
}

function normalizeReview(raw: RawReview, placeUri: string | null): NormalizedReview | null {
  const text = typeof raw.text?.text === "string" ? raw.text.text.trim() : "";
  const authorName =
    typeof raw.authorAttribution?.displayName === "string"
      ? raw.authorAttribution.displayName.trim()
      : "";
  const rating = typeof raw.rating === "number" ? raw.rating : 0;

  /* Reviews without a written text or author (rating-only) are excluded,
     same rule the previous manual section applied. */
  if (!text || !authorName || rating < 1 || rating > 5) return null;

  const authorUri = raw.authorAttribution?.uri;
  return {
    authorName,
    rating: Math.round(rating),
    text,
    publishTime: typeof raw.publishTime === "string" ? raw.publishTime : null,
    profilePhoto: isHttpsUrl(raw.authorAttribution?.photoUri)
      ? (raw.authorAttribution?.photoUri as string)
      : null,
    googleMapsUri: isHttpsUrl(authorUri) ? authorUri : placeUri,
  };
}

function normalizePlace(raw: RawPlace): GoogleReviewsPayload {
  const placeUri = isHttpsUrl(raw.googleMapsUri) ? raw.googleMapsUri : null;
  const liveReviews = Array.isArray(raw.reviews)
    ? raw.reviews
        .map((review) => normalizeReview(review, placeUri))
        .filter((review): review is NormalizedReview => review !== null)
    : [];

  const base = {
    businessName:
      typeof raw.displayName?.text === "string" ? raw.displayName.text : null,
    rating: typeof raw.rating === "number" ? raw.rating : null,
    reviewCount: typeof raw.userRatingCount === "number" ? raw.userRatingCount : null,
    googleMapsUri: placeUri,
  };

  /* Google omits the reviews field while the project lacks the
     Enterprise-tier SKU (see header note). Serve the verified seed data
     so the marquee never renders empty; live reviews win once Google
     starts returning them. */
  if (liveReviews.length === 0 && seedReviews.length > 0) {
    return { ...base, reviews: seedReviews, source: "seed" };
  }

  return { ...base, reviews: liveReviews, source: "google" };
}

/**
 * Cold-start degradation: no cache and no usable upstream (unconfigured
 * key, network outage, Google 4xx/5xx). Serve the verified seed reviews
 * so the marquee never renders an error state. The result is
 * intentionally NOT cached — the next request retries the live source,
 * so recovery the moment a valid key/billing is restored is immediate.
 */
function seedFallbackPayload(): GoogleReviewsPayload {
  return {
    businessName: null,
    rating: null,
    reviewCount: null,
    googleMapsUri: null,
    reviews: seedReviews,
    source: "seed",
  };
}

/* ------------------------------------------------------------------ */
/* Fetch + in-memory cache                                             */
/* ------------------------------------------------------------------ */

interface CacheEntry {
  payload: GoogleReviewsPayload;
  fetchedAt: number;
}

let cache: CacheEntry | null = null;
let inflight: Promise<GoogleReviewsPayload> | null = null;

async function fetchFromGoogle(): Promise<GoogleReviewsPayload> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    throw new GoogleReviewsConfigError(
      "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variables.",
    );
  }

  const headers: Record<string, string> = {
    "X-Goog-Api-Key": apiKey,
    "X-Goog-FieldMask": FIELD_MASK,
    Accept: "application/json",
  };

  /* Compatibility bridge for HTTP-referrer-restricted keys (see file
     header). Never set NEXT_PUBLIC_* here — the key stays server-side. */
  const referrer = process.env.GOOGLE_PLACES_API_REFERRER;
  if (referrer) headers.Referer = referrer;

  const url = `${PLACES_API_BASE}/${encodeURIComponent(placeId)}?languageCode=en`;

  let response: Response;
  try {
    response = await fetch(url, {
      headers,
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    /* Network/DNS/timeout — never include the URL (it is key-free) or any
       credential material in logs. */
    throw new GoogleReviewsFetchError("Could not reach the Google Places API.", 0);
  }

  if (!response.ok) {
    let detail = "";
    try {
      const body = (await response.json()) as { error?: { message?: string } };
      detail = typeof body?.error?.message === "string" ? body.error.message : "";
    } catch {
      /* non-JSON error body — ignore */
    }
    console.error(
      `[google-reviews] Places API responded ${response.status} ${response.statusText}${detail ? ` — ${detail}` : ""}`,
    );
    throw new GoogleReviewsFetchError(
      "Google Places API request failed.",
      response.status,
    );
  }

  const raw = (await response.json()) as RawPlace;
  return normalizePlace(raw);
}

/**
 * Returns the normalized reviews payload, served from cache whenever it is
 * fresh. Refreshes from Google at most once per TTL; concurrent callers
 * share one in-flight request. On refresh failure the stale cache (if any)
 * is served instead of throwing.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsPayload> {
  const ttlMs = googleReviewsCacheTtlSeconds() * 1000;

  if (cache && Date.now() - cache.fetchedAt < ttlMs) {
    return cache.payload;
  }

  if (!inflight) {
    inflight = fetchFromGoogle()
      .then((payload) => {
        cache = { payload, fetchedAt: Date.now() };
        return payload;
      })
      .catch((error: unknown) => {
        /* Serve last-known-good data on refresh failure. */
        if (cache) {
          console.error(
            "[google-reviews] refresh failed — serving cached data:",
            error instanceof Error ? error.message : error,
          );
          return cache.payload;
        }
        /* Cold start with no usable upstream: degrade to the verified
           seed reviews instead of surfacing an error. Not cached — the
           next request retries the live source. */
        console.error(
          "[google-reviews] upstream unavailable — serving seed fallback:",
          error instanceof Error ? error.message : error,
        );
        if (seedReviews.length > 0) return seedFallbackPayload();
        throw error;
      })
      .finally(() => {
        inflight = null;
      });
  }

  return inflight;
}
