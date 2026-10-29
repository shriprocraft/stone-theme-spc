"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

// Same editorial ease-out the desktop mega menu uses — pure deceleration,
// no bounce, so the mobile menu feels like the same design system.
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Full-screen mobile / tablet navigation overlay.
//
// Spec (Task 58): pure white, fully opaque, covers the ENTIRE viewport and
// sits above all website content (z-[60] > FloatingContact z-[55] > header
// z-50). Rendered as a sibling of <header> in Header.tsx so the header's
// backdrop-blur containing block cannot trap the fixed positioning. Shows
// exactly the six primary navigation items, left-aligned, evenly distributed.
//
// Toggle interaction (Task 61): the panel is driven entirely by the header's
// `isMenuOpen` state — opens/closes with a 350ms opacity + translateY(-8px)
// ease-out transition, and the top-right control is the SAME 44px round
// button as the header trigger (same position/insets — see the top bar
// padding note below) so its icon can morph ⋮ → × seamlessly once the panel
// is in place. Clicking it closes the menu.

// The in-overlay toggle icon: starts as ⋮ (the exact icon the visitor just
// clicked — this button sits pixel-identical on top of the header trigger)
// and morphs into × once the panel has settled. The component is mounted
// only while the menu is open, so its state starts fresh (⋮) on every open
// with no reset logic; the single timer drives a state-driven (not CSS-only)
// morph and is cleaned up if the menu closes before it fires.
function MorphingToggleIcon() {
  const [morphed, setMorphed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMorphed(true), 220);
    return () => clearTimeout(t);
  }, []);

  return (
    <span className="relative block h-[18px] w-[14px]" aria-hidden="true">
      <AnimatePresence initial={false}>
        {morphed ? (
          <motion.span
            key="close"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.55, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.55, rotate: 90 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="#191817"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </motion.span>
        ) : (
          <motion.span
            key="dots"
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0, scale: 0.55, rotate: 90 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <svg width="4" height="18" viewBox="0 0 4 18" fill="none">
              <circle cx="2" cy="2" r="1.9" fill="#191817" />
              <circle cx="2" cy="9" r="1.9" fill="#191817" />
              <circle cx="2" cy="16" r="1.9" fill="#191817" />
            </svg>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Safety net: the menu must never remain visually open after navigation
  // (covers back/forward navigation where no click handler runs). Deliberately
  // keyed on the route only — `open` is read, not a dependency.
  useEffect(() => {
    if (open) onClose();
  }, [pathname]);

  // Move focus into the dialog when it opens (keyboard/AT users land in the
  // menu instead of staying on a now-covered trigger).
  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-[#fbf8f2] xl:hidden"
        >
          {/* Top bar — the × sits top-right at the EXACT position of the
              header ⋮ trigger: same 76px row, same 44px round button, and
              the same insets as .container-content (px-6 sm:px-8 lg:px-10)
              so the morph reads as one continuous button, not a swap. */}
          <div className="flex h-[76px] shrink-0 items-center justify-end px-6 sm:px-8 lg:px-10">
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-hairlineStrong transition duration-200 hover:bg-surfaceStrong active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25"
            >
              <MorphingToggleIcon />
            </button>
          </div>

          {/* Primary items — exactly the six top-level destinations,
              evenly spaced over the remaining height. Each item closes the
              menu on click (navigation proceeds while the panel exits). */}
          <nav
            className="flex flex-1 flex-col justify-evenly px-6 sm:px-8"
            aria-label="Mobile"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="heading-2 w-fit transition-colors duration-200 hover:text-ink2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA — preserved from the previous mobile menu. */}
          <div className="shrink-0 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 sm:px-8">
            <Link href="/contact" onClick={onClose} className="btn-primary w-full">
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
