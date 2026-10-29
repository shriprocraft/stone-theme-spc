import type { CTA } from "@/lib/content/services";

type SoftwareBuildItem = { title: string; body: string; href?: string };

export const customWebAppsSoftware = {
  slug: "custom-web-apps-software",
  navLabel: "Custom Web Apps & Software",
  metaTitle: "Custom Web Apps & Software | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft builds custom web applications and business software around your processes, customers and operational requirements.",

  eyebrow: "Custom Web Apps & Software",
  h1: "Software Built Around the Way Your Business Works",
  heroLead: [
    "Sometimes the software you need doesn't exist.",
    "Sometimes the software exists — but your business has already outgrown it.",
  ],
  heroBody: [
    "Shri Pro Craft builds custom web applications and business software around your processes, customers and operational requirements.",
    "From internal tools and CRM systems to SaaS products and API-connected applications, we build software that fits the business instead of forcing the business to fit the software.",
  ],

  buildHeading: "What We Build",
  // `href` links the offering to its dedicated child page when one exists.
  buildItems: [
    {
      title: "Custom Web Application Development",
      body: "Web applications designed around specific business requirements, workflows and user roles.",
      href: "/growth-engine/custom-web-apps-software/custom-web-application-development",
    },
    {
      title: "SaaS Application Development",
      body: "Build and launch subscription-based software products with the architecture required to grow.",
      href: "/growth-engine/custom-web-apps-software/saas-application-development",
    },
    {
      title: "Business Software Development",
      body: "Replace spreadsheets, disconnected tools and manual processes with software built around your operation.",
      href: "/growth-engine/custom-web-apps-software/business-software-development",
    },
    {
      title: "CRM & Internal Tool Development",
      body: "Create internal systems for managing customers, teams, operations, sales and business data.",
      href: "/growth-engine/custom-web-apps-software/crm-internal-tools",
    },
    {
      title: "API Integration & Development",
      body: "Connect the systems your business already uses and build the APIs required to move data between them.",
      href: "/growth-engine/custom-web-apps-software/api-integration-development",
    },
  ] satisfies SoftwareBuildItem[],

  problemHeading: "Built for the Problem You're Actually Solving",
  problemLead: ["We don't begin with a template.", "We begin with the workflow."],
  problemQuestions: [
    "What needs to happen?",
    "Who needs access?",
    "What data moves through the system?",
    "What should be automated?",
    "What needs to integrate?",
    "What happens when something goes wrong?",
  ],
  problemClosing: "Then we turn those requirements into software.",

  mvpHeading: "From First Version to Working Product",
  mvpLead: [
    "A custom application doesn't need to become a six-month software project before anyone can use it.",
  ],
  mvpBody: [
    "We can structure the build around a practical first version, validate the workflow and expand from there.",
  ],
  closingCta: { label: "Discuss Your Software Idea", href: "/contact" } satisfies CTA,
};
