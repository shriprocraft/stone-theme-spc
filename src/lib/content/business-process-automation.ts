import type { CTA } from "@/lib/content/services";

export const businessProcessAutomation = {
  slug: "business-process-automation",
  navLabel: "Business Process Automation",
  metaTitle: "Business Process Automation | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft designs business process automation systems that reduce repetitive work and connect the steps your team currently manages by hand.",

  eyebrow: "Business Process Automation",
  h1: "Make Business Operations Run With Less Manual Work",
  heroLead: [
    "Every business has processes that consume more time than they should.",
  ],
  heroExamples: [
    "Approvals.",
    "Data entry.",
    "Reports.",
    "Notifications.",
    "Follow-ups.",
    "Document handling.",
  ],
  heroBody: [
    "We design business process automation systems that reduce repetitive work and connect the steps your team currently manages by hand.",
  ],

  processHeading: "Start With the Process",
  processLead: ["We map how work moves through your business."],
  processIntro: "Then we identify:",
  processItems: [
    "repetitive tasks",
    "manual handoffs",
    "duplicated data entry",
    "unnecessary approvals",
    "delayed follow-ups",
    "disconnected systems",
  ],
  processClosing: "From there, we design the automation.",

  adaptHeading: "Built Around the Way You Work",
  adaptEmphasis:
    "Automation should adapt to your business — not force your business into someone else's workflow.",
  adaptBody: [
    "We can combine software integrations, APIs, AI and workflow logic to create systems around your actual operating process.",
  ],
  closingCta: { label: "Automate Your Business Process", href: "/contact" } satisfies CTA,
};
