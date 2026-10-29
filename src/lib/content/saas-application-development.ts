import type { CTA } from "@/lib/content/services";

export const saasApplicationDevelopment = {
  slug: "saas-application-development",
  navLabel: "SaaS Application Development",
  metaTitle: "SaaS Application Development | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft builds SaaS applications from the first practical version through the systems required to operate and expand the product.",

  eyebrow: "SaaS Application Development",
  h1: "Turn a Software Idea Into a Working Product",
  heroLead: [
    "A SaaS product has to do more than work.",
    "It needs a clear user experience, dependable architecture and room to grow.",
  ],
  heroBody: [
    "We build SaaS applications from the first practical version through the systems required to operate and expand the product.",
  ],

  processHeading: "From Idea to Product",
  processSteps: [
    {
      title: "Define",
      body: "Clarify the users, problem, core workflow and product scope.",
    },
    {
      title: "Design",
      body: "Create the product experience and application structure.",
    },
    {
      title: "Build",
      body: "Develop the core application and required integrations.",
    },
    {
      title: "Launch",
      body: "Put the product in front of real users.",
    },
    {
      title: "Improve",
      body: "Use feedback and usage patterns to decide what should come next.",
    },
  ],

  growthHeading: "Built With Growth in Mind",
  growthLead: ["The first version should prove the product."],
  growthBody: [
    "It should not attempt to contain every feature you may ever need.",
  ],
  growthEmphasis:
    "We focus on the core experience first, then build outward as the product earns it.",
  closingCta: { label: "Discuss Your SaaS Product", href: "/contact" } satisfies CTA,
};
