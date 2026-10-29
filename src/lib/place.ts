import { site } from "./site";

/**
 * Real Shri Pro Craft Google Maps place data.
 *
 * Location reference (shared by the business):
 *   https://maps.app.goo.gl/qaesY7z6GdAaFUng8
 * which resolves to
 *   google.com/maps/place/Shri+Pro+Craft/@11.0714061,76.9676841,17z
 *     ...!8m2!3d11.0714008!4d76.970259  (precise pin position)
 *     ...!1s0x3ba8f7152851b1a5:0x159116d46109d1a4  (place CID)
 *
 * Rating, review count, category and hours reflect the business's live
 * Google listing. The initial camera keeps the pin upper-centre with
 * Chinna Vedampatti Lake visible to the east, mirroring the shared view.
 */
export const shriProCraftPlace = {
  name: site.name,
  lat: 11.0714008,
  lng: 76.970259,
  // Initial camera: the pin sits in the upper part of the viewport with
  // headroom for the floating business card, Chinna Vedampatti Lake stays
  // visible to the east. Mobile zooms out a step for the narrower view.
  view: { lat: 11.0692, lng: 76.9677, zoom: 16 },
  viewMobile: { lat: 11.0674, lng: 76.9673, zoom: 15 },
  shareUrl: "https://maps.app.goo.gl/qaesY7z6GdAaFUng8",
  rating: 4.9,
  ratingCount: 8,
  category: "Marketing agency",
  hours: "Open 24 hours",
  // Official display form of the address (en-dash before the PIN, as the
  // business writes it). Geocoding/direction URLs use the same string —
  // Google Maps handles the en-dash correctly.
  address: `${site.streetAddress}, ${site.locality}, ${site.region} – ${site.postalCode}, India`,
} as const;

/** Real Google Maps directions to the business (Maps URLs API). */
export const shriProCraftDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${shriProCraftPlace.name}, ${shriProCraftPlace.address}`,
)}`;

/**
 * Google Maps has no cross-site "save/bookmark" API for arbitrary sites,
 * so the Save button deep-links to the real place where visitors can
 * save it with their own Google account — no fake functionality.
 */
export const shriProCraftPlaceUrl = shriProCraftPlace.shareUrl;
