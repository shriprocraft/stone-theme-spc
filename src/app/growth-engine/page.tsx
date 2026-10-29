import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GrowthEngineGrid } from "@/components/sections/GrowthEngineGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from "@/lib/schema";
import { growthEngineLinks, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Growth Engine | Performance Marketing Services | Shri Pro Craft",
  description:
    "The Growth Engine is Shri Pro Craft's connected system of performance marketing services — Google Ads, Meta Ads, SEO, lead generation, websites and creative, working together.",
  path: "/growth-engine",
});

export default function GrowthEnginePage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/growth-engine/",
          name: "Growth Engine | Shri Pro Craft",
          description: "Explore the marketing and growth services offered by Shri Pro Craft.",
          itemListId: `${site.url}/growth-engine/#services`,
        })}
      />
      <JsonLd
        data={itemListSchema({
          id: `${site.url}/growth-engine/#services`,
          items: growthEngineLinks.map((s) => ({ name: s.label, path: s.href })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema(
          [
            { name: "Home", path: "/" },
            { name: "Growth Engine", path: "/growth-engine/" },
          ],
          `${site.url}/growth-engine/#breadcrumb`
        )}
      />

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="label mb-5">Growth Engine</p>
            <h1 className="display-2">A connected system, not a service list</h1>
            <p className="body-xl mx-auto mt-6 max-w-[56ch]">
              Every part of the Growth Engine is built to work with the
              others — the same conversion data informs your ads, your
              search visibility and your website. Pick where to start below,
              or start a conversation and we'll tell you what to prioritise.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-tight bg-surface">
        <Container>
            <GrowthEngineGrid />
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="heading-1">Performance marketing sits at the centre</h2>
                <p className="body-lg mt-5 text-grey">
                  Paid acquisition and search are where most of the budget and
                  most of the measurement live. The other services — social,
                  lead generation, websites, branding — exist to make that
                  core work harder, not to compete with it for attention.
                </p>
                <div className="mt-7">
                  <Link href="/growth-engine/performance-marketing" className="btn-ghost">
                    Explore Performance Marketing
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="heading-1">See how the stages connect</h2>
                <p className="body-lg mt-5 text-grey">
                  The Execution Model is how these services actually get
                  sequenced for a specific business — from diagnosis through
                  to scaling what's working.
                </p>
                <div className="mt-7">
                  <Link href="/execution-model" className="btn-ghost">
                    See How We Work
                  </Link>
                </div>
              </div>
          </div>
        </Container>
      </section>
    </>
  );
}
