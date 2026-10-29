import type { CTA } from "@/lib/content/services";

export const aiWorkflowAutomation = {
  slug: "ai-workflow-automation",
  navLabel: "AI Workflow Automation",
  metaTitle: "AI Workflow Automation | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft builds AI workflow automation that connects the steps in your business processes and removes unnecessary manual work.",

  eyebrow: "AI Workflow Automation",
  h1: "Connect the Steps. Automate the Work.",
  heroLead: ["Business processes rarely happen in one tool."],
  heroSteps: [
    "A lead comes through a form.",
    "Someone checks it.",
    "An email gets sent.",
    "The CRM is updated.",
    "Someone follows up.",
  ],
  heroBody: [
    "We build AI workflow automation that connects those steps and removes unnecessary manual work.",
  ],

  automateHeading: "What We Automate",
  automateItems: [
    {
      title: "Lead workflows",
      body: "Capture, qualify and route new enquiries.",
    },
    {
      title: "Marketing workflows",
      body: "Connect campaigns, forms, CRM systems and reporting.",
    },
    {
      title: "Sales workflows",
      body: "Automate research, updates, notifications and follow-ups.",
    },
    {
      title: "Operations workflows",
      body: "Move information between systems and trigger the next action.",
    },
    {
      title: "Customer workflows",
      body: "Route questions, requests and support tasks.",
    },
  ],

  purposeHeading: "Automation With a Purpose",
  purposeLead: ["We don't automate a process because automation sounds impressive."],
  purposeBody: [
    "We automate it when it saves time, removes friction or makes the process more reliable.",
  ],
  purposeStandard: "That is the standard.",
  closingCta: { label: "Automate Your Workflow", href: "/contact" } satisfies CTA,
};
