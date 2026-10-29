export type Industry = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "b2b-manufacturing",
    title: "B2B & Manufacturing",
    summary: "Longer sales cycles, multiple decision-makers, and lead quality that matters more than lead volume.",
    image: "/industries-icons/b2b-manufacturing.webp",
    detail:
      "For B2B and manufacturing businesses, we focus on lead generation and search visibility built around how these deals actually get made — considered, multi-step, and rarely closed from a single ad click.",
  },
  {
    slug: "ecommerce-d2c",
    title: "E-commerce & D2C",
    summary: "Paid acquisition, retargeting and conversion-focused product pages working as one system.",
    image: "/industries-icons/ecommerce-d2c.webp",
    detail:
      "For online stores, performance marketing, conversion optimisation and SEO are managed together, since acquisition cost and website conversion rate decide profitability just as much as ad spend does.",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    summary: "Lead generation and local search for a market where trust and timing decide the sale.",
    image: "/industries-icons/real-estate.webp",
    detail:
      "Real estate enquiries need fast, well-tracked follow-up. We build lead capture, CRM handoff and local SEO around that reality.",
  },
  {
    slug: "education",
    title: "Education",
    summary: "Enquiry and admission funnels built around academic calendars and decision timelines.",
    image: "/industries-icons/education.webp",
    detail:
      "Education marketing runs on cycles — admissions windows, term dates, decision deadlines. Campaigns and follow-up sequences are planned against that calendar, not run continuously by default.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Local visibility and appointment-focused campaigns handled with appropriate care.",
    image: "/industries-icons/healthcare.webp",
    detail:
      "For clinics and healthcare providers, we focus on local search, Google Business Profile visibility and appointment-focused landing pages, within the advertising restrictions the category carries.",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary: "Credibility-led positioning and lead generation for firms selling expertise.",
    image: "/industries-icons/professional-services.webp",
    detail:
      "For consultancies, agencies and firms selling expertise, positioning and case-study proof usually matter as much as the campaign itself — the website has to do convincing work before a form gets filled.",
  },
  {
    slug: "local-businesses",
    title: "Local Businesses",
    summary: "Coimbatore-focused visibility, local SEO and enquiry generation for area-based demand.",
    image: "/industries-icons/local-businesses.webp",
    detail:
      "For businesses that sell primarily within Coimbatore and Tamil Nadu, local SEO, Google Business Profile management and geographically targeted ads carry most of the weight.",
  },
];
