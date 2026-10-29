import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceWebPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { executionStages } from "@/lib/content/execution-model";
import { ExecutionTimeline } from "@/components/sections/ExecutionTimeline";

export const metadata: Metadata = buildMetadata({
  title: "Execution Model | How Shri Pro Craft Works",
  description:
    "The six-stage process behind every Shri Pro Craft engagement — Diagnose, Position, Build, Launch, Optimise, Scale — and the thinking behind each stage.",
  path: "/execution-model",
});

export default function ExecutionModelPage() {
  return (
    <>
      <JsonLd
        data={serviceWebPageSchema({
          path: "/execution-model/",
          name: "Execution Model | Shri Pro Craft",
          serviceId: `${site.url}/#organization`,
          isPartOfWebsite: true,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Execution Model", path: "/execution-model/" },
        ])}
      />

      <section className="section-tight">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="label mb-5">Execution Model</p>
            <h1 className="display-2">Six stages. No skipped steps.</h1>
            <p className="body-xl mx-auto mt-6 max-w-[54ch]">
              This is the sequence every engagement runs through — the order
              matters, because each stage is what makes the next one
              accurate rather than guesswork.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <ExecutionTimeline stages={executionStages} />
        </Container>
      </section>

      <section className="section-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="display-2">See this applied to your business.</h2>
            <p className="body-lg mt-5 text-grey">
              We'll walk through where your acquisition system stands today
              against these six stages.
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
