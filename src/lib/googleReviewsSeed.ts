import type { NormalizedReview } from "./googleReviews";

/**
 * Verified fallback reviews for Shri Pro Craft.
 *
 * PROVENANCE
 * - These are the business's own real Google reviews, supplied verbatim by
 *   the business owner (casing/typos preserved: "good.srihari",
 *   "google my business"). They are the exact seven reviews that powered
 *   the manual testimonial marquee before the live integration.
 * - Two additional Google reviewers (KANAGARAJ R DHINASURIYAN
 *   DISTRICTreporterCoimbatore, Aadhi Shakthi) left rating-only reviews
 *   with no written text and are intentionally excluded — never invent
 *   or paraphrase review content.
 *
 * WHY THIS EXISTS
 * - The Places API (New) project currently withholds the `reviews` field
 *   (Enterprise-tier SKU gating until Billing is enabled): the endpoint
 *   returns HTTP 200 with every other field but no reviews. While that is
 *   the case, /api/google-reviews serves this verified data instead of an
 *   empty marquee. The moment Google returns real review objects, the
 *   live data takes over automatically — this seed is only ever used when
 *   the API yields zero reviews.
 *
 * RULES (same as the live path)
 * - Never add, edit, translate or embellish review text here.
 * - No dates: publishTime stays null and is never rendered anywhere.
 * - No profile photos: the UI falls back to brand initials avatars.
 * - googleMapsUri stays null: the reviewer name is rendered as plain text
 *   and Google attribution is carried by the visible "Google Review"
 *   label + the section's "View all Google Reviews" CTA.
 */
export const seedReviews: NormalizedReview[] = [
  {
    authorName: "Kavitha Kavi",
    rating: 5,
    text: "Shrihari helped us set up our google my business quickly and professionally",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "PRABHU B",
    rating: 5,
    text: "Had a great experience working with shrihari for digital marketing. They explained everything clearly and delivered good results.",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "Harishmitha Gunasekar",
    rating: 5,
    text: "Team is friendly supportive and always ready to help. As a design intern learning new things every day by working on real projects",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "Arthy Hospital",
    rating: 5,
    text: "Had a good experience with Shri Pro Craft. They helped us recover our Google Business profile and also created personal branding videoshoots, managing our social media accounts. Their Meta Ads brought good enquiries and good results.",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "Thayalan . S",
    rating: 5,
    text: "The work culture is professional, supportive, and growth oriented, creating an good environment for personal and career development.",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "parthasarathy v",
    rating: 5,
    text: "Service was good.srihari helped me setup Google Business",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "Obli karthi",
    rating: 5,
    text: "Shri Pro Craft is doing well in marketing and the editing works of them is Great and we have got Good leads to our page by them…",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "Gokul",
    rating: 5,
    text: "Great Marketing service with professional support and strategies that helped me improve business visibility",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "Prasanth Senthil",
    rating: 5,
    text: "We got our multi-vendor web application developed by Shri Pro Craft, and we're really happy with their work. They did a great job understanding our requirements and turning our ideas into a working web application.",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "Dharini J.C",
    rating: 5,
    text: "I couldn't be happier with the website created for us. From the initial consultation to the final launch, the team was highly professional, attentive to my requirements, and delivered a beautifully designed, functional site on time.",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
  {
    authorName: "Riishmitha",
    rating: 5,
    text: "Great working with Srihari",
    publishTime: null,
    profilePhoto: null,
    googleMapsUri: null,
  },
];
