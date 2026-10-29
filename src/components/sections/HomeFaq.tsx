import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { homeFaqs } from "@/lib/content/home-faq";

/**
 * Homepage FAQ. Server-rendered native <details>/<summary> accordion (same
 * pattern as the service-page FAQs): answers are in the HTML on first load,
 * keyboard/screen-reader support comes from the platform, no client JS.
 * The FAQPage JSON-LD is generated from the same `homeFaqs` array.
 */
export function HomeFaq() {
  const schema = faqSchema(
    homeFaqs.map(({ question, answer }) => ({ question, answer })),
    "/",
  );

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section bg-surface">
      <JsonLd data={schema ? { ...schema, url: `${site.url}/` } : null} />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="max-w-[460px]">
            <p className="label mb-4">FAQ</p>
            <h2 id="faq-heading" className="heading-1">
              Frequently Asked Questions
            </h2>
            <p className="body-lg mt-5 text-grey">
              Everything You Need to Know About Growing Your Business with Shri Pro Craft
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {homeFaqs.map((faq, i) => (
              <details
                key={faq.question}
                className="group card transition-colors duration-300 hover:border-hairlineStrong"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 rounded-[26px] px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 sm:px-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="body-base font-medium text-ink">{faq.question}</h3>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="shrink-0 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path d="M6 0V12M0 6H12" stroke="#333333" strokeWidth="1.3" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 sm:px-6" id={`faq-answer-${i + 1}`}>
                  <p className="body-base text-grey">{faq.answer}</p>
                  <Link
                    href={faq.href}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-sm text-[0.9375rem] font-medium text-brand-deep underline-offset-4 transition-colors hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
                  >
                    {faq.linkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
