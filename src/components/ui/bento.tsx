import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Shared bento primitives — the sitewide tile system introduced with the
 * Growth Engine grid: grey surfaceStrong tiles, white icon chips with
 * brand-deep glyphs, elevated white hero cards, and `grid-flow-dense`
 * backfill so spanning tiles never leave holes.
 *
 * Content/copy never lives here — callers pass strings sourced from
 * site.ts / lib/content plus an optional per-tile icon/chip/footprint
 * config. Server-safe: hover states are pure CSS (group-hover), no
 * client JS.
 */

export function ArrowIcon({ className = "" }: { className?: string }) {
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

const GRID_COLS: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export function BentoGrid({
  cols = 4,
  className,
  children,
}: {
  cols?: 2 | 3 | 4;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5",
        GRID_COLS[cols],
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface BentoTileProps {
  title: ReactNode;
  /** Body copy — inline under the title, or in the footer row on link tiles. */
  body?: ReactNode;
  /** Small label rendered above the title (e.g. industry on project cards). */
  eyebrow?: ReactNode;
  /** Optional cover image rendered above the tile content (project cards).
   * Rendered at the source aspect ratio with object-cover, so nothing is
   * cropped when the source is 16:9. */
  image?: { src: string; alt: string };
  icon?: LucideIcon;
  /** Text/number chip content when no icon fits (e.g. "01" step markers). */
  chip?: string;
  /** Pre-rendered 3D icon image shown in place of the chip (step markers). */
  iconImage?: string;
  /** With iconImage + chip: show both — icon prominent, chip as a badge beside it. */
  keepChip?: boolean;
  href?: string;
  /** Span two columns from sm up (bento rhythm). */
  wide?: boolean;
  /** Elevated white hero card. */
  hero?: boolean;
  /** Hero variant: centered stack with a circular arrow chip when linked. */
  centered?: boolean;
  /** Footer text next to the arrow on link tiles (e.g. "View service"). */
  footer?: ReactNode;
  /** Force the body inline under the title even on link tiles (mixed grids). */
  bodyInline?: boolean;
  /** Classes for the inline body wrapper. */
  bodyClassName?: string;
  /** Heading level for the tile title (a11y); span by default. */
  titleAs?: "span" | "h3";
  className?: string;
}

export function BentoTile({
  title,
  body,
  eyebrow,
  image,
  icon: Icon,
  chip,
  iconImage,
  keepChip,
  href,
  wide,
  hero,
  centered,
  footer,
  bodyInline,
  bodyClassName = "caption text-grey",
  titleAs: TitleTag = "span",
  className,
}: BentoTileProps) {
  const bodyInFooter = Boolean(href) && !bodyInline && !footer;
  const bodyIsInline = Boolean(body) && !bodyInFooter;
  const showFooterText = Boolean(href) && (Boolean(footer) || (bodyInFooter && Boolean(body)));

  const chipEl = iconImage && keepChip && chip ? (
    <div className="flex items-start justify-between gap-3">
      <img
        src={iconImage}
        alt=""
        width={256}
        height={256}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-24 w-24 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fbf8f2] text-brand-deep shadow-[0_1px_2px_rgba(17,17,17,0.06)] transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <span className="font-display text-sm font-semibold">{chip}</span>
      </span>
    </div>
  ) : iconImage ? (
    <img
      src={iconImage}
      alt=""
      width={256}
      height={256}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="h-24 w-24 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
    />
  ) : Icon || chip ? (
      hero ? (
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          {Icon ? (
            <Icon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <span className="font-display text-base font-semibold">{chip}</span>
          )}
        </span>
      ) : (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fbf8f2] text-brand-deep shadow-[0_1px_2px_rgba(17,17,17,0.06)] transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          {Icon ? (
            <Icon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <span className="font-display text-sm font-semibold">{chip}</span>
          )}
        </span>
      )
    ) : null;

  const titleEl = (
    <TitleTag
      className={cn(
        hero ? "font-display text-lg font-medium text-ink" : "body-base font-medium text-ink",
        "mt-5",
      )}
    >
      {title}
    </TitleTag>
  );

  const bodyEl = bodyIsInline ? (
    <span className={cn("mt-2 block", bodyClassName)}>{body}</span>
  ) : null;

  /* Centered heroes close with a circular arrow chip (Growth Engine style);
     every other link tile closes with the footer row. */
  const footerEl = href ? (
    hero && centered ? (
      <span aria-hidden="true" className="tile-arrow mt-6">
        <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    ) : (
      <span className="mt-auto flex items-end justify-between gap-3 pt-6">
        <span className="caption max-w-[26ch] text-grey">
          {footer ?? (bodyInFooter ? body : null)}
        </span>
        <span aria-hidden="true" className="tile-arrow">
          <ArrowIcon
            className={cn(
              "transition-transform duration-300",
              showFooterText && "group-hover:translate-x-0.5",
            )}
          />
        </span>
      </span>
    )
  ) : null;

  const tileClassName = cn(
    "tile group flex flex-col transition-all duration-300 ease-editorial hover:-translate-y-[3px] hover:shadow-[0_30px_58px_-28px_rgba(25,24,23,0.5)]",
    hero ? "p-7 sm:p-8" : "p-6",
    wide && "sm:col-span-2",
    centered && "items-center justify-center text-center",
    className,
  );

  const inner = (
    <>
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl object-cover ring-1 ring-hairlineStrong"
        />
      ) : null}
      {eyebrow ? <span className="label text-grey">{eyebrow}</span> : null}
      {chipEl}
      {titleEl}
      {bodyEl}
      {footerEl}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={tileClassName}>
        {inner}
      </Link>
    );
  }

  return <div className={tileClassName}>{inner}</div>;
}
