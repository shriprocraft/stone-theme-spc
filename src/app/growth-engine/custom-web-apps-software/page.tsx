import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoTile } from "@/components/ui/bento";
import { subServiceIconByTitle } from "@/lib/service-icons";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { customWebAppsSoftware } from "@/lib/content/custom-web-apps-software";
import { site } from "@/lib/site";

const servicePathSlash = "/growth-engine/custom-web-apps-software/";
const serviceId = `${site.url}${servicePathSlash}#service`;

export const metadata: Metadata = buildMetadata({
  title: customWebAppsSoftware.metaTitle,
  description: customWebAppsSoftware.metaDescription,
  path: "/growth-engine/custom-web-apps-software",
});

export default function Page() {
  return (
    <>
      {/* Service — provider resolves to the site-wide Organization @id;
          areaServed mirrors the agency's real service area. serviceType is
          the broader development discipline behind the listed offerings. */}
      <JsonLd
        data={serviceSchema({
          name: customWebAppsSoftware.navLabel,
          serviceType: "Custom Web Application and Software Development",
          path: servicePathSlash,
          id: serviceId,
        })}
      />
      {/* WebPage — about references the Service entity above. */}
      <JsonLd
        data={serviceWebPageSchema({
          path: servicePathSlash,
          name: `${customWebAppsSoftware.navLabel} | ${site.name}`,
          serviceId,
        })}
      />
      {/* BreadcrumbList — mirrors the visible breadcrumb trail
          (this service sits directly under Growth Engine). */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Engine", path: "/growth-engine/" },
          { name: customWebAppsSoftware.navLabel, path: servicePathSlash },
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
            <span className="text-grey">{customWebAppsSoftware.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <img
              src="/services/custom-web-apps-software.webp"
              alt=""
              width={256}
              height={256}
              draggable={false}
              className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
            <p className="label mb-5">{customWebAppsSoftware.eyebrow}</p>
            <h1 className="display-2">{customWebAppsSoftware.h1}</h1>
            <div className="mx-auto mt-6 max-w-[54ch]">
              {customWebAppsSoftware.heroLead.map((line) => (
                <p key={line} className="body-xl font-medium text-ink">
                  {line}
                </p>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                {customWebAppsSoftware.heroBody.map((p) => (
                  <p key={p} className="body-xl text-grey">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Build — bento tiles; the flagship offering opens wide
          so the 3-column grid closes at 5 items. */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <h2 className="heading-1 text-center">{customWebAppsSoftware.buildHeading}</h2>
            <BentoGrid cols={3} className="mt-10">
              {customWebAppsSoftware.buildItems.map((item, index) => (
                <BentoTile
                  key={item.title}
                  chip={String(index + 1).padStart(2, "0")}
                  iconImage={subServiceIconByTitle(item.title)}
                  keepChip
                  title={item.title}
                  body={item.body}
                  bodyClassName="body-base text-grey"
                  href={item.href}
                  bodyInline
                  wide={index === 0}
                  titleAs="h3"
                />
              ))}
            </BentoGrid>
          </div>
        </Container>
      </section>

      {/* Built for the Problem You're Actually Solving */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="heading-1">{customWebAppsSoftware.problemHeading}</h2>
            {customWebAppsSoftware.problemLead.map((line) => (
              <p key={line} className="body-lg mt-6 font-medium text-ink">
                {line}
              </p>
            ))}
            <ul className="mx-auto mt-6 grid max-w-[520px] grid-cols-1 gap-x-10 gap-y-2.5 text-left sm:grid-cols-2">
              {customWebAppsSoftware.problemQuestions.map((question) => (
                <li key={question} className="body-lg flex items-start gap-2.5 text-ink2">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {question}
                </li>
              ))}
            </ul>
            <p className="body-lg mt-6 font-medium text-ink">
              {customWebAppsSoftware.problemClosing}
            </p>
          </div>
        </Container>
      </section>

      {/* From First Version to Working Product */}
      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="heading-1">{customWebAppsSoftware.mvpHeading}</h2>
            {customWebAppsSoftware.mvpLead.map((line) => (
              <p key={line} className="body-lg mt-6 font-medium text-ink">
                {line}
              </p>
            ))}
            {customWebAppsSoftware.mvpBody.map((p) => (
              <p key={p} className="body-lg mt-4 text-grey">
                {p}
              </p>
            ))}
            <div className="mt-8 flex justify-center">
              <Button href={customWebAppsSoftware.closingCta.href} variant="primary">
                {customWebAppsSoftware.closingCta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
