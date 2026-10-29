/* Original stone-textured service icons (public/services). Single source of
   truth for which icon belongs to which service, keyed by service page slug
   and by display name, so every component resolves the same artwork. */

const SLUG_ICONS: Record<string, string> = {
  "performance-marketing": "/services/performance-marketing.webp",
  "google-ads": "/services/google-ads.webp",
  "meta-ads": "/services/meta-ads.webp",
  seo: "/services/seo.webp",
  "social-media-marketing": "/services/social-media-marketing.webp",
  "lead-generation": "/services/lead-generation.webp",
  "website-design-development": "/services/website-design-development.webp",
  "branding-creative": "/services/branding-creative.webp",
  "ai-automation": "/services/ai-automation.webp",
  "custom-web-apps-software": "/services/custom-web-apps-software.webp",
};

const NAME_SLUGS: Record<string, string> = {
  "performance marketing": "performance-marketing",
  "google ads": "google-ads",
  "meta ads": "meta-ads",
  seo: "seo",
  "social media marketing": "social-media-marketing",
  "lead generation": "lead-generation",
  "website design & development": "website-design-development",
  "web development": "website-design-development",
  "branding & creative": "branding-creative",
  "ai automation & ai agents": "ai-automation",
  "ai automation": "ai-automation",
  "custom web apps & software": "custom-web-apps-software",
};

/** Icon for a service page slug ("seo") — undefined when there is none. */
export function serviceIconBySlug(slug: string): string | undefined {
  return SLUG_ICONS[slug];
}

/** Icon for a service URL such as "/growth-engine/seo" or ".../seo/". */
export function serviceIconByHref(href: string): string | undefined {
  const match = href.match(/^\/growth-engine\/([^/?#]+)\/?$/);
  return match ? SLUG_ICONS[match[1]] : undefined;
}

/** Icon for a service display name ("Google Ads"), case-insensitive. */
export function serviceIconByName(name: string): string | undefined {
  const slug = NAME_SLUGS[name.trim().toLowerCase()];
  return slug ? SLUG_ICONS[slug] : undefined;
}

/* Sub-service stone icons (public/services/sub), keyed by the coverage tile
   title shown on the service pages. */
const SUB_ICONS: Record<string, string> = {
  retargeting: "retargeting",
  "tracking & measurement": "tracking",
  "search campaigns": "search-campaigns",
  "performance max": "performance-max",
  "shopping & display": "shopping-display",
  "youtube advertising": "youtube-advertising",
  remarketing: "remarketing",
  "conversion tracking": "conversion-tracking",
  "audience targeting": "audience-targeting",
  "creative testing": "creative-testing",
  "advantage+ campaigns": "advantage-campaigns",
  "lead generation campaigns": "lead-generation-campaigns",
  "e-commerce campaigns": "ecommerce-campaigns",
  "technical seo": "technical-seo",
  "on-page seo": "on-page-seo",
  "keyword research": "keyword-research",
  "content strategy": "content-strategy",
  "local seo": "local-seo",
  "link building & digital pr": "link-building",
  "social strategy": "social-strategy",
  "content planning": "content-planning",
  "organic social": "organic-social",
  "creative direction": "creative-direction",
  "performance measurement": "performance-measurement",
  "b2b lead generation": "b2b-lead-generation",
  "lead funnels": "lead-funnels",
  "crm workflows": "crm-workflows",
  "cold outreach": "cold-outreach",
  "webinar & event funnels": "webinar-event-funnels",
  "website design": "website-design",
  "website development": "website-development",
  "business websites": "business-websites",
  "conversion-focused websites": "conversion-focused-websites",
  "landing pages": "landing-pages",
  "e-commerce websites": "ecommerce-websites",
  "brand strategy": "brand-strategy",
  "brand identity": "brand-identity",
  "visual identity": "visual-identity",
  "campaign creative": "campaign-creative",
  "marketing creatives": "marketing-creatives",
  "ai automation services": "ai-automation-services",
  "ai agent development": "ai-agent-development",
  "ai chatbot development": "ai-chatbot-development",
  "ai workflow automation": "ai-workflow-automation",
  "business process automation": "business-process-automation",
  "custom web application development": "custom-web-application-development",
  "saas application development": "saas-application-development",
  "business software development": "business-software-development",
  "enterprise (ent) solutions": "enterprise-solutions",
  "crm & internal tool development": "crm-internal-tools",
  "api integration & development": "api-integration-development",
};

/** Icon for a coverage tile title ("Retargeting") — undefined when none. */
export function subServiceIconByTitle(title: string): string | undefined {
  const file = SUB_ICONS[title.trim().toLowerCase()];
  return file ? `/services/sub/${file}.webp` : undefined;
}
