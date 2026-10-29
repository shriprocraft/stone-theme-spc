"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { growthEngineLinks, site, type NavItem } from "@/lib/site";
import { serviceIconByHref } from "@/lib/service-icons";
import { MobileNav } from "@/components/layout/MobileNav";

/* Desktop navigation per the approved design. Labels follow the design;
   every item still points at an existing page. The mobile menu keeps the
   full primaryNav (MobileNav), so no page becomes unreachable. */
const desktopNav: NavItem[] = [
  { label: "Growth Engine", href: "/growth-engine", children: growthEngineLinks },
  { label: "Execution Model", href: "/execution-model" },
  { label: "Featured Projects", href: "/featured-projects" },
  { label: "Verticals", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export function Header() {
  const pathname = usePathname() ?? "/";
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function openMega() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  }

  // MobileNav is intentionally rendered as a SIBLING of <header>, not a
  // child: the header's `backdrop-blur-md` creates a CSS containing block
  // for fixed-position descendants, which would trap the overlay's
  // `fixed inset-0` inside the 76px header bar (menu items then spill over
  // the hero with no background). As a sibling of <header> (both direct
  // children of <body>), `fixed inset-0` correctly covers the viewport.
  return (
    <>
    {/* Floating liquid-glass pill. On the homepage the header overlays the
        hero (-mb cancels its 88px flow height; Hero adds the same 88px back
        as top padding so hero content does not move). */}
    <header className={`sticky top-0 z-50 h-[88px] ${pathname === "/" ? "-mb-[88px]" : ""}`}>
      <div className="mx-auto h-full w-[calc(100%-1.5rem)] max-w-[1500px] pt-3 sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)]">
        <div className="relative flex h-[64px] items-center justify-between rounded-full border border-white/70 bg-[linear-gradient(135deg,rgba(255,252,246,0.62)_0%,rgba(244,232,210,0.42)_55%,rgba(238,222,192,0.5)_100%)] pl-5 pr-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.35),0_0_30px_rgba(244,222,176,0.5),0_14px_34px_-14px_rgba(70,48,15,0.35)] backdrop-blur-2xl backdrop-saturate-150 sm:pl-7 sm:pr-3 xl:pr-2.5">
          {/* glass sheen */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          >
            <span className="absolute inset-x-6 top-0 h-1/2 rounded-b-[100%] bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))]" />
          </span>
          <Link
            href="/"
            className="relative shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
          >
            <Image
              src="/logo-v2.png"
              alt={site.name}
              width={900}
              height={302}
              priority
              className="h-[46px] w-auto"
            />
          </Link>

          {/* Desktop navigation — full nav lives at xl (≥1280px) where logo
              + 6 items + CTA fit with comfortable, consistent gap-9 spacing;
              below xl (mobile/tablet) the ⋮ button opens the full-screen
              white menu instead (see MobileNav). */}
          <nav className="relative hidden items-center gap-1 xl:flex 2xl:gap-2" aria-label="Primary">
            {desktopNav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-200 hover:bg-white/50 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 ${isActive(item.href) ? "bg-white/40 text-ink" : "text-ink2"}`}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    onClick={() => setMegaOpen((v) => !v)}
                  >
                    {item.label}
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
                      <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-[calc(100%+18px)] w-[560px] -translate-x-1/2 rounded-2xl border border-hairline bg-paper p-3 shadow-[0_24px_60px_-24px_rgba(10,10,10,0.18)]"
                        onMouseEnter={openMega}
                        onMouseLeave={scheduleClose}
                      >
                        <ul className="grid grid-cols-2 gap-1">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surfaceStrong"
                                onClick={() => setMegaOpen(false)}
                              >
                                {serviceIconByHref(child.href) ? (
                                  <img
                                    src={serviceIconByHref(child.href)}
                                    alt=""
                                    width={256}
                                    height={256}
                                    draggable={false}
                                    className="h-11 w-11 shrink-0 object-contain"
                                  />
                                ) : null}
                                <span className="min-w-0">
                                  <span className="block text-[0.9375rem] font-medium text-ink">
                                    {child.label}
                                  </span>
                                  <span className="mt-0.5 block text-[0.8125rem] text-grey">
                                    {child.description}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-200 hover:bg-white/50 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 ${isActive(item.href) ? "bg-white/40 text-ink" : "text-ink2"}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="relative flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary group hidden h-[48px] gap-5 px-7 hover:bg-[#33302b] hover:shadow-[0_12px_26px_-10px_rgba(190,150,70,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1e6d1] xl:inline-flex"
            >
              Let&apos;s Talk
              <ArrowRight
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            {/* Three-dot (⋮) menu toggle — mobile / tablet (< xl).
                State-driven: toggles isMenuOpen (initially false); the
                full-screen overlay in MobileNav renders from this same
                state, and its top-right control morphs ⋮ → × once open. */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-haspopup="dialog"
              aria-controls="mobile-menu"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/70 bg-white/40 transition duration-200 hover:bg-white/70 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 xl:hidden"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path d="M1 1H17M1 6H17M1 11H17" stroke="#191817" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
