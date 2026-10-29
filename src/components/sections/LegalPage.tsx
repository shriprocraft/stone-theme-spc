import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import type { LegalBlock, LegalDocument } from "@/lib/content/legal";

/** Renders the source content's own `**bold**` emphasis markup as <strong>,
 *  without altering any wording. */
function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function ContactBlock() {
  return (
    <div className="card flex flex-col gap-1.5 p-6">
      <p className="body-lg font-medium text-ink">{site.name}</p>
      <p className="body-base text-ink2">
        Website:{" "}
        <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-ink underline hover:no-underline">
          {site.url}
        </a>
      </p>
      <p className="body-base text-ink2">
        Email:{" "}
        <a href={`mailto:${site.email}`} className="text-ink underline hover:no-underline">
          {site.email}
        </a>
      </p>
    </div>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="body-lg mt-4 text-ink2">{renderInline(block.text)}</p>;
    case "subheading":
      return <p className="label mt-6 mb-1 text-ink2">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-4 flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="body-lg border-l-2 border-hairlineStrong pl-4 text-ink2">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <div className="mt-4">
          <ContactBlock />
        </div>
      );
  }
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="label mb-5">Legal</p>
            <h1 className="display-2">{document.title}</h1>
            <p className="caption mt-5 text-grey">Effective Date: {document.effectiveDate}</p>
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px]">
            {document.intro.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "body-lg text-ink2" : "body-lg mt-4 text-ink2"}>
                {renderInline(paragraph)}
              </p>
            ))}

            <div className="mt-12 flex flex-col gap-12">
              {document.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="heading-2">{section.heading}</h2>
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
