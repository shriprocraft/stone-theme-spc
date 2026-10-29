export const site = {
  name: "Shri Pro Craft",
  url: "https://shriprocraft.com",
  tagline: "Performance marketing agency in Coimbatore",
  description:
    "Shri Pro Craft is a performance marketing agency in Coimbatore running paid acquisition, SEO and conversion systems for businesses that need measurable customer growth.",
  locality: "Coimbatore",
  region: "Tamil Nadu",
  country: "IN",
  // Official full business address (owner-provided, used verbatim across
  // the contact page, map popup, directions deep links and schema.org data).
  streetAddress:
    "B, 28-1, Amla Garden, 208/1, Ambigai Nagar Road, Anjugam Nagar, Via Chinnavedampatti",
  postalCode: "641049",
  // Replace with the real, verified business details before launch.
  // General enquiries (footer, schema.org contact). Business growth /
  // sales / partnership enquiries use growthEmail instead — see the
  // contact page, which is framed specifically around that intent.
  email: "info@shriprocraft.com",
  growthEmail: "growth@shriprocraft.com",
  phone: {
    display: "+91 90038 33370",
    href: "tel:+919003833370",
    // E.164-hyphenated form used in schema.org structured data.
    schema: "+91-9003833370",
  },
  whatsapp: {
    // Canonical WhatsApp deep link — same number as the business phone.
    href: "https://wa.me/919003833370",
  },
  social: {
    x: "https://x.com/ShriProCraft",
    instagram: "https://www.instagram.com/shriprocraft/",
    github: "https://github.com/shriprocraft",
    facebook: "https://www.facebook.com/Shriprocraft/",
    linkedin: "https://www.linkedin.com/company/shri-pro-craft/",
    pinterest: "https://in.pinterest.com/Shriprocraft/",
    discord: "https://discord.com/invite/uEmhttnDn",
    quora: "https://www.quora.com/profile/Shri-Pro-Craft",
    reddit: "https://www.reddit.com/user/shri_procraft/",
    threads: "https://www.threads.com/@shriprocraft",
    medium: "https://shriprocraft.medium.com/",
  },
};

export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const growthEngineLinks: NavChild[] = [
  {
    label: "Performance Marketing",
    href: "/growth-engine/performance-marketing",
    description: "Paid acquisition run as one connected system.",
  },
  {
    label: "Google Ads",
    href: "/growth-engine/google-ads",
    description: "Search, Performance Max, YouTube and remarketing.",
  },
  {
    label: "Meta Ads",
    href: "/growth-engine/meta-ads",
    description: "Facebook and Instagram campaigns built to convert.",
  },
  {
    label: "SEO",
    href: "/growth-engine/seo",
    description: "Technical, on-page and local search visibility.",
  },
  {
    label: "Social Media Marketing",
    href: "/growth-engine/social-media-marketing",
    description: "Organic and paid social, planned and produced.",
  },
  {
    label: "Lead Generation",
    href: "/growth-engine/lead-generation",
    description: "Funnels and outreach that produce qualified leads.",
  },
  {
    label: "Website Design & Development",
    href: "/growth-engine/website-design-development",
    description: "Sites built to move visitors toward a decision.",
  },
  {
    label: "Branding & Creative",
    href: "/growth-engine/branding-creative",
    description: "Identity and creative that supports performance.",
  },
  {
    label: "AI Automation & AI Agents",
    href: "/growth-engine/ai-automation",
    description: "AI systems and agents built around real business workflows.",
  },
  {
    label: "Custom Web Apps & Software",
    href: "/growth-engine/custom-web-apps-software",
    description: "Web applications and business software built around your processes.",
  },
];

export const primaryNav: NavItem[] = [
  { label: "Growth Engine", href: "/growth-engine", children: growthEngineLinks },
  { label: "Execution Model", href: "/execution-model" },
  { label: "Featured Projects", href: "/featured-projects" },
  { label: "Verticals", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const footerServiceLinks = growthEngineLinks;

export const footerCompanyLinks: NavChild[] = [
  { label: "Execution Model", href: "/execution-model", description: "" },
  { label: "Featured Projects", href: "/featured-projects", description: "" },
  { label: "Industries", href: "/industries", description: "" },
  { label: "About Us", href: "/about", description: "" },
  { label: "Contact Us", href: "/contact", description: "" },
  { label: "Insights", href: "/insights", description: "" },
];
