import type { CTA } from "@/lib/content/services";

type CrmBuildItem = { title: string; body: string };

export const crmInternalTools = {
  slug: "crm-internal-tools",
  navLabel: "CRM & Internal Tool Development",
  metaTitle: "CRM & Internal Tool Development | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft develops custom CRM systems, dashboards and internal business tools around your team's workflows.",

  eyebrow: "CRM & Internal Tool Development",
  h1: "Build the System Your Team Actually Needs",
  heroLead: [
    "Your CRM should fit your sales process.",
    "Your internal tools should fit your operation.",
  ],
  heroBody: [
    "If standard software forces your team into workarounds, we can build the missing layer.",
    "Shri Pro Craft develops custom CRM systems, dashboards and internal business tools around your team's workflows.",
  ],

  buildHeading: "What We Can Build",
  buildItems: [
    {
      title: "Custom CRM systems",
      body: "Manage leads, customers, pipelines and follow-ups.",
    },
    {
      title: "Internal dashboards",
      body: "Give teams a clear view of the information they need.",
    },
    {
      title: "Operations tools",
      body: "Bring repetitive internal workflows into one system.",
    },
    {
      title: "Team portals",
      body: "Give different users controlled access to the information and functions they need.",
    },
    {
      title: "Workflow tools",
      body: "Turn manual processes into structured digital workflows.",
    },
  ] satisfies CrmBuildItem[],

  processHeading: "Your Process. Your System.",
  processLead: [
    "We map how your team currently works, identify what the software needs to handle and build around those requirements.",
  ],
  processBody: ["No unnecessary features.", "No forced workflow."],
  processEmphasis: "Just software that fits.",
  closingCta: { label: "Build Your Internal Tool", href: "/contact" } satisfies CTA,
};
