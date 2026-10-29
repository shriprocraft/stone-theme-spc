import { site } from "@/lib/site";

// Fixed floating action group — WhatsApp above phone, per spec order.
// Rendered once in the root layout so it stays visible on every page and
// while scrolling. Positioned below the full-screen mobile nav overlay
// (z-[60]) so opening that menu correctly covers it, but above the sticky
// header (z-50) and ordinary page content. Desktop: right 20px, bottom
// 24px, 12px gap between the two buttons. Buttons are the cracked-stone
// 3D discs (public/contact-*.webp), which carry their own shape and glow.
const buttonClass =
  "block h-[58px] w-[58px] transition-all duration-300 ease-editorial drop-shadow-[0_8px_12px_rgba(10,10,10,0.3)] hover:scale-110 hover:drop-shadow-[0_10px_18px_rgba(59,130,246,0.55)] active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:h-[64px] sm:w-[64px]";

export function FloatingContact() {
  return (
    <div
      className="fixed bottom-4 right-4 z-[55] flex flex-col gap-2 sm:bottom-6 sm:right-5"
      aria-label="Contact shortcuts"
    >
      <a
        href={site.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={buttonClass}
      >
        <img
          src="/contact-whatsapp.webp"
          alt=""
          width={192}
          height={192}
          draggable={false}
          className="h-full w-full object-contain"
        />
      </a>
      <a href={site.phone.href} aria-label={`Call ${site.phone.display}`} className={buttonClass}>
        <img
          src="/contact-phone.webp"
          alt=""
          width={192}
          height={192}
          draggable={false}
          className="h-full w-full object-contain"
        />
      </a>
    </div>
  );
}
