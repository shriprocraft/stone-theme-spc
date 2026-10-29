import type { CTA } from "@/lib/content/services";

export const apiIntegrationDevelopment = {
  slug: "api-integration-development",
  navLabel: "API Integration & Development",
  metaTitle: "API Integration & Development | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft develops and integrates APIs to move data between systems, connect applications and build the technical layer your business needs.",

  eyebrow: "API Integration & Development",
  h1: "Make Your Software Talk to Each Other",
  heroLead: [
    "Your website knows something.",
    "Your CRM knows something else.",
    "Your payment system, database and internal tools may all hold different pieces of the same business.",
    "APIs connect those pieces.",
  ],
  heroBody: [
    "Shri Pro Craft develops and integrates APIs to move data between systems, connect applications and build the technical layer your business needs.",
  ],

  integrationsHeading: "What We Work With",
  integrations: [
    "Third-party API integrations",
    "Custom API development",
    "CRM integrations",
    "Payment integrations",
    "Data synchronisation",
    "Application integrations",
    "Internal system connections",
    "Workflow integrations",
  ],

  approachHeading: "Integration Without the Mess",
  approachLead: [
    "A good integration should reduce manual work, not create another thing your team has to manage.",
  ],
  approachBody: [
    "We map the data flow, understand the systems involved and build the connection around the actual business requirement.",
  ],
  closingCta: { label: "Discuss an Integration", href: "/contact" } satisfies CTA,
};
