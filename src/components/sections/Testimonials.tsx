import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import TestimonialMarquee from "@/components/ui/marquee-01";
import { shriProCraftPlaceUrl } from "@/lib/place";

/**
 * Real Shri Pro Craft Google Business Profile URL — already verified in
 * this project (src/lib/place.ts). Swap it here if the review link ever
 * changes; no rating totals or review counts are hard-coded.
 */
const GOOGLE_REVIEWS_URL = shriProCraftPlaceUrl;

/* Same Google review-star gold used on the map card and review cards. */
const STAR_GOLD = "fill-[#fbbc04] text-[#fbbc04]";

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairlineStrong bg-paper px-4 py-1.5">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={12} className={STAR_GOLD} />
              ))}
            </span>
            <span className="text-[0.8125rem] font-medium text-ink2">
              Google Reviews
            </span>
          </div>

          <h2 id="testimonials-heading" className="heading-1">
            Trusted by Businesses
          </h2>
          <p className="body-lg mt-5 text-grey">
            Real experiences from businesses and professionals who have worked
            with Shri Pro Craft.
          </p>
        </div>
      </Container>

      <div className="mt-14">
        <TestimonialMarquee />
      </div>

      <Container>
        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View all Google Reviews
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
