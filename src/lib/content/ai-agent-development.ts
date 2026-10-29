import type { CTA } from "@/lib/content/services";

export const aiAgentDevelopment = {
  slug: "ai-agent-development",
  navLabel: "AI Agent Development",
  metaTitle: "AI Agent Development | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft develops AI agents around defined business tasks, with the tools, rules and workflows they need to operate reliably.",

  eyebrow: "AI Agent Development",
  h1: "AI Agents Built to Do More Than Chat",
  heroLead: ["An AI agent should have a job."],
  agentJobs: [
    "Research something.",
    "Qualify a lead.",
    "Process information.",
    "Update a system.",
    "Answer a customer.",
    "Trigger the next step.",
  ],
  heroBody: [
    "Shri Pro Craft develops AI agents around defined business tasks, with the tools, rules and workflows they need to operate reliably.",
  ],

  processHeading: "From Prompt to Process",
  processLead: [
    "A chatbot waits for a question.",
    "An AI agent can be designed around a workflow.",
  ],
  processBody: [
    "We define the objective, connect the required tools, establish the rules and build the handoffs required for the agent to complete its job.",
  ],

  buildHeading: "What We Build",
  buildItems: [
    "Customer-facing AI agents",
    "Lead qualification agents",
    "Research agents",
    "Internal operations agents",
    "Knowledge-based agents",
    "Sales assistance agents",
    "Workflow agents",
    "Custom AI agent systems",
  ],

  guardrailsHeading: "Built With Guardrails",
  guardrailsLead: ["Business AI needs boundaries."],
  guardrailsBody: [
    "We design around defined permissions, structured workflows, human handoffs and clear failure paths where appropriate.",
    "The goal is not to give an AI unlimited control.",
  ],
  guardrailsEmphasis: "The goal is to give it the right job and the right boundaries.",
  closingCta: { label: "Build an AI Agent", href: "/contact" } satisfies CTA,
};
