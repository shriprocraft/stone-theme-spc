import Image from "next/image";
import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaDiscord,
  FaQuora,
  FaRedditAlien,
  FaThreads,
  FaMedium,
} from "react-icons/fa6";
import {
  ArrowUp,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerServiceLinks, site } from "@/lib/site";
import { executionStages } from "@/lib/content/execution-model";
import { serviceIconByHref } from "@/lib/service-icons";

/* Footer-only contact details (per approved footer design).
   The global site phone in src/lib/site.ts is used for schema.org and
   the contact page — intentionally left untouched. */
const footerContact = {
  // Phone number row opens WhatsApp chat (wa.me deep link: opens the
  // WhatsApp app on mobile, WhatsApp Web on desktop). Display text and
  // design unchanged per spec.
  phone: { display: "+91 90038 33370", href: site.whatsapp.href },
  hours: "24/7",
  email: site.email,
  emailNote: "We reply within 24 hours",
  location: "Coimbatore, Tamil Nadu, India",
  locationNote: "Serving businesses across India and globally.",
};

const socialLinks = [
  { label: "X", href: site.social.x, Icon: FaXTwitter },
  { label: "Instagram", href: site.social.instagram, Icon: FaInstagram },
  { label: "GitHub", href: site.social.github, Icon: FaGithub },
  { label: "Facebook", href: site.social.facebook, Icon: FaFacebookF },
  { label: "LinkedIn", href: site.social.linkedin, Icon: FaLinkedinIn },
  { label: "Pinterest", href: site.social.pinterest, Icon: FaPinterestP },
  { label: "Discord", href: site.social.discord, Icon: FaDiscord },
  { label: "Quora", href: site.social.quora, Icon: FaQuora },
  { label: "Reddit", href: site.social.reddit, Icon: FaRedditAlien },
  { label: "Threads", href: site.social.threads, Icon: FaThreads },
  { label: "Medium", href: site.social.medium, Icon: FaMedium },
];

/* Small column heading with the brand-green underline bar. */
function ColumnHeading({ children }: { children: string }) {
  return (
    <>
      <p className="text-[16px] font-semibold tracking-tight text-ink">{children}</p>
      <span
        aria-hidden="true"
        className="mt-2 mb-3.5 block h-1 w-8 rounded-full bg-gradient-to-r from-brand to-[#5a8bff]"
      />
    </>
  );
}

/* Link row used by the Services and Company columns — label left,
   chevron right; on hover the label turns brand green and the chevron
   nudges right. */
function LinkRow({ href, label, icon }: { href: string; label: string; icon?: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center justify-between gap-3 rounded-md py-[3px] text-[14px] leading-snug text-ink2 transition-colors duration-200 ease-editorial hover:text-brand"
      >
        <span className="flex items-center gap-2.5">
          {icon ? (
            <img src={icon} alt="" width={256} height={256} draggable={false} className="h-6 w-6 shrink-0 object-contain" />
          ) : null}
          {label}
        </span>
        <ChevronRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-greyLight transition-transform duration-200 ease-editorial group-hover:translate-x-1 group-hover:text-brand motion-reduce:group-hover:translate-x-0"
        />
      </Link>
    </li>
  );
}

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/growth-engine" },
  { label: "Our Work", href: "/featured-projects" },
  { label: "Contact", href: "/contact" },
];

/* Vertical hairline between desktop columns (matches the approved design). */
const COL_DIVIDER = "xl:border-l xl:border-ink/10 xl:pl-6";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 overflow-hidden bg-[linear-gradient(180deg,#f4efe6_0%,#f2e6d9_100%)]">
      {/* ── Main area: columns over the misty landscape ───────────── */}
      <div className="relative">
        <img
          src="/footer-landscape.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] w-full max-w-none select-none object-cover object-bottom sm:h-[200px] lg:h-[clamp(220px,20vw,300px)]"
        />

        <Container className="relative z-10 pb-20 pt-9 sm:pb-24 xl:pb-20 xl:pt-10">
          <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-6 gap-y-8 md:gap-y-9 xl:grid-cols-[1.15fr_0.65fr_0.7fr_1.4fr_1.4fr] xl:gap-x-6">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block" aria-label={`${site.name} — home`}>
                <Image
                  src="/logo-v2.png"
                  alt={site.name}
                  width={900}
                  height={302}
                  className="h-14 w-auto"
                />
              </Link>
              <p className="mt-5 max-w-[26ch] text-[19px] font-normal leading-snug text-ink">
                Performance marketing for businesses in Coimbatore, Tamil Nadu{" "}
                <span className="text-brand">and beyond.</span>
              </p>
              <p className="body-base mt-3 max-w-[36ch] text-grey">
                We blend strategy, creativity and technology to help brands
                grow faster, build stronger and scale bigger.
              </p>
              <p className="mt-5 flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.4em] text-ink2">
                <span>Grow</span>
                <span className="text-brand" aria-hidden="true">•</span>
                <span>Build</span>
                <span className="text-brand" aria-hidden="true">•</span>
                <span>Scale</span>
              </p>
            </div>

            <nav aria-label="Footer explore" className={COL_DIVIDER}>
              <ColumnHeading>Explore</ColumnHeading>
              <ul className="flex flex-col">
                {exploreLinks.map((link) => (
                  <LinkRow key={link.label} href={link.href} label={link.label} />
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer how we work" className={COL_DIVIDER}>
              <ColumnHeading>What We Do</ColumnHeading>
              <ul className="flex flex-col">
                {executionStages.map((stage) => (
                  <LinkRow key={stage.number} href="/execution-model" label={stage.title} />
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer services" className={`col-span-2 md:col-span-1 ${COL_DIVIDER}`}>
              <ColumnHeading>Our Services</ColumnHeading>
              <ul className="flex flex-col">
                {footerServiceLinks.map((link) => (
                  <LinkRow key={link.href} href={link.href} label={link.label} icon={serviceIconByHref(link.href)} />
                ))}
              </ul>
            </nav>

            <div className={`col-span-2 md:col-span-1 ${COL_DIVIDER}`}>
              <ColumnHeading>Get in Touch</ColumnHeading>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3.5">
                  <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Phone className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <a
                      href={footerContact.phone.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with us on WhatsApp at +91 90038 33370"
                      className="text-[14px] font-medium text-ink transition-colors duration-200 hover:text-brand"
                    >
                      {footerContact.phone.display}
                    </a>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-grey">{footerContact.hours}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Mail className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <a
                      href={`mailto:${footerContact.email}`}
                      className="break-words text-[14px] font-medium text-ink transition-colors duration-200 hover:text-brand"
                    >
                      {footerContact.email}
                    </a>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-grey">{footerContact.emailNote}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <MapPin className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-medium text-ink">{footerContact.location}</p>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-grey">{footerContact.locationNote}</p>
                  </div>
                </li>
              </ul>

              <p className="mt-5 text-[16px] font-semibold tracking-tight text-ink">Follow Us</p>
              <span aria-hidden="true" className="mt-2 mb-3.5 block h-1 w-8 rounded-full bg-gradient-to-r from-brand to-[#5a8bff]" />
              <div className="flex flex-wrap gap-1.5" aria-label="Shri Pro Craft on social media">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Shri Pro Craft on ${label}`}
                    title={label}
                    className="grid h-8 w-8 place-items-center rounded-full border border-ink/25 bg-white/40 text-ink2 transition-all duration-200 ease-editorial hover:-translate-y-1 hover:border-transparent hover:bg-brand hover:text-white motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="h-[14px] w-[14px]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </Container>

        {/* Handwritten sign-off (2xl+) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[4%] top-12 hidden select-none 2xl:block"
        >
          <div className="-rotate-6 pt-6 text-right font-hand leading-[0.95] text-brand">
            <p className="text-[30px] font-semibold">Let&apos;s</p>
            <p className="text-[36px] font-semibold">Grow</p>
            <p className="text-[36px] font-semibold">Together</p>
            <svg className="ml-auto mt-1 h-4 w-20" viewBox="0 0 96 16" fill="none">
              <path d="M2 11 C 26 4 52 3 94 8" stroke="#2865f5" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="relative z-10 bg-white/30 text-ink2 backdrop-blur-md">
        <Container className="flex flex-col items-center gap-2.5 py-3 text-center xl:flex-row xl:justify-between xl:gap-6 xl:text-left">
          <p className="text-[13px]">
            © {year} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center justify-center gap-3 text-[13px]">
            <Link href="/terms-and-conditions" className="transition-colors duration-200 hover:text-ink">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true" className="text-ink/25">|</span>
            <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-ink">
              Privacy Policy
            </Link>
          </nav>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
              Coimbatore · Tamil Nadu · India
            </span>
            <span aria-hidden="true" className="text-ink/25">|</span>
            <span>EN</span>
            <span aria-hidden="true" className="text-ink/25">|</span>
            <span>Built for a Smarter Digital Tomorrow</span>
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-3 text-[13px] transition-colors duration-200 hover:text-ink"
          >
            Back to Top
            <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/40 transition-colors duration-200 group-hover:border-ink">
              <ArrowUp aria-hidden="true" className="h-4 w-4" />
            </span>
          </a>
        </Container>
      </div>
    </footer>
  );
}
