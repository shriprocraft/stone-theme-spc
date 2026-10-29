export type ExecutionStage = {
  number: string;
  title: string;
  summary: string;
  detail: string;
};

export const executionStages: ExecutionStage[] = [
  {
    number: "01",
    title: "Diagnose",
    summary: "Understand the business, market, customer and current acquisition system.",
    detail:
      "Before any campaign is built, we look at what's already happening — the offer, the audience, the existing website and ad accounts, and where the current system is actually losing people. Most engagements start by finding what's already broken, not by adding something new on top of it.",
  },
  {
    number: "02",
    title: "Position",
    summary: "Clarify the offer, audience, message and competitive opportunity.",
    detail:
      "We define who the campaign is actually for, what makes the offer worth choosing over a competitor, and what message earns attention without overpromising. This shapes everything built afterward, from ad copy to landing page structure.",
  },
  {
    number: "03",
    title: "Build",
    summary: "Create campaigns, content, landing pages, tracking and systems.",
    detail:
      "Campaigns, creative, landing pages and conversion tracking are built together, so the pieces are designed to work as one funnel rather than assembled after the fact.",
  },
  {
    number: "04",
    title: "Launch",
    summary: "Take the strategy into market with measurable conversion points.",
    detail:
      "Nothing goes live without tracking confirmed first. Launch is treated as the start of a measurement period, not a finish line — we're watching from day one.",
  },
  {
    number: "05",
    title: "Optimise",
    summary: "Test, learn and improve.",
    detail:
      "We test one variable at a time — audience, creative, landing page, offer — and let the data decide what changes next, rather than acting on instinct or a single week's numbers.",
  },
  {
    number: "06",
    title: "Scale",
    summary: "Put more resources behind what actually works.",
    detail:
      "Budget increases follow proof, not optimism. Once a channel or campaign is producing qualified results consistently, we scale it deliberately and keep measuring as it grows.",
  },
];
