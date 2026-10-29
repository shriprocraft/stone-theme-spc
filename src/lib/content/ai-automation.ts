import type { CTA, FAQItem } from "@/lib/content/services";

export type BuildItem = { title: string; body: string[]; href?: string };
export type FitItem = { title: string; body: string };

export const aiAutomation = {
  slug: "ai-automation",
  navLabel: "AI Automation & AI Agents",
  metaTitle: "AI Automation & AI Agents | Shri Pro Craft",
  metaDescription:
    "Shri Pro Craft builds AI automation systems, AI agents and business workflows that handle repetitive work, connect your tools and help teams move faster.",

  eyebrow: "AI Automation & AI Agents",
  h1: "Put AI to Work Inside Your Business",
  heroLead: ["AI should do more than answer questions.", "It should take work off your team's plate."],
  heroBody: [
    "Shri Pro Craft builds AI automation systems, AI agents and business workflows that handle repetitive work, connect your tools and help teams move faster.",
    "From customer conversations to internal operations, we design AI around the work your business actually does.",
  ],
  heroCta: { label: "Build an AI System", href: "/contact" } satisfies CTA,

  introHeading: "AI That Works Behind the Scenes",
  introLead: ["Most businesses don't need another AI tool.", "They need fewer manual steps."],
  introBody: [
    "We look at the processes slowing your team down, identify where AI can take over and build the automation around your existing systems.",
    "That could mean an AI agent qualifying a lead, a chatbot answering customer questions, a workflow moving data between platforms or an internal process running automatically in the background.",
  ],

  buildHeading: "What We Build",
  buildItems: [
    {
      title: "AI Automation Services",
      href: "/growth-engine/ai-automation/ai-automation-services",
      body: [
        "Automate repetitive business tasks using AI, APIs and workflow systems.",
        "From lead handling and customer support to document processing and internal operations, we build automation around real business processes.",
      ],
    },
    {
      title: "AI Agent Development",
      href: "/growth-engine/ai-automation/ai-agent-development",
      body: [
        "AI agents designed to understand context, make decisions and complete defined tasks.",
        "They can work across your business tools, follow rules and hand work back to your team when human input is needed.",
      ],
    },
    {
      title: "AI Chatbot Development",
      href: "/growth-engine/ai-automation/ai-chatbot-development",
      body: [
        "Build AI chatbots that can understand questions, work with your business information and guide customers toward the right next step.",
      ],
    },
    {
      title: "AI Workflow Automation",
      href: "/growth-engine/ai-automation/ai-workflow-automation",
      body: [
        "Connect the tools your team already uses and automate the handoffs between them.",
        "Less copying. Less chasing. Less repetitive work.",
      ],
    },
    {
      title: "Business Process Automation",
      href: "/growth-engine/ai-automation/business-process-automation",
      body: [
        "Find manual processes that consume time and turn them into structured, automated workflows.",
        "The objective isn't automation for its own sake. It is better work with fewer unnecessary steps.",
      ],
    },
  ] satisfies BuildItem[],

  fitHeading: "Where AI Automation Can Fit",
  fitItems: [
    { title: "Lead Management", body: "Capture, qualify, route and follow up with leads." },
    { title: "Customer Support", body: "Handle common questions and escalate conversations when required." },
    { title: "Sales Operations", body: "Automate research, qualification, updates and follow-up workflows." },
    { title: "Marketing Operations", body: "Connect campaigns, forms, CRM systems and reporting." },
    { title: "Internal Operations", body: "Automate repetitive administrative and data-handling tasks." },
    { title: "Document Workflows", body: "Extract, classify and move information between systems." },
  ] satisfies FitItem[],

  processHeading: "Built Around Your Business",
  processLead: ["We don't start with a tool.", "We start with the process."],
  processSteps: [
    "Understand the workflow.",
    "Find the bottleneck.",
    "Design the system.",
    "Connect the tools.",
    "Automate the repetitive work.",
    "Measure what changed.",
  ],

  stackHeading: "AI Agents + Automation + Your Existing Stack",
  stackLead: "Your business already has software.",
  stackTools: "CRM. Forms. Email. Databases. Websites. Payment systems. Internal tools.",
  stackBody:
    "We connect AI and automation into that environment instead of asking your team to rebuild everything around another platform.",

  whyHeading: "Why Shri Pro Craft",
  whyBody: [
    "Because the best automation is the kind your team barely notices.",
    "It simply gets the work done.",
    "We combine marketing knowledge, automation, AI and software development to build systems around actual business workflows.",
  ],
  whyCta: { label: "Talk to Us About Automation", href: "/contact" } satisfies CTA,

  faqs: [
    {
      question: "What are AI automation services?",
      answer:
        "AI automation services use artificial intelligence, software integrations and automated workflows to handle repetitive business tasks with less manual intervention.",
    },
    {
      question: "What is AI agent development?",
      answer:
        "AI agent development involves building AI-powered systems that can understand a defined objective, use connected tools and complete specific tasks within controlled business workflows.",
    },
    {
      question: "Can AI automation work with our existing software?",
      answer:
        "Yes. Where APIs, integrations or supported connectors are available, AI workflows can be designed around your existing CRM, website, communication tools and business systems.",
    },
    {
      question: "Can you build a custom AI chatbot?",
      answer: "Yes. AI chatbots can be designed around your business information, customer journeys and specific use cases.",
    },
    {
      question: "Is AI automation suitable for small businesses?",
      answer:
        "It can be, particularly where a business has repetitive processes involving leads, support, data entry, follow-ups or internal operations. The right starting point is identifying a process worth automating.",
    },
  ] satisfies FAQItem[],
};
