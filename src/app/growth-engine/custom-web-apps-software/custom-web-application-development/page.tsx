import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { subServiceIconByTitle } from "@/lib/service-icons";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { customWebApplicationDevelopment } from "@/lib/content/custom-web-application-development";
import { site } from "@/lib/site";

const servicePathSlash =
  "/growth-engine/custom-web-apps-software/custom-web-application-development/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: customWebApplicationDevelopment.metaTitle,
  description: customWebApplicationDevelopment.metaDescription,
  path: "/growth-engine/custom-web-apps-software/custom-web-application-development",
});

export default function Page() {
  return (
    <>
      {/* Service — provider resolves to the site-wide Organization @id;
          areaServed mirrors the agency's real service area. No description
          or capability claims beyond what the page itself shows. */}
      <JsonLd
        data={serviceSchema({
          name: customWebApplicationDevelopment.navLabel,
          serviceType: "Custom Web Application Development",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      {/* WebPage — about references the Service entity above. */}
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${customWebApplicationDevelopment.navLabel} | ${site.name}`,
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
          { name: customWebApplicationDevelopment.navLabel, path: servicePathSlash },
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
            <span className="text-grey">{customWebApplicationDevelopment.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            {subServiceIconByTitle(customWebApplicationDevelopment.navLabel) ? (
              <img
                src={subServiceIconByTitle(customWebApplicationDevelopment.navLabel)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{customWebApplicationDevelopment.eyebrow}</p>
            <h1 className="display-2">{customWebApplicationDevelopment.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {customWebApplicationDevelopment.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                {customWebApplicationDevelopment.heroBody.map((p) => (
                  <p key={p} className="body-xl text-grey">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Build */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="heading-1">{customWebApplicationDevelopment.buildHeading}</h2>
            <div className="mx-auto mt-8 grid max-w-[560px] grid-cols-1 gap-x-8 gap-y-2 text-left sm:grid-cols-2">
              {customWebApplicationDevelopment.buildItems.map((item) => (
                <p key={item} className="body-lg text-ink2">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Designed Before It Is Developed */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{customWebApplicationDevelopment.designHeading}</h2>
            {customWebApplicationDevelopment.designLead.map((line) => (
              <p key={line} className="body-lg mt-6 font-medium text-ink">
                {line}
              </p>
            ))}
            <div className="mt-4 flex flex-col gap-4">
              {customWebApplicationDevelopment.designBody.map((p) => (
                <p key={p} className="body-lg text-grey">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button href={customWebApplicationDevelopment.closingCta.href} variant="primary">
                {customWebApplicationDevelopment.closingCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
