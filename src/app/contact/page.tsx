import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { ShriProCraftMap } from "@/components/maps/ShriProCraftMap";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Shri Pro Craft | Coimbatore Performance Marketing Agency",
  description:
    "Start a conversation with Shri Pro Craft about your performance marketing, SEO or website goals. Tell us about your business and we'll respond directly.",
  path: "/contact",
});

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.streetAddress}, ${site.locality}, ${site.region} ${site.postalCode}, India`,
)}`;

type ContactCard = {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

const contactCards: ContactCard[] = [
  {
    title: "Email us",
    value: site.growthEmail,
    href: `mailto:${site.growthEmail}`,
    icon: Mail,
  },
  {
    title: "Call us",
    value: site.phone.display,
    href: site.phone.href,
    icon: Phone,
  },
  {
    title: "Our location",
    value: `${site.locality}, ${site.region}, India`,
    href: mapsUrl,
    icon: MapPin,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />

      <section className="section-tight">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* Intro + contact channels */}
            <div>
              <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-paper py-2 pl-3.5 pr-4 text-[0.8125rem] font-medium text-ink2 shadow-[0_1px_2px_rgba(10,10,10,0.05)]">
                <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                Contact
              </p>
              <h1 className="display-2">Let&apos;s Build Something That Grows.</h1>
              <p className="body-xl mt-6 max-w-[46ch] text-grey">
                Tell us about your business, your current numbers and what
                you&apos;re trying to achieve. We&apos;ll respond directly — no
                automated sales sequence.
              </p>

              <ul className="mt-10 flex flex-col gap-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <li key={card.title}>
                      <a
                        href={card.href}
                        {...(card.external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="tile group flex items-center gap-4 p-4 transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:shadow-[0_30px_58px_-28px_rgba(25,24,23,0.5)] sm:p-5"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hairline bg-surface text-ink">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.9375rem] font-semibold text-ink">
                            {card.title}
                          </span>
                          <span className="body-base block truncate text-grey">
                            {card.value}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="tile-arrow ml-auto"
                        >
                          <ArrowUpRight size={15} />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Real interactive Google Maps — Shri Pro Craft place */}
              <div className="mt-10 overflow-hidden rounded-3xl border border-hairline bg-paper p-2 shadow-[0_1px_2px_rgba(10,10,10,0.05),0_24px_56px_-24px_rgba(10,10,10,0.2)]">
                <ShriProCraftMap />
              </div>
            </div>

            {/* Form card */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
