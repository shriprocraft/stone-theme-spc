import type { CTA } from "@/lib/content/services";

export type ApproachStep = { title: string; body: string };

export const aiAutomationServices = {
  slug: "ai-automation-services",
  navLabel: "AI Automation Services",
  metaTitle: "AI Automation Services | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft builds AI automation services that connect business tools, handle repetitive processes and move information from one step to the next without constant manual intervention.",

  eyebrow: "AI Automation Services",
  h1: "Turn Repetitive Work Into Automated Workflows",
  heroLead: [
    "If your team keeps doing the same task every day, it may not need another person.",
    "It may need a better system.",
  ],
  heroBody: [
    "Shri Pro Craft builds AI automation services that connect business tools, handle repetitive processes and move information from one step to the next without constant manual intervention.",
  ],

  automatableHeading: "What Can Be Automated?",
  automatableItems: [
    "Lead capture.",
    "Lead qualification.",
    "Customer enquiries.",
    "Data processing.",
    "Email workflows.",
    "Reporting.",
    "Document handling.",
    "Internal notifications.",
    "CRM updates.",
    "Follow-up workflows.",
  ],
  automatableClosing: "The right automation depends on the process.",

  approachHeading: "Our Approach",
  approachSteps: [
    { title: "Find the Work", body: "We identify repetitive tasks, bottlenecks and unnecessary handoffs." },
    {
      title: "Design the Workflow",
      body: "We map what should happen, when it should happen and what happens when something goes wrong.",
    },
    {
      title: "Add AI Where It Makes Sense",
      body: "AI is used where interpretation, classification, generation or decision support adds value.",
    },
    {
      title: "Connect Your Systems",
      body: "We connect the workflow to the tools your business already uses wherever technically possible.",
    },
    {
      title: "Test and Improve",
      body: "Automation needs guardrails. We test the workflow, monitor its behaviour and refine it before wider deployment.",
    },
  ] satisfies ApproachStep[],

  closingHeading: "Automation Built for Real Operations",
  closingLead: "The objective is simple:",
  closingEmphasis: "Less manual work. Fewer missed steps. Faster execution.",
  closingCta: { label: "Automate a Process", href: "/contact" } satisfies CTA,
};
