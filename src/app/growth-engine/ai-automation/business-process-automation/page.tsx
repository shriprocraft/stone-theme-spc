import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { subServiceIconByTitle } from "@/lib/service-icons";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { businessProcessAutomation } from "@/lib/content/business-process-automation";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/ai-automation/business-process-automation/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: businessProcessAutomation.metaTitle,
  description: businessProcessAutomation.metaDescription,
  path: "/growth-engine/ai-automation/business-process-automation",
});

export default function Page() {
  return (
    <>
      {/* Service — provider resolves to the site-wide Organization @id;
          areaServed mirrors the agency's real service area. No description
          or capability claims beyond what the page itself shows. */}
      <JsonLd
        data={serviceSchema({
          name: businessProcessAutomation.navLabel,
          serviceType: "Business Process Automation",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      {/* WebPage — about references the Service entity above. */}
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${businessProcessAutomation.navLabel} | ${site.name}`,
          serviceId,
        })}
      />
      {/* BreadcrumbList — mirrors the visible breadcrumb trail. */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Engine", path: "/growth-engine/" },
          { name: "AI Automation & AI Agents", path: "/growth-engine/ai-automation/" },
          { name: businessProcessAutomation.navLabel, path: servicePathSlash },
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
            <span className="text-grey">{businessProcessAutomation.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            {subServiceIconByTitle(businessProcessAutomation.navLabel) ? (
              <img
                src={subServiceIconByTitle(businessProcessAutomation.navLabel)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{businessProcessAutomation.eyebrow}</p>
            <h1 className="display-2">{businessProcessAutomation.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {businessProcessAutomation.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              <ul className="mx-auto mt-7 grid max-w-[440px] grid-cols-1 gap-x-10 gap-y-2.5 text-left sm:grid-cols-2">
                {businessProcessAutomation.heroExamples.map((example) => (
                  <li key={example} className="body-lg flex items-center gap-2.5 text-ink2">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {example}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-4">
                {businessProcessAutomation.heroBody.map((p) => (
                  <p key={p} className="body-xl text-grey">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Start With the Process */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="heading-1">{businessProcessAutomation.processHeading}</h2>
            {businessProcessAutomation.processLead.map((line) => (
              <p key={line} className="body-lg mt-6 font-medium text-ink">
                {line}
              </p>
            ))}
            <p className="body-lg mt-4 text-grey">{businessProcessAutomation.processIntro}</p>
            <ul className="mx-auto mt-6 grid max-w-[460px] grid-cols-1 gap-x-10 gap-y-2.5 text-left sm:grid-cols-2">
              {businessProcessAutomation.processItems.map((item) => (
                <li key={item} className="body-lg flex items-center gap-2.5 text-ink2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="body-lg mt-6 font-medium text-ink">
              {businessProcessAutomation.processClosing}
            </p>
          </div>
        </Container>
      </section>

      {/* Built Around the Way You Work */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{businessProcessAutomation.adaptHeading}</h2>
            <p className="body-lg mt-6 font-medium text-ink">
              {businessProcessAutomation.adaptEmphasis}
            </p>
            {businessProcessAutomation.adaptBody.map((p) => (
              <p key={p} className="body-lg mt-4 text-grey">
                {p}
              </p>
            ))}
            <div className="mt-8 flex justify-center">
              <Button href={businessProcessAutomation.closingCta.href} variant="primary">
                {businessProcessAutomation.closingCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
