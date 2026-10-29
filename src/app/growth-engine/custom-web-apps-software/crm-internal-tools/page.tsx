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
import { crmInternalTools } from "@/lib/content/crm-internal-tools";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/custom-web-apps-software/crm-internal-tools/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: crmInternalTools.metaTitle,
  description: crmInternalTools.metaDescription,
  path: "/growth-engine/custom-web-apps-software/crm-internal-tools",
});

export default function Page() {
  return (
    <>
      {/* Service — provider resolves to the site-wide Organization @id;
          areaServed mirrors the agency's real service area. No description
          or capability claims beyond what the page itself shows. */}
      <JsonLd
        data={serviceSchema({
          name: crmInternalTools.navLabel,
          serviceType: "CRM and Internal Tool Development",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      {/* WebPage — about references the Service entity above. */}
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${crmInternalTools.navLabel} | ${site.name}`,
          serviceId,
        })}
      />
      {/* BreadcrumbList — mirrors the visible breadcrumb trail
          (this service is a child of Custom Web Apps & Software). */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Engine", path: "/growth-engine/" },
          { name: "Custom Web Apps & Software", path: "/growth-engine/custom-web-apps-software/" },
          { name: crmInternalTools.navLabel, path: servicePathSlash },
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
            <Link href="/growth-engine/custom-web-apps-software" className="hover:text-ink">
              Custom Web Apps &amp; Software
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-grey">{crmInternalTools.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            {subServiceIconByTitle(crmInternalTools.navLabel) ? (
              <img
                src={subServiceIconByTitle(crmInternalTools.navLabel)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{crmInternalTools.eyebrow}</p>
            <h1 className="display-2">{crmInternalTools.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {crmInternalTools.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                {crmInternalTools.heroBody.map((p) => (
                  <p key={p} className="body-xl text-grey">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Can Build */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <h2 className="heading-1 text-center">{crmInternalTools.buildHeading}</h2>
            {/* Bento tiles; the last tile spans two columns so the
                3-column grid closes at 5 items. */}
            <BentoGrid cols={3} className="mt-10">
              {crmInternalTools.buildItems.map((item, index) => (
                <BentoTile
                  key={item.title}
                  chip={String(index + 1).padStart(2, "0")}
                  title={item.title}
                  body={item.body}
                  bodyClassName="body-base text-grey"
                  wide={index === crmInternalTools.buildItems.length - 1}
                  titleAs="h3"
                />
              ))}
            </BentoGrid>
          </div>
        </Container>
      </section>

      {/* Your Process. Your System. */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{crmInternalTools.processHeading}</h2>
            {crmInternalTools.processLead.map((line) => (
              <p key={line} className="body-lg mt-6 font-medium text-ink">
                {line}
              </p>
            ))}
            {crmInternalTools.processBody.map((p) => (
              <p key={p} className="body-lg mt-4 text-grey">
                {p}
              </p>
            ))}
            <p className="body-lg mt-6 font-medium text-ink">
              {crmInternalTools.processEmphasis}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={crmInternalTools.closingCta.href} variant="primary">
                {crmInternalTools.closingCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
