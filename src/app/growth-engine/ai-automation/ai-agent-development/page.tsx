import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { subServiceIconByTitle } from "@/lib/service-icons";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { aiAgentDevelopment } from "@/lib/content/ai-agent-development";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/ai-automation/ai-agent-development/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: aiAgentDevelopment.metaTitle,
  description: aiAgentDevelopment.metaDescription,
  path: "/growth-engine/ai-automation/ai-agent-development",
});

export default function Page() {
  return (
    <>
      {/* Service — provider resolves to the site-wide Organization @id;
          areaServed mirrors the agency's real service area. */}
      <JsonLd
        data={serviceSchema({
          name: aiAgentDevelopment.navLabel,
          serviceType: "AI Agent Development",
          description: aiAgentDevelopment.metaDescription,
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      {/* WebPage — about references the Service entity above. */}
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${aiAgentDevelopment.navLabel} | ${site.name}`,
          serviceId,
        })}
      />
      {/* BreadcrumbList — mirrors the visible breadcrumb trail. */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Engine", path: "/growth-engine/" },
          { name: "AI Automation & AI Agents", path: "/growth-engine/ai-automation/" },
          { name: aiAgentDevelopment.navLabel, path: servicePathSlash },
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
            <span className="text-grey">{aiAgentDevelopment.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            {subServiceIconByTitle(aiAgentDevelopment.navLabel) ? (
              <img
                src={subServiceIconByTitle(aiAgentDevelopment.navLabel)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{aiAgentDevelopment.eyebrow}</p>
            <h1 className="display-2">{aiAgentDevelopment.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {aiAgentDevelopment.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
            </div>
            <ul className="mx-auto mt-8 grid max-w-[560px] grid-cols-1 gap-x-10 gap-y-2.5 text-left sm:grid-cols-2">
              {aiAgentDevelopment.agentJobs.map((job) => (
                <li key={job} className="body-lg flex items-center gap-2.5 text-ink2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {job}
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-8 max-w-[54ch]">
              {aiAgentDevelopment.heroBody.map((p) => (
                <p key={p} className="body-xl text-grey">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* From Prompt to Process */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-prose">
            <h2 className="heading-1">{aiAgentDevelopment.processHeading}</h2>
            <div className="mt-6 flex flex-col gap-1">
              {aiAgentDevelopment.processLead.map((line) => (
                <p key={line} className="body-lg font-medium text-ink">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {aiAgentDevelopment.processBody.map((p) => (
                <p key={p} className="body-lg text-ink2">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What We Build */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="heading-1">{aiAgentDevelopment.buildHeading}</h2>
            <div className="mx-auto mt-8 grid max-w-[520px] grid-cols-2 gap-x-8 gap-y-2 text-left">
              {aiAgentDevelopment.buildItems.map((item) => (
                <p key={item} className="body-lg text-ink2">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Built With Guardrails */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{aiAgentDevelopment.guardrailsHeading}</h2>
            <div className="mt-6 flex flex-col gap-1">
              {aiAgentDevelopment.guardrailsLead.map((line) => (
                <p key={line} className="body-lg font-medium text-ink">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {aiAgentDevelopment.guardrailsBody.map((p) => (
                <p key={p} className="body-lg text-ink2">
                  {p}
                </p>
              ))}
            </div>
            <p className="body-lg mt-6 font-medium text-ink">
              {aiAgentDevelopment.guardrailsEmphasis}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={aiAgentDevelopment.closingCta.href} variant="primary">
                {aiAgentDevelopment.closingCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
