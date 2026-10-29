import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { industries } from "@/lib/content/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries | Shri Pro Craft",
  description:
    "The industries Shri Pro Craft works with most — B2B and manufacturing, e-commerce, real estate, education, healthcare, professional services and local businesses.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/industries/",
          name: "Industries | Shri Pro Craft",
          itemListId: `${site.url}/industries/#industries`,
        })}
      />
      {/* Industries are sections of this page (no per-industry URLs), so the list carries names only. */}
      <JsonLd
        data={itemListSchema({
          id: `${site.url}/industries/#industries`,
          items: industries.map((industry) => ({ name: industry.title })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries/" },
        ])}
      />

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="label mb-5">Who we work with</p>
            <h1 className="display-2">Industries</h1>
            <p className="body-xl mx-auto mt-6 max-w-[54ch]">
              Every industry buys differently. These are the ones where our
              approach to performance marketing has the most to offer.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <div className="mx-auto flex max-w-[820px] flex-col">
            {industries.map((industry, i) => (
              <div
                key={industry.slug}
                className={`grid gap-3 py-10 sm:grid-cols-[1fr_1.6fr] sm:gap-10 ${i !== 0 ? "border-t border-hairline" : ""}`}
              >
                <div>
                  <h2 className="heading-2 mb-5 font-bold">{industry.title}</h2>
                  <img
                    src={industry.image}
                    alt={`${industry.title} — 3D stone icon`}
                    loading="lazy"
                    decoding="async"
                    width={256}
                    height={256}
                    className="aspect-square w-36 object-contain sm:w-44 md:w-52"
                  />
                </div>
                <div>
                  <p className="body-lg text-ink2">{industry.summary}</p>
                  <p className="body-base mt-3 text-grey">{industry.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="display-2">Don't see your industry?</h2>
            <p className="body-lg mt-5 text-grey">
              Tell us about your business — the fundamentals of a connected
              Growth Engine apply well beyond the categories above.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
