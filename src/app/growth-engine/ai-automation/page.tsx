import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoTile } from "@/components/ui/bento";
import { subServiceIconByTitle } from "@/lib/service-icons";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { aiAutomation } from "@/lib/content/ai-automation";
import { services } from "@/lib/content/services";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/ai-automation/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: aiAutomation.metaTitle,
  description: aiAutomation.metaDescription,
  path: "/growth-engine/ai-automation",
});

export default function Page() {
  const related = ["lead-generation", "performance-marketing"].map((slug) => services[slug]).filter(Boolean);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: aiAutomation.navLabel,
          serviceType: "AI Automation Services",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${aiAutomation.navLabel} | ${site.name}`,
          serviceId,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Engine", path: "/growth-engine/" },
          { name: aiAutomation.navLabel, path: servicePathSlash },
        ])}
      />

      {/* Breadcrumb */}
      <div>
        <Container className="flex h-14 items-center">
          <nav aria-label="Breadcrumb" className="caption flex items-center gap-2 text-greyLight">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/growth-engine" className="hover:text-ink">Growth Engine</Link>
            <span aria-hidden="true">/</span>
            <span className="text-grey">{aiAutomation.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <img
              src="/services/ai-automation.webp"
              alt=""
              width={256}
              height={256}
              draggable={false}
              className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
            <p className="label mb-5">{aiAutomation.eyebrow}</p>
            <h1 className="display-2">{aiAutomation.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {aiAutomation.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              {aiAutomation.heroBody.map((p) => (
                <p key={p} className="body-xl mt-4 text-grey">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-9 flex justify-center">
              <Button href={aiAutomation.heroCta.href} variant="primary">
                {aiAutomation.heroCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-prose">
            <h2 className="heading-1">{aiAutomation.introHeading}</h2>
            <div className="mt-6 flex flex-col gap-1">
              {aiAutomation.introLead.map((line) => (
                <p key={line} className="body-lg font-medium text-ink">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {aiAutomation.introBody.map((p) => (
                <p key={p} className="body-lg text-ink2">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What We Build — bento tiles; the flagship offering opens wide
          so the 3-column grid closes at 5 items. */}
      <section className="section-tight bg-surface">
        <Container>
          <h2 className="heading-1 text-center">{aiAutomation.buildHeading}</h2>
          <BentoGrid cols={3} className="mt-12">
            {aiAutomation.buildItems.map((item, index) => (
              <BentoTile
                key={item.title}
                chip={String(index + 1).padStart(2, "0")}
                iconImage={subServiceIconByTitle(item.title)}
                keepChip
                title={item.title}
                body={
                  <>
                    {item.body.map((p) => (
                      <span key={p} className="block">
                        {p}
                      </span>
                    ))}
                  </>
                }
                bodyClassName="caption flex flex-col gap-2 text-grey"
                href={item.href}
                bodyInline
                wide={index === 0}
              />
            ))}
          </BentoGrid>
        </Container>
      </section>

      {/* Where AI Automation Can Fit — bento tiles. */}
      <section className="section-tight">
        <Container>
          <h2 className="heading-1 text-center">{aiAutomation.fitHeading}</h2>
          <BentoGrid cols={3} className="mt-12">
            {aiAutomation.fitItems.map((item) => (
              <BentoTile
                key={item.title}
                title={item.title}
                body={item.body}
              />
            ))}
          </BentoGrid>
        </Container>
      </section>

      {/* Built Around Your Business */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="heading-1">{aiAutomation.processHeading}</h2>
              <div className="mt-4 flex flex-col gap-1">
                {aiAutomation.processLead.map((line) => (
                  <p key={line} className="body-lg text-ink2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <ol className="flex flex-col gap-6">
              {aiAutomation.processSteps.map((step, i) => (
                <li key={step} className="flex gap-5">
                  <span className="caption mt-1 shrink-0 text-greyLight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="body-lg text-ink2">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Your Existing Stack */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-prose">
            <h2 className="heading-1">{aiAutomation.stackHeading}</h2>
            <p className="body-lg mt-6 text-ink2">{aiAutomation.stackLead}</p>
            <p className="body-lg mt-4 font-medium text-ink">{aiAutomation.stackTools}</p>
            <p className="body-lg mt-4 text-ink2">{aiAutomation.stackBody}</p>
          </div>
        </Container>
      </section>

      {/* Why Shri Pro Craft */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{aiAutomation.whyHeading}</h2>
            <div className="mt-6 flex flex-col gap-3">
              {aiAutomation.whyBody.map((p) => (
                <p key={p} className="body-lg text-ink2">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button href={aiAutomation.whyCta.href} variant="primary">
                {aiAutomation.whyCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="heading-1 text-center">Common questions</h2>
            <div className="mt-10 flex flex-col gap-3">
              {aiAutomation.faqs.map((faq) => (
                <details key={faq.question} className="group card px-6 py-5 transition-colors duration-300 hover:border-hairlineStrong">
                  <summary className="body-base flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
                    {faq.question}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="shrink-0 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <path d="M6 0V12M0 6H12" stroke="#333333" strokeWidth="1.3" />
                    </svg>
                  </summary>
                  <p className="body-base mt-3 text-grey">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related services — bento link tiles. */}
      {related.length > 0 && (
        <section className="section-tight bg-surface">
          <Container>
            <p className="label mb-8 text-center">Related services</p>
            <BentoGrid cols={related.length >= 4 ? 4 : 3}>
              {related.map((service) => (
                <BentoTile
                  key={service.slug}
                  icon={ArrowUpRight}
                  title={service.navLabel}
                  href={`/growth-engine/${service.slug}`}
                  footer="View service"
                />
              ))}
            </BentoGrid>
          </Container>
        </section>
      )}
    </>
  );
}
