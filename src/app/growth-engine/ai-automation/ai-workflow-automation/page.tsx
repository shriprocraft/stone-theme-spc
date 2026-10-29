import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { subServiceIconByTitle } from "@/lib/service-icons";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoTile } from "@/components/ui/bento";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { aiWorkflowAutomation } from "@/lib/content/ai-workflow-automation";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/ai-automation/ai-workflow-automation/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: aiWorkflowAutomation.metaTitle,
  description: aiWorkflowAutomation.metaDescription,
  path: "/growth-engine/ai-automation/ai-workflow-automation",
});

export default function Page() {
  return (
    <>
      {/* Service — provider resolves to the site-wide Organization @id;
          areaServed mirrors the agency's real service area. No description
          or capability claims beyond what the page itself shows. */}
      <JsonLd
        data={serviceSchema({
          name: aiWorkflowAutomation.navLabel,
          serviceType: "AI Workflow Automation",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      {/* WebPage — about references the Service entity above. */}
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${aiWorkflowAutomation.navLabel} | ${site.name}`,
          serviceId,
        })}
      />
      {/* BreadcrumbList — mirrors the visible breadcrumb trail. */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Engine", path: "/growth-engine/" },
          { name: "AI Automation & AI Agents", path: "/growth-engine/ai-automation/" },
          { name: aiWorkflowAutomation.navLabel, path: servicePathSlash },
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
            <Link href="/growth-engine/ai-automation" className="hover:text-ink">
              AI Automation &amp; AI Agents
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-grey">{aiWorkflowAutomation.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            {subServiceIconByTitle(aiWorkflowAutomation.navLabel) ? (
              <img
                src={subServiceIconByTitle(aiWorkflowAutomation.navLabel)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{aiWorkflowAutomation.eyebrow}</p>
            <h1 className="display-2">{aiWorkflowAutomation.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {aiWorkflowAutomation.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              <ul className="mx-auto mt-7 flex max-w-[420px] flex-col gap-2.5 text-left">
                {aiWorkflowAutomation.heroSteps.map((step) => (
                  <li key={step} className="body-lg flex items-center gap-2.5 text-ink2">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {step}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-4">
                {aiWorkflowAutomation.heroBody.map((p) => (
                  <p key={p} className="body-xl text-grey">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Automate */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <h2 className="heading-1 text-center">{aiWorkflowAutomation.automateHeading}</h2>
            {/* Bento tiles; the last tile spans two columns so the
                3-column grid closes at 5 items. */}
            <BentoGrid cols={3} className="mt-10">
              {aiWorkflowAutomation.automateItems.map((item, index) => (
                <BentoTile
                  key={item.title}
                  chip={String(index + 1).padStart(2, "0")}
                  title={item.title}
                  body={item.body}
                  bodyClassName="body-base text-grey"
                  wide={index === aiWorkflowAutomation.automateItems.length - 1}
                />
              ))}
            </BentoGrid>
          </div>
        </Container>
      </section>

      {/* Automation With a Purpose */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{aiWorkflowAutomation.purposeHeading}</h2>
            {aiWorkflowAutomation.purposeLead.map((line) => (
              <p key={line} className="body-lg mt-6 font-medium text-ink">
                {line}
              </p>
            ))}
            {aiWorkflowAutomation.purposeBody.map((p) => (
              <p key={p} className="body-lg mt-4 text-grey">
                {p}
              </p>
            ))}
            <p className="body-lg mt-6 font-medium text-ink">
              {aiWorkflowAutomation.purposeStandard}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={aiWorkflowAutomation.closingCta.href} variant="primary">
                {aiWorkflowAutomation.closingCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
