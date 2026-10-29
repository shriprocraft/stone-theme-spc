import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { subServiceIconByTitle } from "@/lib/service-icons";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { aiAutomationServices } from "@/lib/content/ai-automation-services";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/ai-automation/ai-automation-services/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: aiAutomationServices.metaTitle,
  description: aiAutomationServices.metaDescription,
  path: "/growth-engine/ai-automation/ai-automation-services",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: aiAutomationServices.navLabel,
          serviceType: "AI Automation Services",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${aiAutomationServices.navLabel} | ${site.name}`,
          serviceId,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Engine", path: "/growth-engine/" },
          { name: "AI Automation", path: "/growth-engine/ai-automation/" },
          { name: aiAutomationServices.navLabel, path: servicePathSlash },
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
            <Link href="/growth-engine/ai-automation" className="hover:text-ink">AI Automation</Link>
            <span aria-hidden="true">/</span>
            <span className="text-grey">{aiAutomationServices.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            {subServiceIconByTitle(aiAutomationServices.navLabel) ? (
              <img
                src={subServiceIconByTitle(aiAutomationServices.navLabel)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{aiAutomationServices.eyebrow}</p>
            <h1 className="display-2">{aiAutomationServices.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {aiAutomationServices.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              {aiAutomationServices.heroBody.map((p) => (
                <p key={p} className="body-xl mt-4 text-grey">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What Can Be Automated */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="heading-1">{aiAutomationServices.automatableHeading}</h2>
            <div className="mx-auto mt-8 grid max-w-[520px] grid-cols-2 gap-x-8 gap-y-2 text-left sm:grid-cols-2">
              {aiAutomationServices.automatableItems.map((item) => (
                <p key={item} className="body-lg text-ink2">
                  {item}
                </p>
              ))}
            </div>
            <p className="body-lg mt-8 text-grey">{aiAutomationServices.automatableClosing}</p>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="section-tight">
        <Container>
          <h2 className="heading-1 text-center">{aiAutomationServices.approachHeading}</h2>
          <ol className="mx-auto mt-12 flex max-w-prose flex-col gap-8">
            {aiAutomationServices.approachSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="caption mt-1 shrink-0 text-greyLight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="body-base font-semibold text-ink">{step.title}</p>
                  <p className="body-lg mt-1.5 text-ink2">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Closing */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{aiAutomationServices.closingHeading}</h2>
            <p className="body-lg mt-5 text-grey">{aiAutomationServices.closingLead}</p>
            <p className="body-lg mt-2 font-medium text-ink">{aiAutomationServices.closingEmphasis}</p>
            <div className="mt-8 flex justify-center">
              <Button href={aiAutomationServices.closingCta.href} variant="primary">
                {aiAutomationServices.closingCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
