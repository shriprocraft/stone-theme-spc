import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { subServiceIconByTitle } from "@/lib/service-icons";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { saasApplicationDevelopment } from "@/lib/content/saas-application-development";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/custom-web-apps-software/saas-application-development/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: saasApplicationDevelopment.metaTitle,
  description: saasApplicationDevelopment.metaDescription,
  path: "/growth-engine/custom-web-apps-software/saas-application-development",
});

export default function Page() {
  return (
    <>
      {/* Service — provider resolves to the site-wide Organization @id;
          areaServed mirrors the agency's real service area. No description
          or capability claims beyond what the page itself shows. */}
      <JsonLd
        data={serviceSchema({
          name: saasApplicationDevelopment.navLabel,
          serviceType: "SaaS Application Development",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      {/* WebPage — about references the Service entity above. */}
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${saasApplicationDevelopment.navLabel} | ${site.name}`,
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
          { name: saasApplicationDevelopment.navLabel, path: servicePathSlash },
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
            <span className="text-grey">{saasApplicationDevelopment.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            {subServiceIconByTitle(saasApplicationDevelopment.navLabel) ? (
              <img
                src={subServiceIconByTitle(saasApplicationDevelopment.navLabel)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{saasApplicationDevelopment.eyebrow}</p>
            <h1 className="display-2">{saasApplicationDevelopment.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {saasApplicationDevelopment.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                {saasApplicationDevelopment.heroBody.map((p) => (
                  <p key={p} className="body-xl text-grey">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* From Idea to Product */}
      <section className="section-tight bg-surface">
        <Container>
          <h2 className="heading-1 text-center">{saasApplicationDevelopment.processHeading}</h2>
          <ol className="mx-auto mt-12 flex max-w-prose flex-col gap-8">
            {saasApplicationDevelopment.processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="caption mt-1 shrink-0 text-greyLight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="body-base font-semibold text-ink">{step.title}</h3>
                  <p className="body-lg mt-1.5 text-ink2">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Built With Growth in Mind */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{saasApplicationDevelopment.growthHeading}</h2>
            {saasApplicationDevelopment.growthLead.map((line) => (
              <p key={line} className="body-lg mt-6 font-medium text-ink">
                {line}
              </p>
            ))}
            {saasApplicationDevelopment.growthBody.map((p) => (
              <p key={p} className="body-lg mt-4 text-grey">
                {p}
              </p>
            ))}
            <p className="body-lg mt-6 font-medium text-ink">
              {saasApplicationDevelopment.growthEmphasis}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={saasApplicationDevelopment.closingCta.href} variant="primary">
                {saasApplicationDevelopment.closingCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
