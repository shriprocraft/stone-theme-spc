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
import { aiChatbotDevelopment } from "@/lib/content/ai-chatbot-development";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/ai-automation/ai-chatbot-development/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: aiChatbotDevelopment.metaTitle,
  description: aiChatbotDevelopment.metaDescription,
  path: "/growth-engine/ai-automation/ai-chatbot-development",
});

export default function Page() {
  return (
    <>
      {/* Service — provider resolves to the site-wide Organization @id;
          areaServed mirrors the agency's real service area. No description
          or capability claims beyond what the page itself shows. */}
      <JsonLd
        data={serviceSchema({
          name: aiChatbotDevelopment.navLabel,
          serviceType: "AI Chatbot Development",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      {/* WebPage — about references the Service entity above. */}
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${aiChatbotDevelopment.navLabel} | ${site.name}`,
          serviceId,
        })}
      />
      {/* BreadcrumbList — mirrors the visible breadcrumb trail. */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Engine", path: "/growth-engine/" },
          { name: "AI Automation & AI Agents", path: "/growth-engine/ai-automation/" },
          { name: aiChatbotDevelopment.navLabel, path: servicePathSlash },
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
            <span className="text-grey">{aiChatbotDevelopment.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            {subServiceIconByTitle(aiChatbotDevelopment.navLabel) ? (
              <img
                src={subServiceIconByTitle(aiChatbotDevelopment.navLabel)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{aiChatbotDevelopment.eyebrow}</p>
            <h1 className="display-2">{aiChatbotDevelopment.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {aiChatbotDevelopment.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                {aiChatbotDevelopment.heroBody.map((p) => (
                  <p key={p} className="body-xl text-grey">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What Your AI Chatbot Can Do */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <h2 className="heading-1 text-center">
              {aiChatbotDevelopment.capabilitiesHeading}
            </h2>
            {/* Bento tiles; the last tile spans two columns so the
                3-column grid closes at 5 items. */}
            <BentoGrid cols={3} className="mt-10">
              {aiChatbotDevelopment.capabilities.map((capability, index) => (
                <BentoTile
                  key={capability.title}
                  chip={String(index + 1).padStart(2, "0")}
                  title={capability.title}
                  body={capability.body}
                  bodyClassName="body-base text-grey"
                  wide={index === aiChatbotDevelopment.capabilities.length - 1}
                />
              ))}
            </BentoGrid>
          </div>
        </Container>
      </section>

      {/* Built Around Your Information */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{aiChatbotDevelopment.infoHeading}</h2>
            <p className="body-lg mt-6 font-medium text-ink">
              {aiChatbotDevelopment.infoEmphasis}
            </p>
            {aiChatbotDevelopment.infoBody.map((p) => (
              <p key={p} className="body-lg mt-4 text-grey">
                {p}
              </p>
            ))}
            <div className="mt-8 flex justify-center">
              <Button href={aiChatbotDevelopment.closingCta.href} variant="primary">
                {aiChatbotDevelopment.closingCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
