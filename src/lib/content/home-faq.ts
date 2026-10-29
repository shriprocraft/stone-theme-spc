/**
 * Homepage FAQ — the single canonical dataset. The visible accordion
 * (HomeFaq) and the FAQPage JSON-LD are both generated from this array so
 * the two can never drift. `answer` is the verbatim published copy; the
 * related link lives outside it (href/linkLabel) so the schema text matches
 * the visible answer exactly.
 */
export type HomeFaqItem = {
  question: string;
  answer: string;
  /** Internal route (trailing slash, matching `trailingSlash: true`). */
  href: string;
  linkLabel: string;
};

export const homeFaqs: HomeFaqItem[] = [
  {
    question: "What digital marketing services does Shri Pro Craft offer in Coimbatore?",
    answer:
      "Shri Pro Craft is a Coimbatore-based digital marketing and technology agency offering performance marketing, Google Ads, Meta Ads, SEO, social media marketing, lead generation, website development, branding, AI automation and custom software development. Our services work together to help businesses attract qualified customers, improve conversions and achieve measurable growth.",
    href: "/growth-engine/",
    linkLabel: "Explore this service",
  },
  {
    question: "How can a performance marketing agency in Coimbatore help generate more qualified leads?",
    answer:
      "Shri Pro Craft helps businesses generate qualified leads through targeted Google Ads, Meta Ads, conversion-focused landing pages and accurate performance tracking. Our performance marketing approach connects advertising, website optimisation and lead generation into one measurable system, focusing on customer acquisition, cost per lead and return on ad spend.",
    href: "/growth-engine/performance-marketing/",
    linkLabel: "Explore this service",
  },
  {
    question: "Who provides Google Ads management and PPC services in Coimbatore?",
    answer:
      "Shri Pro Craft provides Google Ads management and PPC advertising services in Coimbatore for businesses seeking qualified leads and online sales. We manage Google Search Ads, Shopping Ads, Performance Max, YouTube Ads and remarketing campaigns, combining keyword targeting, conversion tracking and ongoing optimisation to improve advertising performance.",
    href: "/growth-engine/google-ads/",
    linkLabel: "Explore this service",
  },
  {
    question: "Can Shri Pro Craft manage Facebook and Instagram ads for lead generation?",
    answer:
      "Yes. Shri Pro Craft provides Meta Ads management services for Facebook and Instagram, helping businesses generate leads, reach relevant audiences and increase online sales. Our services include audience targeting, creative testing, lead generation campaigns, retargeting, conversion tracking and campaign optimisation focused on measurable business outcomes.",
    href: "/growth-engine/meta-ads/",
    linkLabel: "Explore this service",
  },
  {
    question: "Which SEO agency in Coimbatore offers local SEO and Google Business Profile optimisation?",
    answer:
      "Shri Pro Craft offers SEO services in Coimbatore, including technical SEO, on-page SEO, keyword research, content strategy, local SEO and Google Business Profile optimisation. We help businesses improve their visibility in relevant Google searches, attract organic traffic and generate enquiries from customers in Coimbatore, Tamil Nadu and other target markets.",
    href: "/growth-engine/seo/",
    linkLabel: "Explore this service",
  },
  {
    question: "Can Shri Pro Craft generate qualified leads for B2B and manufacturing companies?",
    answer:
      "Yes. Shri Pro Craft provides B2B lead generation and digital marketing services for manufacturing companies, industrial suppliers and other businesses with longer sales cycles. We develop targeted search campaigns, landing pages, lead capture systems and follow-up workflows to attract relevant decision-makers and improve the quality of sales enquiries.",
    href: "/growth-engine/lead-generation/",
    linkLabel: "Explore this service",
  },
  {
    question: "Does Shri Pro Craft provide e-commerce and D2C performance marketing services?",
    answer:
      "Yes. Shri Pro Craft provides e-commerce and D2C digital marketing services using Google Shopping Ads, Meta Ads, retargeting, SEO and conversion rate optimisation. We connect paid advertising with product-page performance and purchase tracking to help online businesses acquire customers, improve conversions and manage customer acquisition costs.",
    href: "/growth-engine/performance-marketing/",
    linkLabel: "Explore this service",
  },
  {
    question: "Who builds SEO-friendly business websites and high-converting landing pages in Coimbatore?",
    answer:
      "Shri Pro Craft provides website design and development services in Coimbatore, creating responsive business websites and conversion-focused landing pages. We combine search-friendly website structures, clear messaging, user experience design and conversion tracking to build websites that support online visibility, lead generation and business growth.",
    href: "/growth-engine/website-design-development/",
    linkLabel: "Explore this service",
  },
  {
    question: "Where can businesses get AI chatbot development and AI automation services in Coimbatore?",
    answer:
      "Shri Pro Craft provides AI automation services, AI agent development, AI chatbot development and workflow automation for businesses in Coimbatore and beyond. We build solutions for lead qualification, customer support, CRM workflows and repetitive business processes, integrating AI with existing business tools where suitable integrations are available.",
    href: "/growth-engine/ai-automation/",
    linkLabel: "Explore this service",
  },
  {
    question: "How much does it cost to hire Shri Pro Craft for digital marketing services?",
    answer:
      "Shri Pro Craft offers customised digital marketing solutions based on your business goals, required services, campaign scope and advertising budget. Pricing depends on whether you need SEO, Google Ads, Meta Ads, website development or a complete performance marketing strategy. Contact Shri Pro Craft to discuss your requirements and request a tailored proposal.",
    href: "/contact/",
    linkLabel: "Contact Shri Pro Craft",
  },
];
