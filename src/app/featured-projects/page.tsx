import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FeaturedProjectFolders } from "@/components/sections/FeaturedProjectFolders";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = buildMetadata({
  title: "Featured Projects | Shri Pro Craft",
  description:
    "Case studies from Shri Pro Craft engagements — the challenge, the strategy, the execution and the outcome, documented as work is completed.",
  path: "/featured-projects",
});

const caseStudyFormat = [
  "Business",
  "Industry",
  "Challenge",
  "Objective",
  "Strategy",
  "Execution",
  "Services used",
  "Outcome",
  "Key learnings",
];

export default function FeaturedProjectsPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/featured-projects/",
          name: "Featured Projects | Shri Pro Craft",
          itemListId: `${site.url}/featured-projects/#projects`,
        })}
      />
      <JsonLd
        data={itemListSchema({
          id: `${site.url}/featured-projects/#projects`,
          items: projects.map((project) => ({
            name: project.business,
            path: `/featured-projects/${project.slug}/`,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Featured Projects", path: "/featured-projects/" },
        ])}
      />

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="label mb-5">Proof</p>
            <h1 className="display-2">Featured Projects</h1>
            <p className="body-xl mx-auto mt-6 max-w-[54ch]">
              Every case study we publish here follows the same format —
              the real challenge, the real strategy, and the real outcome.
              No invented metrics, no composite examples.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-tight bg-surface">
        <Container>
          {projects.length === 0 ? (
              <div className="card mx-auto max-w-[640px] p-10 text-center">
                <h2 className="heading-1">Case studies are being documented</h2>
                <p className="body-lg mt-4 text-grey">
                  We'd rather publish a small number of fully documented,
                  verifiable case studies than a page of composite examples.
                  If you'd like specifics on work relevant to your industry,
                  ask us directly — we're glad to walk through it.
                </p>
                <div className="mt-7 flex justify-center">
                  <Button href="/contact" variant="secondary">
                    Ask About Our Work
                  </Button>
                </div>
              </div>
          ) : (
              <FeaturedProjectFolders />
          )}

            <div className="mx-auto mt-14 max-w-[640px]">
              <p className="label mb-5 text-center">What every case study covers</p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {caseStudyFormat.map((item) => (
                  <span
                    key={item}
                    className="caption rounded-full border border-hairlineStrong px-4 py-2 text-ink2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="display-2">Want to be next?</h2>
            <p className="body-lg mt-5 text-grey">
              Start a conversation about your business — the first documented
              result could be yours.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
