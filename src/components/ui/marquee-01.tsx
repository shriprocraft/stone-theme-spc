"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import { Star } from "lucide-react";
import { seedReviews } from "@/lib/googleReviewsSeed";

/**
 * Live Google Reviews marquee for Shri Pro Craft.
 *
 * Data comes from GET /api/google-reviews (a cached, server-side Google
 * Places API (New) proxy — which serves the verified verbatim reviews from
 * googleReviewsSeed.ts while Google withholds the Enterprise-tier reviews
 * field). No review text/authors/dates are hard-coded here — except that
 * when the API is unreachable (e.g. the site is deployed as a static
 * export with no server backend), the component renders the same verified
 * verbatim seed reviews from googleReviewsSeed.ts instead of an empty
 * "unavailable" notice, so the section is never blank. When the API IS
 * reachable its payload always wins.
 *
 * The section renders a stable skeleton while loading, and the two-row
 * marquee — the exact design shipped previously — once reviews arrive.
 *
 * Review publish timestamps are received from the API but intentionally
 * never rendered.
 */

/* Google's review-star gold — already used by the live Google Maps card
   in ShriProCraftMap.tsx, so it stays within the existing palette. */
const STAR_GOLD = "fill-[#fbbc04] text-[#fbbc04]";

const EMPTY_MESSAGE = "No Google reviews to show yet.";

interface Review {
  authorName: string;
  rating: number;
  text: string;
  profilePhoto: string | null;
  googleMapsUri: string | null;
}

type FetchState =
  | { status: "loading" }
  | { status: "ready"; reviews: Review[] };

/** Seed reviews (verbatim Google reviews, see googleReviewsSeed.ts) mapped
    to the render shape — photos/attribution/links stay null exactly like
    the API's seed path serves them. */
function seedFallbackReviews(): Review[] {
  return seedReviews.map((review) => ({
    authorName: review.authorName,
    rating: review.rating,
    text: review.text,
    profilePhoto: null,
    googleMapsUri: null,
  }));
}

interface ReviewsApiResponse {
  reviews?: unknown;
}

function isHttpsUrl(value: unknown): value is string {
  return typeof value === "string" && value.startsWith("https://");
}

/* Defensive parsing — the endpoint is trusted but shapes are validated so
   a malformed payload can never crash the homepage section. */
function toReviews(value: unknown): Review[] {
  if (!Array.isArray(value)) return [];
  const reviews: Review[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") continue;
    const raw = item as Record<string, unknown>;
    const authorName =
      typeof raw.authorName === "string" ? raw.authorName.trim() : "";
    const text = typeof raw.text === "string" ? raw.text.trim() : "";
    const rating = typeof raw.rating === "number" ? Math.round(raw.rating) : 0;
    if (!authorName || !text || rating < 1 || rating > 5) continue;
    reviews.push({
      authorName,
      rating,
      text,
      profilePhoto: isHttpsUrl(raw.profilePhoto) ? raw.profilePhoto : null,
      googleMapsUri: isHttpsUrl(raw.googleMapsUri) ? raw.googleMapsUri : null,
    });
  }
  return reviews;
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    /* Punctuation-only parts ("Thayalan . S" -> ["Thayalan", ".", "S"])
       must not consume an initial slot — the mapping requires TS. */
    .filter((part) => /[0-9a-z]/i.test(part))
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="h-full w-72 shrink-0 rounded-2xl border-hairlineStrong shadow-[0_1px_2px_rgba(17,17,17,0.04),0_12px_32px_-24px_rgba(17,17,17,0.14)] sm:w-80">
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {/* Initials avatar with the reviewer's real Google profile photo
              layered on top when available; the initials remain visible
              while loading and if the photo ever fails. */}
          <div
            role="img"
            aria-label={`${review.authorName} profile`}
            className="relative flex size-11 shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-brand-soft text-sm font-semibold tracking-wide text-brand-deep"
          >
            <span aria-hidden="true">{initialsOf(review.authorName)}</span>
            {review.profilePhoto && (
              <img
                src={review.profilePhoto}
                alt=""
                referrerPolicy="no-referrer"
                loading="lazy"
                draggable={false}
                className="absolute inset-0 size-full rounded-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              {review.googleMapsUri ? (
                <a
                  href={review.googleMapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  {review.authorName}
                </a>
              ) : (
                review.authorName
              )}
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} size={13} className={STAR_GOLD} />
                ))}
              </span>
              <span className="sr-only">
                Rated {review.rating} out of 5 stars
              </span>
              <span className="text-xs font-medium text-grey">
                Google Review
              </span>
            </div>
          </div>
        </div>
        <p className="body-base text-ink2">&ldquo;{review.text}&rdquo;</p>
      </CardContent>
    </Card>
  );
}

function SkeletonMarquee() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2"
    >
      <div className="flex justify-center gap-6 p-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-40 w-72 shrink-0 animate-pulse rounded-2xl bg-surfaceStrong sm:w-80"
          />
        ))}
      </div>
      <div className="flex justify-center gap-6 p-2" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-40 w-72 shrink-0 animate-pulse rounded-2xl bg-surfaceStrong sm:w-80"
          />
        ))}
      </div>
      <span className="sr-only">Loading Google reviews…</span>
    </div>
  );
}

function StatusMessage({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="flex min-h-[224px] items-center justify-center px-6 text-center"
    >
      <p className="body-base text-grey">{message}</p>
    </div>
  );
}

export default function TestimonialMarquee() {
  const [state, setState] = useState<FetchState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/google-reviews", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = (await response.json()) as ReviewsApiResponse;
        setState({ status: "ready", reviews: toReviews(data.reviews) });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        console.warn(
          "[reviews] live reviews unavailable, showing verified seed reviews:",
          error instanceof Error ? error.message : error,
        );
        /* Static export / no backend: render the verified verbatim seed
           reviews instead of an "unavailable" notice so the section is
           never blank. */
        setState({ status: "ready", reviews: seedFallbackReviews() });
      });

    return () => controller.abort();
  }, []);

  if (state.status === "loading") return <SkeletonMarquee />;
  if (state.reviews.length === 0) {
    return <StatusMessage message={EMPTY_MESSAGE} />;
  }

  const midpoint = Math.ceil(state.reviews.length / 2);
  const firstRow = state.reviews.slice(0, midpoint);
  const secondRow = state.reviews.slice(midpoint);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:28s] [--gap:1.5rem]">
        {firstRow.map((review, index) => (
          <ReviewCard
            key={`${review.authorName}-${index}`}
            review={review}
          />
        ))}
      </Marquee>
      {secondRow.length > 0 && (
        <Marquee reverse pauseOnHover className="[--duration:28s] [--gap:1.5rem]">
          {secondRow.map((review, index) => (
            <ReviewCard
              key={`${review.authorName}-${index}`}
              review={review}
            />
          ))}
        </Marquee>
      )}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
