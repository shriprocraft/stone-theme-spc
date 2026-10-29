"use client";

import {
  ArrowUpRight,
  Bookmark,
  Clock,
  LoaderCircle,
  MapPin,
  Navigation,
  Star,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  shriProCraftDirectionsUrl,
  shriProCraftPlace,
  shriProCraftPlaceUrl,
} from "@/lib/place";
import { LocationMap } from "@/components/ui/expand-map";
import styles from "./ShriProCraftMap.module.css";

/**
 * Interactive Google Maps view of the real Shri Pro Craft place.
 *
 * - Real Google Maps JS backend (pan / zoom / drag / POIs), styled to a
 *   premium light look — not a static image and not an iframe embed.
 * - Branded marker overlay built from the actual Shri Pro Craft logo.
 * - Floating business card anchored under the marker (bottom sheet on
 *   mobile) with real business data and real Google Maps deep links.
 *
 * The API key is read from the environment only. When it is missing or
 * rejected, the section degrades to a clean, honest fallback state and
 * the rest of the page keeps working.
 */

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
const CALLBACK_NAME = "__shriProCraftMapsLoaded";

declare global {
  interface Window {
    gm_authFailure?: () => void;
    __shriProCraftMapsLoaded?: () => void;
  }
}

type MapStatus = "loading" | "ready" | "fallback";

/* ------------------------------------------------------------------ */
/* Lightweight Google Maps JS API loader (no extra dependencies)       */
/* ------------------------------------------------------------------ */

let mapsLoaderPromise: Promise<void> | null = null;

function loadGoogleMapsApi(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("The map can only load in the browser."));
  }
  if (mapsLoaderPromise) return mapsLoaderPromise;

  mapsLoaderPromise = new Promise<void>((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }

    const timeoutId = window.setTimeout(() => {
      reject(new Error("The map took too long to load. Check your connection and try again."));
    }, 15000);

    window.__shriProCraftMapsLoaded = () => {
      window.clearTimeout(timeoutId);
      resolve();
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      API_KEY,
    )}&callback=${CALLBACK_NAME}&v=weekly&loading=async`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      window.clearTimeout(timeoutId);
      reject(new Error("The map failed to load. Check your connection and try again."));
    };
    document.head.appendChild(script);
  });

  // Prevent an unhandled rejection warning if nobody else awaits this.
  mapsLoaderPromise.catch(() => {});
  return mapsLoaderPromise;
}

/* ------------------------------------------------------------------ */
/* Premium light map style (soft roads, muted labels, natural water)   */
/* ------------------------------------------------------------------ */

const MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#6b6f6a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#fdfdfd" }] },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5efdd" }] },
  { featureType: "poi.school", elementType: "geometry", stylers: [{ color: "#f0f0f0" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#e9e9e9" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#e3e3e3" }],
  },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#fdfdfd" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#a8d3ee" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#7fa6c4" }] },
];

/* ------------------------------------------------------------------ */
/* Branded marker overlay (real logo inside a premium pin)             */
/* ------------------------------------------------------------------ */

type BrandMarkerOverlay = google.maps.OverlayView & {
  setPinExpanded: (expanded: boolean) => void;
};

/**
 * Built through a factory so `google.maps.OverlayView` is only extended
 * after the Maps JS API has loaded (it does not exist at import time).
 */
function createBrandMarkerOverlay(
  markerLatLng: google.maps.LatLng,
  onSelect: () => void,
  getExpanded: () => boolean,
): BrandMarkerOverlay {
  class BrandMarker extends google.maps.OverlayView {
    private div: HTMLDivElement | null = null;

    onAdd(): void {
      this.div = document.createElement("div");
      this.div.className = styles.marker;
      this.div.innerHTML = `
        <span class="${styles.markerLabel}">${shriProCraftPlace.name}</span>
        <span class="${styles.pin}" role="button" tabindex="0"
          aria-label="${shriProCraftPlace.name} — show business details"
          aria-expanded="false">
          <span class="${styles.pinCircle}">
            <img src="/maps/logo-mark.png" alt="" width="30" height="30" draggable="false" />
          </span>
          <span class="${styles.pinTail}" aria-hidden="true"></span>
        </span>
      `;
      const pin = this.div.querySelector(`.${CSS.escape(styles.pin)}`);
      pin?.addEventListener("click", (event) => {
        event.stopPropagation();
        onSelect();
      });
      pin?.addEventListener("keydown", (e) => {
        const event = e as KeyboardEvent;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      });
      this.getPanes()?.overlayMouseTarget.appendChild(this.div);
      // The overlay DOM can attach after React synced the open state —
      // re-apply it so aria-expanded / selected style are correct.
      this.setPinExpanded(getExpanded());
    }

    draw(): void {
      if (!this.div) return;
      const projection = this.getProjection();
      if (!projection) return;
      const point = projection.fromLatLngToDivPixel(markerLatLng);
      if (!point) return;
      this.div.style.left = `${point.x}px`;
      this.div.style.top = `${point.y}px`;
    }

    onRemove(): void {
      this.div?.remove();
      this.div = null;
    }

    setPinExpanded(expanded: boolean): void {
      this.div
        ?.querySelector(`.${CSS.escape(styles.pin)}`)
        ?.setAttribute("aria-expanded", String(expanded));
      this.div?.classList.toggle(styles.markerSelected, expanded);
    }
  }

  return new BrandMarker();
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function ShriProCraftMap() {
  const [status, setStatus] = useState<MapStatus>(() =>
    API_KEY ? "loading" : "fallback",
  );
  const [cardOpen, setCardOpen] = useState(true);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const overlayRef = useRef<google.maps.OverlayView | null>(null);
  const setPinExpandedRef = useRef<((expanded: boolean) => void) | null>(null);
  const markerLatLngRef = useRef<google.maps.LatLng | null>(null);
  const cardOpenRef = useRef(true);

  useEffect(() => {
    cardOpenRef.current = cardOpen;
  }, [cardOpen]);

  /**
   * Keeps the floating card anchored under the marker (desktop). On
   * mobile the card becomes a CSS-positioned bottom sheet instead.
   */
  const updateCardPosition = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    const overlay = overlayRef.current;
    if (!card || !wrap || !overlay) return;

    if (window.innerWidth < 768) {
      card.style.left = "";
      card.style.top = "";
      card.style.transform = "";
      return;
    }

    let projection: google.maps.MapCanvasProjection | undefined;
    try {
      projection = overlay.getProjection();
    } catch {
      projection = undefined;
    }
    const markerLatLng = markerLatLngRef.current;
    if (!projection || !markerLatLng) return;

    const point = projection.fromLatLngToDivPixel(markerLatLng);
    if (!point) return;

    const margin = 12;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const wrapWidth = wrap.clientWidth;

    let x = point.x;
    x = Math.min(Math.max(x, cardWidth / 2 + margin), wrapWidth - cardWidth / 2 - margin);

    // Below the pin tip (circle + tail ≈ 62px tall, anchored at `point`).
    let y = point.y + 14;
    const maxY = wrap.clientHeight - cardHeight - margin;
    if (y > maxY) {
      y = Math.max(margin, point.y - 62 - cardHeight - margin);
    }

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    card.style.transform = "translate(-50%, 0)";
  }, []);

  useEffect(() => {
    if (!API_KEY) return;

    let cancelled = false;
    let resizeHandler: (() => void) | null = null;
    const listeners: google.maps.MapsEventListener[] = [];

    window.gm_authFailure = () => {
      setStatus("fallback");
      // Owner-facing diagnostics only — visitors just see the clean
      // keyless state (no technical wording on the page itself).
      console.warn(
        "[shri-pro-craft-map] Google rejected the configured Maps API key. Check the key value and its HTTP referrer restrictions.",
      );
    };

    (async () => {
      try {
        await loadGoogleMapsApi();
        if (cancelled || !mapContainerRef.current) return;

        const narrowViewport = window.innerWidth < 768;
        const camera = narrowViewport ? shriProCraftPlace.viewMobile : shriProCraftPlace.view;
        const map = new google.maps.Map(mapContainerRef.current, {
          center: { lat: camera.lat, lng: camera.lng },
          zoom: camera.zoom,
          backgroundColor: "#ffffff",
          disableDefaultUI: true,
          zoomControl: true,
          zoomControlOptions: {
            position: narrowViewport
              ? google.maps.ControlPosition.RIGHT_TOP
              : google.maps.ControlPosition.RIGHT_BOTTOM,
          },
          gestureHandling: "greedy",
          clickableIcons: true,
          styles: MAP_STYLE,
        });
        mapRef.current = map;

        const markerLatLng = new google.maps.LatLng(
          shriProCraftPlace.lat,
          shriProCraftPlace.lng,
        );
        markerLatLngRef.current = markerLatLng;

        const marker = createBrandMarkerOverlay(
          markerLatLng,
          () => {
            setCardOpen(true);
            map.panTo(markerLatLng);
            // Lift the pin so the anchored card fits below it.
            map.panBy(0, -92);
          },
          () => cardOpenRef.current,
        );
        marker.setMap(map);
        overlayRef.current = marker;
        setPinExpandedRef.current = (expanded) => marker.setPinExpanded(expanded);

        /* Card follows the marker as the map moves. */
        let raf = 0;
        const scheduleCardUpdate = () => {
          if (raf) return;
          raf = window.requestAnimationFrame(() => {
            raf = 0;
            updateCardPosition();
          });
        };
        listeners.push(
          map.addListener("bounds_changed", scheduleCardUpdate),
          map.addListener("projection_changed", scheduleCardUpdate),
          map.addListener("idle", scheduleCardUpdate),
          map.addListener("click", () => setCardOpen(false)),
        );
        resizeHandler = scheduleCardUpdate;
        window.addEventListener("resize", scheduleCardUpdate);

        setStatus("ready");
        window.requestAnimationFrame(scheduleCardUpdate);
      } catch (error) {
        if (cancelled) return;
        setStatus("fallback");
        console.warn(
          "[shri-pro-craft-map] could not load the Google map:",
          error instanceof Error ? error.message : error,
        );
      }
    })();

    return () => {
      cancelled = true;
      listeners.forEach((listener) => listener.remove());
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      overlayRef.current?.setMap(null);
      overlayRef.current = null;
      setPinExpandedRef.current = null;
      mapRef.current = null;
      markerLatLngRef.current = null;
      delete window.gm_authFailure;
    };
  }, [updateCardPosition]);

  useEffect(() => {
    setPinExpandedRef.current?.(cardOpen);
  }, [cardOpen, status]);

  return (
    <div
      ref={wrapRef}
      className="relative h-[380px] w-full overflow-hidden rounded-2xl bg-surface sm:h-[430px] lg:h-[440px]"
    >
      {/* Real Google Maps canvas */}
      <div ref={mapContainerRef} className="absolute inset-0" />

      {/* Floating business card — anchored to the marker (desktop) /
          bottom sheet (mobile) */}
      {status === "ready" && cardOpen && (
        <div
          ref={cardRef}
          className={`${styles.cardIn} absolute z-20 max-md:inset-x-3 max-md:bottom-3 md:left-1/2 md:top-6`}
          aria-label={`${shriProCraftPlace.name} business details`}
        >
          <div className="overflow-hidden rounded-2xl border border-hairline bg-paper shadow-[0_2px_4px_rgba(10,10,10,0.08),0_28px_56px_-20px_rgba(10,10,10,0.4)]">
            <div className="relative h-24 w-full sm:h-40">
              <img
                src="/maps/office-cover.jpg"
                alt="Shri Pro Craft office building at dusk"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <button
                type="button"
                onClick={() => setCardOpen(false)}
                aria-label="Close business details"
                className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbf8f2]/90 text-ink shadow-md backdrop-blur transition hover:bg-[#fbf8f2]"
              >
                <X size={15} aria-hidden="true" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="truncate text-[1.0625rem] font-bold text-ink">
                {shriProCraftPlace.name}
              </h3>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="text-sm font-semibold text-ink">
                  {shriProCraftPlace.rating}
                </span>
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      className="fill-[#fbbc04] text-[#fbbc04]"
                    />
                  ))}
                </span>
                <span className="text-sm text-grey">
                  ({shriProCraftPlace.ratingCount})
                </span>
                <span className="sr-only">
                  Rated {shriProCraftPlace.rating} out of 5 from{" "}
                  {shriProCraftPlace.ratingCount} Google reviews
                </span>
              </div>
              <p className="mt-0.5 text-[0.8125rem] text-grey">
                {shriProCraftPlace.category}
              </p>
              {/* Full official business address — always visible in the
                  popup, never truncated (spec: the complete address must be
                  displayed and readable on desktop and mobile). */}
              <p className="mt-1.5 flex items-start gap-1.5 text-[0.8125rem] leading-snug text-grey">
                <MapPin
                  size={13}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-brand"
                />
                <span>{shriProCraftPlace.address}</span>
              </p>
              <p className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand">
                <Clock size={13} aria-hidden="true" />
                {shriProCraftPlace.hours}
              </p>

              {/* Popup actions — labelled "Get Directions" pill (sets Shri
                  Pro Craft as the destination in Google Maps, works on
                  mobile and desktop) + save deep link. */}
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={shriProCraftDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to Shri Pro Craft on Google Maps"
                  className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-brand text-[0.8125rem] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(40,101,245,0.7)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Get Directions
                  <Navigation size={14} aria-hidden="true" />
                </a>
                <a
                  href={shriProCraftPlaceUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Save Shri Pro Craft on Google Maps"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper text-ink2 transition hover:border-brand hover:bg-brand-soft hover:text-brand"
                >
                  <Bookmark size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading state */}
      {status === "loading" && (
        <div className="flex h-full items-center justify-center">
          <p className="flex items-center gap-2.5 text-sm text-grey">
            <LoaderCircle
              className="h-4 w-4 animate-spin text-brand"
              aria-hidden="true"
            />
            Loading map…
          </p>
        </div>
      )}

      {/* Clean fallback when the key is missing / rejected / map fails.
          The interactive LocationMap card (components/ui/expand-map) keeps
          the section premium without any API key: tap to expand the map
          illustration with the real business location + geocoded
          coordinates, then Get Directions / view the real place on Google
          Maps. No technical configuration wording is shown to visitors —
          failures are logged to the console for the owner instead. The
          column scrolls if the expanded card needs more height. */}
      {status === "fallback" && (
        <div className="absolute inset-0 overflow-y-auto">
          <div className="flex min-h-full flex-col items-center justify-center gap-6 p-6 text-center sm:p-8">
            {/* mb reserves room for the absolutely-positioned
                "Click to expand" hint below the card. */}
            <div className="mb-5 sm:mb-4">
              <LocationMap
                location={shriProCraftPlace.name}
                coordinates="11.0714° N, 76.9703° E"
              />
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={shriProCraftDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-5 text-[0.875rem] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(40,101,245,0.7)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Get Directions
                <Navigation size={15} aria-hidden="true" />
              </a>
              <a
                href={shriProCraftPlaceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-ink transition hover:text-brand"
              >
                View Shri Pro Craft on Google Maps
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
