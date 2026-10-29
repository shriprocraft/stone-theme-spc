import GlowCursor from "@/components/ui/GlowCursor";

/** Sitewide cursor light: one fixed, full-viewport layer above the page.
 *  Decorative and click-through (pointer-events: none), so it never blocks
 *  links, buttons or form fields. */
export function SiteGlowCursor() {
  return (
    <GlowCursor
      className="pointer-events-none !fixed inset-0 !h-screen z-[70]"
      color="#22d3ff"
      secondaryColor="#1e40ff"
      intensity={2}
      trailWidth={1.5}
      linger={1.3}
      glow={3}
      hotspot={0.8}
      theme="dark"
      blendMode="normal"
    />
  );
}
