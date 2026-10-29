import type { Metadata } from "next";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoTile } from "@/components/ui/bento";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import TeamShowcase from "@/components/ui/team-showcase";

export const metadata: Metadata = buildMetadata({
  title: "About Shri Pro Craft | Performance Marketing, Coimbatore",
  description:
    "Shri Pro Craft is a Coimbatore-based performance marketing team built around direct communication, verified tracking, and campaigns judged by results.",
  path: "/about",
});

const beliefs = [
  "A campaign that can't be measured shouldn't be trusted, no matter how good it looks.",
  "Good creative and good tracking aren't in competition — a system needs both.",
  "Local expertise and international standards aren't mutually exclusive.",
  "Honest reporting builds longer relationships than optimistic reporting.",
];

const standards = [
  "We don't invent results, testimonials or numbers to make a case.",
  "We tell you when a channel isn't working, even if it costs us the retainer.",
  "Tracking is set up and verified before budget scales, not after.",
  "Reporting uses plain language, not a dashboard designed to look busy.",
];

const whyChooseUs = [
  {
    title: "No relayed briefs",
    body: "The people planning your campaigns are the same people running them, so nothing gets lost between a strategy call and the actual work.",
  },
  {
    title: "One system, one team",
    body: "Paid media, search and your website are handled together, from a shared set of numbers.",
  },
  {
    title: "Rooted in Coimbatore",
    body: "We understand the local market directly, while working to the same standard for clients further afield.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/about/",
          name: "About Shri Pro Craft",
          type: "AboutPage",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="label mb-5">About</p>
            <h1 className="display-2">Who We Are</h1>
            <p className="body-xl mx-auto mt-6 max-w-[56ch]">
              Shri Pro Craft is a performance marketing team based in
              Coimbatore. We plan and run paid acquisition, SEO, lead
              generation and the websites they depend on — as one connected
              system rather than separate services billed separately.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <div className="mx-auto flex max-w-[900px] flex-col gap-14">
              <div>
                <h2 className="heading-1">Why Shri Pro Craft Exists</h2>
                <p className="body-lg mt-4 max-w-prose text-ink2">
                  Most businesses we talk to have already worked with an
                  agency, a freelancer, or both — and ended up with campaigns
                  that ran, invoices that arrived, and very little clarity on
                  what actually drove a sale. Shri Pro Craft exists to close
                  that gap: one team, one set of numbers, and decisions you
                  can see the reasoning behind.
                </p>
              </div>

              <div>
                <h2 className="heading-1">What We Believe</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {beliefs.map((belief) => (
                    <li key={belief} className="body-lg max-w-prose border-l-2 border-hairlineStrong pl-5 text-ink2">
                      {belief}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-1">How We Think</h2>
                <p className="body-lg mt-4 max-w-prose text-ink2">
                  We think in systems, not campaigns. Every engagement runs
                  through the same six-stage process — diagnosing what's
                  actually happening today before positioning, building,
                  launching, optimising and scaling. That order exists because
                  skipping a stage is usually where budget starts to leak.
                </p>
              </div>

              <div>
                <h2 className="heading-1">How We Work</h2>
                <p className="body-lg mt-4 max-w-prose text-ink2">
                  You work directly with the people doing the work — no
                  account manager relaying your brief to someone else, no
                  layers between a decision and the person who executes it.
                </p>
              </div>

              <div>
                <h2 className="heading-1">Our Standards</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {standards.map((standard) => (
                    <li key={standard} className="body-lg max-w-prose border-l-2 border-hairlineStrong pl-5 text-ink2">
                      {standard}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-1">Meet the Experts</h2>
                <p className="body-lg mt-4 max-w-prose text-ink2">
                  Meet the experts behind Shri Pro Craft. A focused team of
                  strategists, developers, and AI specialists working closely
                  to build high-performance digital solutions and measurable
                  growth.
                </p>
                <TeamShowcase />
              </div>
          </div>
        </Container>
      </section>

      <section className="section-tight bg-surface">
        <Container>
            <h2 className="heading-1 text-center">Why Businesses Choose Us</h2>
          {/* Bento tiles; the first reason is the elevated hero card. */}
          <BentoGrid cols={3} className="mt-12">
            {whyChooseUs.map((point, index) => (
              <BentoTile
                key={point.title}
                icon={Check}
                hero={index === 0}
                title={point.title}
                body={point.body}
                bodyClassName="body-base text-grey"
              />
            ))}
          </BentoGrid>
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="display-2">Let's build something that grows.</h2>
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
