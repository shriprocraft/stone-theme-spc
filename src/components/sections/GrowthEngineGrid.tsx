import Image from "next/image";
import Link from "next/link";
import {
  AppWindow,
  Bot,
  Filter,
  Megaphone,
  MonitorSmartphone,
  PenTool,
  Search,
  Share2,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { growthEngineLinks } from "@/lib/site";

/**
 * Bento layout for the Growth Engine tiles. Copy (label / href /
 * description) stays in site.ts — this config only adds each tile's icon
 * and grid footprint. Desktop is a 4-column grid:
 *
 *   row 1: SEO (1) | Performance Marketing (2, elevated hero) | Meta Ads (1)
 *   row 2: Google Ads | Social Media Marketing | Lead Generation | AI Automation
 *   row 3: Website Design & Development (2, wide) | Branding & Creative | Custom Web Apps
 *
 * `grid-flow-dense` lets the 2-column tablet layout backfill the gaps
 * left by the spanning hero/wide tiles.
 */
const bentoTiles: Array<{
  href: string;
  icon: LucideIcon;
  stone?: string; // cracked-stone 3D icon; falls back to the Lucide icon
  hero?: boolean;
  wide?: boolean;
}> = [
  { href: "/growth-engine/seo", stone: "/services/seo.webp", icon: Search },
  { href: "/growth-engine/performance-marketing", stone: "/services/performance-marketing.webp", icon: TrendingUp, hero: true },
  { href: "/growth-engine/meta-ads", stone: "/services/meta-ads.webp", icon: Share2 },
  { href: "/growth-engine/google-ads", stone: "/services/google-ads.webp", icon: Target },
  { href: "/growth-engine/social-media-marketing", stone: "/services/social-media-marketing.webp", icon: Megaphone },
  { href: "/growth-engine/lead-generation", stone: "/services/lead-generation.webp", icon: Filter },
  { href: "/growth-engine/ai-automation", stone: "/services/ai-automation.webp", icon: Bot },
  {
    href: "/growth-engine/website-design-development",
    icon: MonitorSmartphone,
    stone: "/services/website-design-development.webp",
    wide: true,
  },
  { href: "/growth-engine/branding-creative", stone: "/services/branding-creative.webp", icon: PenTool },
  { href: "/growth-engine/custom-web-apps-software", stone: "/services/custom-web-apps-software.webp", icon: AppWindow },
];

const serviceByHref = new Map(growthEngineLinks.map((s) => [s.href, s]));

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GrowthEngineGrid() {
  return (
    <div className="grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {bentoTiles.map(({ href, icon: Icon, stone, hero, wide }) => {
        const service = serviceByHref.get(href);
        if (!service) return null;

        if (hero) {
          return (
            <Link
              key={service.href}
              href={service.href}
              className="tile group relative z-10 flex flex-col items-center justify-center p-7 text-center transition-all duration-300 ease-editorial hover:-translate-y-[3px] hover:shadow-[0_34px_64px_-28px_rgba(25,24,23,0.5)] sm:col-span-2 sm:p-8 lg:-my-4"
            >
              {stone ? (
                <Image src={stone} alt="" width={256} height={256} className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105" />
              ) : (
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
              )}
              <span className="mt-5 font-display text-lg font-medium text-ink">
                {service.label}
              </span>
              <span className="caption mt-2 max-w-[30ch] text-grey">
                {service.description}
              </span>
              <span aria-hidden="true" className="tile-arrow mt-6">
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        }

        return (
          <Link
            key={service.href}
            href={service.href}
            className={`tile group flex flex-col p-6 transition-all duration-300 ease-editorial hover:-translate-y-[3px] hover:shadow-[0_30px_58px_-28px_rgba(25,24,23,0.5)]${
              wide ? " sm:col-span-2" : ""
            }`}
          >
            {stone ? (
              <Image src={stone} alt="" width={256} height={256} className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105" />
            ) : (
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fbf8f2] text-brand-deep shadow-[0_1px_2px_rgba(17,17,17,0.06)] transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
            )}
            <span className="body-base mt-5 font-medium text-ink">
              {service.label}
            </span>
            <span className="mt-auto flex items-end justify-between gap-3 pt-6">
              <span className="caption max-w-[26ch] text-grey">
                {service.description}
              </span>
              <span aria-hidden="true" className="tile-arrow">
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
