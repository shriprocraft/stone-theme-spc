import type { Metadata } from "next";
// Self-hosted variable fonts (no third-party Google Fonts request at
// runtime — better for privacy, reliability and Core Web Vitals).
// Playfair Display drives the whole UI; Caveat powers the handwritten accents.
import "@fontsource-variable/playfair-display/wght.css";
import "@fontsource-variable/caveat/wght.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { SiteGlowCursor } from "@/components/layout/SiteGlowCursor";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, professionalServiceSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Performance Marketing Agency in Coimbatore`,
    template: `%s`,
  },
  description: site.description,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — first element in <head>, rendered for every page by this root layout */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8XQ8BJJ');`,
          }}
        />
        {/* Google tag (gtag.js) — one tag, rendered for every page by this root layout */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FCEJF2L0QQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-FCEJF2L0QQ');`,
          }}
        />
        {/* Microsoft Clarity — one tag, rendered for every page by this root layout */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "z4r1d8ywvn");`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Google Tag Manager (noscript) — immediately after the opening <body> tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8XQ8BJJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={professionalServiceSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <SiteGlowCursor />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
