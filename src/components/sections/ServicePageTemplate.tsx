import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoTile } from "@/components/ui/bento";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema, serviceWebPageSchema } from "@/lib/schema";
import { services, type ServiceContent } from "@/lib/content/services";
import { serviceIconByHref, serviceIconBySlug, subServiceIconByTitle } from "@/lib/service-icons";
import { site } from "@/lib/site";

export function ServicePageTemplate({
  content,
  completeSchema = false,
  serviceName,
  serviceType,
  webPageTitle,
  breadcrumbLabel,
}: {
  content: ServiceContent;
  /** Opt in to the full Service + WebPage + BreadcrumbList graph, with
   *  proper @id cross-references and trailing-slash canonical URLs.
   *  Off by default so other service pages keep their current schema
   *  shape until they're migrated too. */
  completeSchema?: boolean;
  /** Override the Service/WebPage name when it's more specific than the
   *  short nav label (e.g. "Google Ads Management" vs "Google Ads") —
   *  the breadcrumb always uses the shorter navLabel regardless.
   *  Defaults to navLabel. */
  serviceName?: string;
  /** Override schema.org's serviceType when it differs from the display
   *  name (e.g. name "SEO Services" but serviceType "Search Engine
   *  Optimization"). Defaults to the resolved service name. */
  serviceType?: string;
  /** Override the WebPage title prefix when it differs from the Service
   *  name itself (e.g. Service "Lead Generation" but WebPage title
   *  "Lead Generation Services"). Defaults to the resolved service name;
   *  " | Shri Pro Craft" is always appended. */
  webPageTitle?: string;
  /** Override the breadcrumb's own label when it should differ from the
   *  nav label's exact text (e.g. navLabel uses "&" but the breadcrumb
   *  should spell out "and"). Defaults to navLabel. */
  breadcrumbLabel?: string;
}) {
  const related = content.relatedSlugs.map((slug) => services[slug]).filter(Boolean);
  const servicePathSlash = `/growth-engine/${content.slug}/`;
  const serviceId = `${site.url}${servicePathSlash}#service`;
  const resolvedServiceName = serviceName ?? content.navLabel;

  return (
    <>
      {completeSchema ? (
        <>
          <JsonLd
            data={serviceSchema({
              name: resolvedServiceName,
              serviceType: serviceType ?? resolvedServiceName,
              path: servicePathSlash,
              id: serviceId,
            })}
          />
          <JsonLd
            data={serviceWebPageSchema({
              path: servicePathSlash,
              name: `${webPageTitle ?? resolvedServiceName} | ${site.name}`,
              serviceId,
            })}
          />
          <JsonLd
            data={breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Growth Engine", path: "/growth-engine/" },
              { name: breadcrumbLabel ?? content.navLabel, path: servicePathSlash },
            ])}
          />
        </>
      ) : (
        <>
          <JsonLd
            data={serviceSchema({
              name: content.h1,
              description: content.metaDescription,
              path: `/growth-engine/${content.slug}`,
            })}
          />
          <JsonLd
            data={breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Growth Engine", path: "/growth-engine" },
              { name: content.navLabel, path: `/growth-engine/${content.slug}` },
            ])}
          />
        </>
      )}
      <JsonLd data={faqSchema(content.faqs, servicePathSlash)} />

      {/* Breadcrumb */}
      <div>
        <Container className="flex h-14 items-center">
          <nav aria-label="Breadcrumb" className="caption flex items-center gap-2 text-greyLight">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/growth-engine" className="hover:text-ink">Growth Engine</Link>
            <span aria-hidden="true">/</span>
            <span className="text-grey">{content.navLabel}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            {serviceIconBySlug(content.slug) ? (
              <img
                src={serviceIconBySlug(content.slug)}
                alt=""
                width={256}
                height={256}
                draggable={false}
                className="mx-auto mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ) : null}
            <p className="label mb-5">{content.eyebrow}</p>
            <h1 className="display-2">{content.h1}</h1>
            <p className="body-xl mx-auto mt-6 max-w-[54ch]">{content.heroSubhead}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={content.heroPrimaryCta.href} variant="primary">
                {content.heroPrimaryCta.label}
              </Button>
              <Button href={content.heroSecondaryCta.href} variant="secondary">
                {content.heroSecondaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Definition */}
      <section className="section-tight">
        <Container>
            <div className="mx-auto max-w-prose">
              <h2 className="heading-1">{content.definitionHeading}</h2>
              <div className="mt-6 flex flex-col gap-4">
                {content.definitionParagraphs.map((p, i) => (
                  <p key={i} className="body-lg text-ink2">
                    {p}
                  </p>
                ))}
              </div>
            </div>
        </Container>
      </section>

      {/* Coverage — bento tiles with numbered chips; linked items keep
          their arrow affordance, unlinked ones stay informational. */}
      <section className="section-tight bg-surface">
        <Container>
            <h2 className="heading-1 text-center">{content.coverageHeading}</h2>
          <BentoGrid cols={3} className="mt-12">
            {content.coverage.map((item, index) => (
              <BentoTile
                key={item.title}
                chip={String(index + 1).padStart(2, "0")}
                iconImage={subServiceIconByTitle(item.title) ?? (item.href ? serviceIconByHref(item.href) : undefined)}
                keepChip
                title={item.title}
                body={item.body}
                href={item.href}
                bodyInline
              />
            ))}
          </BentoGrid>
        </Container>
      </section>

      {/* Approach */}
      <section className="section-tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <h2 className="heading-1">{content.approachHeading}</h2>
              <ol className="flex flex-col gap-6">
                {content.approachParagraphs.map((p, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="caption mt-1 shrink-0 text-greyLight">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="body-lg text-ink2">{p}</p>
                  </li>
                ))}
              </ol>
          </div>
        </Container>
      </section>

      {/* Why — bento tiles; the first reason is the elevated hero card. */}
      <section className="section-tight bg-surface">
        <Container>
            <h2 className="heading-1 text-center">{content.whyHeading}</h2>
          <BentoGrid cols={3} className="mt-12">
            {content.whyPoints.map((point, index) => (
              <BentoTile
                key={point.title}
                icon={Check}
                hero={index === 0}
                title={point.title}
                body={point.body}
                bodyClassName="body-base text-grey"
              />
            ))}
          </BentoGrid>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="heading-1 text-center">Common questions</h2>
            <div className="mt-10 flex flex-col gap-3">
              {content.faqs.map((faq) => (
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

      {/* Related services — bento link tiles; columns follow the count
          so the row always closes. */}
      {related.length > 0 && (
        <section className="section-tight bg-surface">
          <Container>
            <p className="label mb-8 text-center">Related services</p>
            <BentoGrid cols={related.length >= 4 ? 4 : 3}>
              {related.map((service) => (
                <BentoTile
                  key={service.slug}
                  icon={ArrowUpRight}
                  iconImage={serviceIconBySlug(service.slug)}
                  title={service.navLabel}
                  href={`/growth-engine/${service.slug}`}
                  footer="View service"
                />
              ))}
            </BentoGrid>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="display-2">Let's talk about {content.navLabel.toLowerCase()}.</h2>
            <p className="body-lg mt-5 text-grey">
              Tell us where things stand today — we'll tell you honestly what needs fixing first.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
