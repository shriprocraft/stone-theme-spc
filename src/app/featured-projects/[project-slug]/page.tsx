import { serviceIconByName } from "@/lib/service-icons";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, projectCreativeWorkSchema, serviceWebPageSchema } from "@/lib/schema";
import { projects } from "@/lib/content/projects";
import { site } from "@/lib/site";

type Params = { "project-slug": string };

export function generateStaticParams() {
  return projects.map((project) => ({ "project-slug": project.slug }));
}

// Next.js 15+/16: dynamic-route `params` is a Promise and MUST be awaited —
// reading it synchronously yields undefined, which made every case-study
// slug fail the lookup below and render notFound() (the 404 regression).
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { "project-slug": slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.business} Case Study | Shri Pro Craft`,
    description: project.outcome ?? project.summary?.[0] ?? project.business,
    path: `/featured-projects/${project.slug}`,
  });
}

const fields: { key: keyof typeof projects[number]; label: string }[] = [
  { key: "challenge", label: "Challenge" },
  { key: "objective", label: "Objective" },
  { key: "strategy", label: "Strategy" },
  { key: "execution", label: "Execution" },
  { key: "outcome", label: "Outcome" },
  { key: "keyLearnings", label: "Key Learnings" },
];

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { "project-slug": slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectPath = `/featured-projects/${project.slug}/`;
  const projectId = `${site.url}${projectPath}#project`;
  const aboutText = project.objective ?? project.summary?.[0] ?? project.business;

  return (
    <>
      <JsonLd
        data={projectCreativeWorkSchema({
          path: projectPath,
          name: project.business,
          about: aboutText,
          image: project.cover?.src,
        })}
      />
      <JsonLd
        data={serviceWebPageSchema({
          path: projectPath,
          name: `${project.business} | ${site.name}`,
          serviceId: projectId,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Featured Projects", path: "/featured-projects/" },
          { name: project.business, path: projectPath },
        ])}
      />

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="label mb-5">{project.industry}</p>
            <h1 className="display-2">{project.business}</h1>
          </div>
        </Container>
      </section>

      {/* Documented case-study narrative — ordered sections sourced from
          the project's own data (no invented metrics): overview, challenge,
          strategy/execution/approach, services chips and verifiable results. */}
      {project.caseStudy && project.caseStudy.length > 0 && (
        <section className="section-tight">
          <Container>
            <div className="mx-auto flex max-w-prose flex-col gap-10">
              {project.caseStudy.map((section) => (
                <div key={section.heading}>
                  <h2 className="heading-2">{section.heading}</h2>
                  {(section.body || section.bullets) && (
                    <div className="mt-3 flex flex-col gap-3">
                      {section.body?.map((line) => (
                        <p key={line} className="body-lg text-ink2">{line}</p>
                      ))}
                      {section.bullets && (
                        <ul className="flex flex-col gap-2.5">
                          {section.bullets.map((line) => (
                            <li key={line} className="body-lg flex gap-3 text-ink2">
                              <span
                                aria-hidden="true"
                                className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                              />
                              {line}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  {section.services && project.servicesUsed && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.servicesUsed.map((service) => (
                        <span
                          key={service}
                          className="caption inline-flex items-center rounded-full border border-hairlineStrong py-1.5 pl-3 pr-4"
                        >
                          {serviceIconByName(service) ? (
                            <img src={serviceIconByName(service)} alt="" width={256} height={256} draggable={false} className="-ml-2 mr-1.5 inline-block h-7 w-7 object-contain align-middle" />
                          ) : null}
                          {service}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.gallery ? (
        <>
          <section className="section-tight">
            <Container>
              <div className="mx-auto max-w-[720px] text-center">
                <h2 className="heading-2">Project Images</h2>
              </div>
              <div className="mx-auto mt-8 grid max-w-[1040px] gap-6 sm:grid-cols-2">
                {project.gallery.map((shot) => (
                  <figure
                    key={shot.src}
                    className="overflow-hidden rounded-2xl border border-hairline bg-paper"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className={
                        project.galleryLayout === "uniform"
                          ? "aspect-[16/10] w-full object-cover object-top"
                          : "h-auto w-full"
                      }
                      loading="lazy"
                    />
                    <figcaption className="body-base flex flex-col gap-1.5 border-t border-hairline p-5 text-ink2">
                      {Array.isArray(shot.caption) ? (
                        shot.caption.map((line) => <span key={line}>{line}</span>)
                      ) : (
                        <span>{shot.caption}</span>
                      )}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Container>
          </section>

          {project.summary && (
            <section className="section-tight bg-surface">
              <Container>
                <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center">
                  <p className="body-lg text-ink2">{project.summary[0]}</p>
                  <p className="body-lg text-ink2">{project.summary[1]}</p>
                </div>
              </Container>
            </section>
          )}
        </>
      ) : (
        <section className="section-tight">
          <Container>
            <div className="mx-auto flex max-w-prose flex-col gap-10">
              {fields.map((field) => (
                <div key={field.key}>
                  <h2 className="heading-2">{field.label}</h2>
                  <p className="body-lg mt-3 text-ink2">{String(project[field.key])}</p>
                </div>
              ))}

              {project.servicesUsed && (
                <div>
                  <h2 className="heading-2">Services Used</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.servicesUsed.map((service) => (
                      <span key={service} className="caption inline-flex items-center rounded-full border border-hairlineStrong py-1.5 pl-3 pr-4">
                        {serviceIconByName(service) ? (
                          <img src={serviceIconByName(service)} alt="" width={256} height={256} draggable={false} className="-ml-2 mr-1.5 inline-block h-7 w-7 object-contain align-middle" />
                        ) : null}
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="display-2">Want a result like this?</h2>
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
