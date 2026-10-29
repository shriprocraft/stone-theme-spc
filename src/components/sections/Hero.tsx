import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroStats } from "@/components/sections/HeroStats";

/** Handwritten annotation below the stat cards. */
function HandwrittenNote() {
  return (
    <div aria-hidden="true" className="relative mt-8 flex justify-end pr-1 sm:mt-10 sm:pr-5">
      <div className="-rotate-3 font-hand text-[1.45rem] leading-[1.12] tracking-tight text-ink2">
        Real Businesses
        <br />
        Real Growth
        <svg
          className="absolute -bottom-2.5 right-2 w-[88px]"
          viewBox="0 0 88 12"
          fill="none"
        >
          <path
            d="M2 8 C 22 3, 50 3, 86 6"
            stroke="#2865f5"
            strokeOpacity="0.55"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Trusted-by wordmarks — modern sans-serif, muted grey, consistent    */
/* ------------------------------------------------------------------ */

function Wordmark({
  name,
  subtitle,
  nameClass = "tracking-[0.04em]",
  srName,
}: {
  name: string;
  subtitle?: string;
  nameClass?: string;
  srName: string;
}) {
  return (
    <div className="select-none whitespace-nowrap text-center">
      <p className={`text-[0.875rem] font-semibold leading-none text-ink2 ${nameClass}`}>{name}</p>
      {subtitle ? (
        <p className="mt-1.5 text-[0.5625rem] font-medium leading-none tracking-[0.2em] text-greyLight">
          {subtitle}
        </p>
      ) : (
        // Invisible placeholder keeps single-line marks (Hem Krish) on the
        // same name baseline as the two-line wordmarks.
        <span className="mt-1.5 block text-[0.5625rem] leading-none text-transparent" aria-hidden="true">
          ·
        </span>
      )}
      <span className="sr-only">{srName}</span>
    </div>
  );
}

/** Trusted-by strip pinned to the bottom of the hero. */
function TrustedBy() {
  return (
    <div className="relative mt-12 border-t border-hairline pt-7 sm:mt-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
          <div className="mr-1 shrink-0">
            <p className="text-[0.8125rem] leading-tight text-grey">Trusted by</p>
            <p className="text-[0.9375rem] font-semibold leading-tight text-ink">
              100+ businesses
            </p>
          </div>

          <span className="hidden h-9 w-px bg-hairline sm:block" aria-hidden="true" />

          <Wordmark
            name="SRI LAKSHMI"
            subtitle="NARASHIMMA TEX"
            nameClass="tracking-[0.06em]"
            srName="Sri Lakshmi Narashimma Tex"
          />
          <Wordmark name="MERCURY" subtitle="HYDROTECH" srName="Mercury Hydrotech" />
          <Wordmark
            name="EC"
            subtitle="KITCHEN APPLIANCES"
            nameClass="tracking-[0.08em]"
            srName="EC Kitchen Appliances"
          />
          <Wordmark name="ARTHY" subtitle="HOSPITAL" srName="Arthy Hospital" />
          <Wordmark name="POHIEER" subtitle="KULFI" nameClass="tracking-[0.06em]" srName="Pohieer Kulfi" />
          <Wordmark name="THRYVE" subtitle="EXPORTS" nameClass="tracking-[0.3em]" srName="Thryve Exports" />
          <Wordmark name="HEM KRISH" nameClass="tracking-[0.05em]" srName="Hem Krish" />
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="mr-4 hidden h-9 w-px bg-hairline sm:block" aria-hidden="true" />
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-[#f0a32c] text-[#f0a32c]" />
            ))}
          </div>
          <div>
            <p className="text-[0.9375rem] font-semibold leading-tight text-ink">Rated 4.9/5</p>
            <p className="text-[0.8125rem] leading-tight text-grey">by our clients</p>
          </div>
          <span className="sr-only">Rated 4.9 out of 5 by our clients</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero service cards (bottom of hero)                                 */
/* ------------------------------------------------------------------ */

const heroCards = [
  {
    title: "Performance Marketing",
    body: "Google Ads, Meta Ads and lead generation for real business growth.",
    href: "/growth-engine/performance-marketing",
    img: "/services/performance-marketing.webp",
    imgSize: [256, 256],
  },
  {
    title: "Web Development",
    body: "High-performing websites and custom web applications.",
    href: "/growth-engine/website-design-development",
    img: "/services/website-design-development.webp",
    imgSize: [256, 256],
  },
  {
    title: "AI Automation",
    body: "Automate processes and integrate AI into your business.",
    href: "/growth-engine/ai-automation",
    img: "/services/ai-automation.webp",
    imgSize: [256, 256],
  },
] as const;

/** 3D visual for a hero card (decorative; the card title carries the meaning). */
function CardVisual({ src, size }: { src: string; size: readonly [number, number] }) {
  return (
    <span aria-hidden="true" className="grid h-[96px] w-[96px] shrink-0 place-items-center">
      <img
        src={src}
        alt=""
        width={size[0]}
        height={size[1]}
        loading="eager"
        decoding="async"
        draggable={false}
        className="h-full w-full object-contain drop-shadow-[0_14px_16px_rgba(25,24,23,0.22)]"
      />
    </span>
  );
}

function HeroCards() {
  return (
    <ul className="relative z-10 mx-auto grid w-full max-w-[1220px] gap-3 xl:grid-cols-3">
      {heroCards.map((c) => (
        <li key={c.title}>
          <Link
            href={c.href}
            className="group flex h-full items-center gap-4 rounded-[26px] border border-white/50 bg-[#f4efe6]/55 p-4 shadow-[0_24px_50px_-30px_rgba(25,24,23,0.45)] backdrop-blur-xl transition-all duration-300 ease-editorial hover:-translate-y-1 hover:bg-[#f4efe6]/80 sm:p-6"
          >
            <CardVisual src={c.img} size={c.imgSize} />
            <span className="min-w-0 flex-1">
              <span className="block text-[1.0625rem] font-medium leading-snug text-ink">{c.title}</span>
              <span className="mt-1.5 block text-[0.8125rem] leading-snug text-grey">{c.body}</span>
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairlineStrong text-ink transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Tiny tracked side captions from the reference (decorative). */
function SideCaption({ lines, className }: { lines: string[]; className: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute z-[1] hidden xl:block ${className}`}>
      <span className="mb-3 block h-px w-9 bg-hairlineStrong" />
      {lines.map((l) => (
        <span key={l} className="block text-[0.625rem] uppercase leading-[1.95] tracking-[0.34em] text-ink2 [text-shadow:0_0_8px_rgba(244,239,230,0.95),0_0_2px_rgba(244,239,230,0.95)]">
          {l}
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  // Optional hero artwork: drop public/hero-art.(webp|jpg|png) and it is
  // picked up automatically at build time. Without it the hero falls back
  // to the warm misty gradient only.
  const artFile = ["hero-art.webp", "hero-art.jpg", "hero-art.png"].find((f) =>
    existsSync(join(process.cwd(), "public", f)),
  );

  return (
    <>
      <section className="relative isolate overflow-hidden lg:flex lg:min-h-[max(868px,min(100svh,calc(56vw+88px)))] lg:flex-col bg-[radial-gradient(120%_90%_at_72%_30%,#e4d8c4_0%,#d9cbb4_38%,#cdbfa8_70%,#c6b8a1_100%)]">
        {/* misty light wash */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(244,239,230,0.55)_0%,rgba(244,239,230,0)_32%,rgba(244,239,230,0)_66%,rgba(244,239,230,0.55)_100%)]"
        />
        {artFile ? (
          <img
            src={`/${artFile}`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 -z-20 h-full w-full max-w-none object-cover object-[62%_center] max-lg:opacity-55 lg:w-[76%] lg:[mask-image:linear-gradient(90deg,transparent_0%,#000_24%)]"
          />
        ) : null}
        {/* legibility wash behind the copy */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(244,239,230,0.35)_0%,rgba(244,239,230,0.1)_40%,rgba(244,239,230,0)_55%)] max-lg:bg-[linear-gradient(180deg,rgba(244,239,230,0.8)_0%,rgba(244,239,230,0.55)_55%,rgba(244,239,230,0.3)_100%)]"
        />

        <Container className="relative !max-w-[1380px] lg:flex lg:flex-1 lg:flex-col lg:justify-between pb-10 pt-[9rem] sm:pt-[152px] lg:pb-12 lg:pt-[172px]">
          <div className="relative max-w-[760px]">
            <span aria-hidden="true" className="mb-6 block h-px w-12 bg-[#8a7a62]" />
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.32em] text-ink2">Get Started</p>
            <p className="mb-7 mt-2 text-[0.75rem] uppercase tracking-[0.32em] text-[#8a7a62]">
              Your next stage of growth
            </p>

            <h1 className="display-1 !font-normal !leading-[0.98] !tracking-[-0.045em] [font-size:clamp(2.5rem,0.9rem+3.4vw,4.4rem)]">
              The future of your
              <br />
              business <span className="whitespace-nowrap text-[#8a7a62]">starts here.</span>
            </h1>

            <p className="mt-6 max-w-[26em] text-[clamp(1.0625rem,1rem+0.3vw,1.3125rem)] font-medium leading-[1.45] text-ink">
              Looking for a digital marketing and AI automation agency in Coimbatore?
            </p>
            <p className="mt-3 max-w-[27em] text-[clamp(1rem,0.95rem+0.25vw,1.1875rem)] leading-[1.55] text-grey">
              Let&apos;s transform your marketing, simplify your workflows, and build smarter systems that
              drive real business results.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/growth-engine"
                className="inline-flex h-[54px] items-center gap-6 rounded-full bg-[#fbf8f2] px-8 text-[0.9375rem] font-medium text-ink shadow-[0_14px_30px_-16px_rgba(25,24,23,0.45)] transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-white"
              >
                Explore our services
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link
                href="/featured-projects"
                className="group inline-flex items-center gap-3.5 text-[0.9375rem] text-ink"
              >
                <span className="grid h-[50px] w-[50px] place-items-center rounded-full border border-hairlineStrong bg-[#f4efe6]/40 transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                  <Play size={14} className="fill-current" aria-hidden="true" />
                </span>
                View our work
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-10">
            <HeroCards />
          </div>
        </Container>
      </section>
    </>
  );
}
