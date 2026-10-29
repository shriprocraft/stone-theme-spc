export type CTA = { label: string; href: string };
export type CoverageItem = { title: string; body: string; href?: string };
export type FAQItem = { question: string; answer: string };
export type WhyPoint = { title: string; body: string };

export type ServiceContent = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSubhead: string;
  heroPrimaryCta: CTA;
  heroSecondaryCta: CTA;
  definitionHeading: string;
  definitionParagraphs: string[];
  coverageHeading: string;
  coverage: CoverageItem[];
  approachHeading: string;
  approachParagraphs: string[];
  whyHeading: string;
  whyPoints: WhyPoint[];
  faqs: FAQItem[];
  relatedSlugs: string[];
};

export const services: Record<string, ServiceContent> = {
  "performance-marketing": {
    slug: "performance-marketing",
    navLabel: "Performance Marketing",
    metaTitle: "Performance Marketing Agency in Coimbatore | Shri Pro Craft",
    metaDescription:
      "Shri Pro Craft plans and runs paid acquisition, SEO and conversion tracking as one connected system for businesses in Coimbatore, Tamil Nadu and beyond.",
    eyebrow: "Growth Engine · Performance Marketing",
    h1: "Performance marketing, run like a system",
    heroSubhead:
      "We plan, launch and manage the paid acquisition, search visibility and conversion tracking that bring in customers — and we manage them together, not as separate contracts.",
    heroPrimaryCta: { label: "Start a Conversation", href: "/contact" },
    heroSecondaryCta: { label: "Explore Google Ads", href: "/growth-engine/google-ads" },
    definitionHeading: "What performance marketing actually means",
    definitionParagraphs: [
      "Performance marketing is advertising you can measure against a result — a lead, a purchase, a signed-up customer — rather than an impression or a follower count.",
      "Done properly, it isn't a single campaign. It's the combination of the right channel, the right audience, a page built to convert, and tracking that tells you which of those is actually working.",
      "Most businesses run pieces of this separately — an ads freelancer here, a website there, no shared measurement. That gap is usually where budget leaks.",
    ],
    coverageHeading: "What we manage",
    coverage: [
      {
        title: "Google Ads",
        body: "Search, Shopping, Performance Max and YouTube campaigns built around commercial intent.",
        href: "/growth-engine/google-ads",
      },
      {
        title: "Meta Ads",
        body: "Facebook and Instagram campaigns for awareness, retargeting and direct response.",
        href: "/growth-engine/meta-ads",
      },
      {
        title: "Retargeting",
        body: "Bringing back visitors who showed interest but didn't convert, across search and social.",
      },
      {
        title: "Lead Generation",
        body: "Funnels, forms and outreach sequences built to produce leads your sales team can work.",
        href: "/growth-engine/lead-generation",
      },
      {
        title: "Conversion Optimisation",
        body: "Landing pages and site changes tested against real visitor behaviour, not opinion.",
        href: "/growth-engine/website-design-development",
      },
      {
        title: "Tracking & Measurement",
        body: "Conversion tracking and tagging set up correctly before a rupee is spent on ads.",
      },
    ],
    approachHeading: "How we approach performance",
    approachParagraphs: [
      "We start by understanding what a qualified customer actually looks like for your business — not just anyone who fills a form.",
      "Campaigns launch with tracking already in place, so early data is trustworthy instead of retrofitted later.",
      "We test one variable at a time — audience, creative, landing page — so we know what actually moved the number.",
      "Budget moves toward what's converting and away from what's simply decorating a dashboard.",
    ],
    whyHeading: "Why Shri Pro Craft",
    whyPoints: [
      {
        title: "One team across channels",
        body: "Search, social and your website are managed by the same team, working from the same conversion data — not three vendors comparing notes over email.",
      },
      {
        title: "Tracking before spend",
        body: "We confirm conversion tracking is accurate before scaling budget, so decisions are based on real numbers.",
      },
      {
        title: "Coimbatore-based, India and beyond",
        body: "We work with local businesses in Coimbatore and Tamil Nadu, and with teams further afield who want the same direct way of working.",
      },
    ],
    faqs: [
      {
        question: "How much should I budget for performance marketing?",
        answer:
          "It depends on your industry, competition and sales cycle. We'll look at your numbers and give you a realistic range before you commit to anything, rather than a generic percentage rule.",
      },
      {
        question: "Do you only work with Coimbatore businesses?",
        answer:
          "Coimbatore and Tamil Nadu are where we're based and where most of our client relationships started, but we work with businesses across India and select international markets.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Paid channels can produce leads within the first few weeks; SEO and organic growth take longer. We set expectations by channel, rather than blending them into one timeline.",
      },
      {
        question: "Do you build the website too, or just run the ads?",
        answer:
          "Both, if that's what's needed. Sending paid traffic to a website that doesn't convert is one of the most common ways budget gets wasted, so website work sits inside the same system.",
      },
    ],
    relatedSlugs: ["google-ads", "meta-ads", "seo", "lead-generation"],
  },

  "google-ads": {
    slug: "google-ads",
    navLabel: "Google Ads",
    metaTitle: "Google Ads Management Agency in Coimbatore | Shri Pro Craft",
    metaDescription:
      "Google Ads management for search, Performance Max, Shopping and YouTube — built around conversion tracking and account structure, not just budget.",
    eyebrow: "Growth Engine · Google Ads",
    h1: "Google Ads management built around what converts",
    heroSubhead:
      "We plan, build and manage Google Ads accounts — search, Performance Max, Shopping, YouTube and remarketing — with conversion tracking set up correctly from day one.",
    heroPrimaryCta: { label: "Start a Conversation", href: "/contact" },
    heroSecondaryCta: {
      label: "Explore Performance Marketing",
      href: "/growth-engine/performance-marketing",
    },
    definitionHeading: "What Google Ads management actually involves",
    definitionParagraphs: [
      "Google Ads rewards accounts that give it clean signals — accurate conversion tracking, sensible campaign structure, and creative that matches what someone searching is actually looking for.",
      "Most underperforming accounts aren't underspending. They're set up in a way that makes it hard for Google's own systems, or for anyone reading the account, to tell what's actually working.",
      "Good management means fixing that structure before chasing more budget.",
    ],
    coverageHeading: "What we manage",
    coverage: [
      { title: "Search Campaigns", body: "Keyword and intent-based campaigns for people actively looking for what you sell." },
      {
        title: "Performance Max",
        body: "Google's automated campaign type, set up with the right feeds, audience signals and guardrails so it isn't a black box.",
      },
      { title: "Shopping & Display", body: "Product listings and display placements for retail and e-commerce accounts." },
      { title: "YouTube Advertising", body: "Video campaigns for awareness and remarketing across YouTube inventory." },
      { title: "Remarketing", body: "Bringing back people who visited but didn't convert, with messaging suited to where they dropped off." },
      {
        title: "Conversion Tracking",
        body: "Correct setup of conversion actions, offline conversion imports and attribution, so reporting reflects reality.",
      },
    ],
    approachHeading: "How we manage an account",
    approachParagraphs: [
      "We audit the existing account structure first, if one exists, rather than starting a new one blind.",
      "Campaigns are built around clear intent groups, with budgets set by what a conversion is actually worth to the business.",
      "Landing pages are checked against the ad — mismatched pages are one of the fastest ways to raise cost per lead.",
      "Reporting is reviewed on a schedule, with changes made for reasons we can explain, not guesses.",
    ],
    whyHeading: "Why Shri Pro Craft",
    whyPoints: [
      { title: "Structure before scale", body: "We fix account structure and tracking before recommending more budget, not after." },
      {
        title: "Landing pages included",
        body: "We flag or fix landing page issues rather than sending traffic to pages that were never built to convert search intent.",
      },
      {
        title: "Transparent reporting",
        body: "You see what's spent, what it produced, and why we're recommending a change — in plain language.",
      },
    ],
    faqs: [
      {
        question: "Do you manage existing Google Ads accounts or only build new ones?",
        answer: "Both. We regularly take over accounts that have history worth keeping and restructure what isn't working.",
      },
      {
        question: "What's a realistic budget to start with Google Ads?",
        answer:
          "It depends on your average order value or deal size and your industry's typical cost per click. We'll work this out with you before recommending a number.",
      },
      {
        question: "Do you handle Performance Max, or just traditional search campaigns?",
        answer: "Both. Performance Max needs the right feed and audience setup to perform well — we don't just turn it on and leave it.",
      },
    ],
    relatedSlugs: ["performance-marketing", "meta-ads", "website-design-development"],
  },

  "meta-ads": {
    slug: "meta-ads",
    navLabel: "Meta Ads",
    metaTitle: "Meta Ads Management Agency | Shri Pro Craft",
    metaDescription:
      "Facebook and Instagram Ads management focused on audience targeting, creative testing and conversion tracking — for lead generation and e-commerce.",
    eyebrow: "Growth Engine · Meta Ads",
    h1: "Meta Ads that are tested, not guessed",
    heroSubhead:
      "We run Facebook and Instagram advertising for lead generation and e-commerce — built on audience targeting, creative testing and clean conversion tracking.",
    heroPrimaryCta: { label: "Start a Conversation", href: "/contact" },
    heroSecondaryCta: {
      label: "Explore Social Media Marketing",
      href: "/growth-engine/social-media-marketing",
    },
    definitionHeading: "What Meta Ads management actually involves",
    definitionParagraphs: [
      "Meta's ad platform performs best when it has clear signals about who converts — which means pixel and Conversions API setup matters as much as the creative sitting on top of it.",
      "Creative is what a Meta campaign is judged on in the first two seconds, but targeting and offer decide whether that attention turns into a lead or a sale.",
      "We treat both as equally important, rather than optimising one and hoping the other holds up.",
    ],
    coverageHeading: "What we manage",
    coverage: [
      { title: "Audience Targeting", body: "Custom audiences, lookalikes and interest-based targeting matched to your actual customer profile." },
      { title: "Creative Testing", body: "Multiple ad variations tested against each other, so decisions are based on performance, not preference." },
      { title: "Advantage+ Campaigns", body: "Meta's automated campaign types, configured with the right inputs rather than left on default settings." },
      { title: "Retargeting", body: "Sequenced messaging for people who engaged but didn't convert." },
      { title: "Lead Generation Campaigns", body: "Instant forms and landing-page campaigns built for qualified enquiries." },
      { title: "E-commerce Campaigns", body: "Catalogue and dynamic product ads for online stores." },
    ],
    approachHeading: "How we approach Meta Ads",
    approachParagraphs: [
      "We set up the pixel and Conversions API correctly before spending on ads, so Meta's system optimises toward real conversions.",
      "Every campaign runs with more than one creative angle, tested against a defined audience.",
      "Winning creative gets more budget; underperforming variations are cut early rather than left running out of habit.",
      "We report on cost per qualified lead or purchase, not just cost per click.",
    ],
    whyHeading: "Why Shri Pro Craft",
    whyPoints: [
      { title: "Creative and targeting, together", body: "Neither is optimised in isolation — a strong audience with weak creative underperforms just as much as the reverse." },
      { title: "Tracking set up properly", body: "Pixel and Conversions API implementation is checked, not assumed." },
      { title: "Reporting tied to real outcomes", body: "Cost per qualified lead or sale, not just clicks and reach." },
    ],
    faqs: [
      {
        question: "Do you write and design the ad creative, or do I need to supply it?",
        answer: "We can do both. If you have brand assets, we work within them; if not, we develop creative as part of the campaign.",
      },
      {
        question: "Is Meta Ads better than Google Ads for my business?",
        answer:
          "It depends on how your customers search and browse. Some businesses do better on one channel; many need both, working together.",
      },
      {
        question: "Can you run Meta Ads for e-commerce catalogues?",
        answer: "Yes — catalogue setup, dynamic product ads and retargeting for online stores are part of what we manage.",
      },
    ],
    relatedSlugs: ["performance-marketing", "social-media-marketing", "google-ads"],
  },

  seo: {
    slug: "seo",
    navLabel: "SEO",
    metaTitle: "SEO Services & SEO Agency in Coimbatore | Shri Pro Craft",
    metaDescription:
      "SEO services covering technical SEO, on-page optimisation, local search and content strategy for businesses in Coimbatore that want lasting organic visibility.",
    eyebrow: "Growth Engine · SEO",
    h1: "SEO built to hold up after the first ranking",
    heroSubhead:
      "We handle technical SEO, on-page optimisation, local search and content strategy — for businesses that want organic visibility that doesn't disappear with the next update.",
    heroPrimaryCta: { label: "Start a Conversation", href: "/contact" },
    heroSecondaryCta: {
      label: "Explore Performance Marketing",
      href: "/growth-engine/performance-marketing",
    },
    definitionHeading: "What SEO actually means, beyond keywords",
    definitionParagraphs: [
      "Search engine optimisation is the work of making a website easy for search engines to understand and easy for a person to trust once they land on it. A technically perfect page with weak content still won't rank, and strong content on a slow, broken site won't either.",
      "Coimbatore and Tamil Nadu searches often carry local intent even when the keyword doesn't say so directly. Getting that right is part of local SEO, not a separate discipline.",
      "SEO is also slower and more durable than paid advertising. It isn't a replacement for it — the two work best planned together.",
    ],
    coverageHeading: "What SEO work covers",
    coverage: [
      { title: "Technical SEO", body: "Site speed, crawlability, indexing and structured data — the groundwork search engines rely on." },
      { title: "On-Page SEO", body: "Titles, headings, internal linking and content structure aligned to search intent." },
      { title: "Keyword Research", body: "Identifying terms with real commercial relevance, not just search volume." },
      { title: "Content Strategy", body: "Planning pages and content around what your customers are actually searching for." },
      { title: "Local SEO", body: "Google Business Profile, local citations and location-relevant content for Coimbatore and Tamil Nadu searches." },
      { title: "Link Building & Digital PR", body: "Earning links that reflect genuine relevance and authority." },
    ],
    approachHeading: "How we approach SEO",
    approachParagraphs: [
      "We start with a technical and content audit — most SEO problems are fixable issues, not mysteries.",
      "Keyword research is filtered by commercial intent and realistic ranking opportunity, not just volume.",
      "Content is written for the person searching first, then structured so search engines can understand it.",
      "We track rankings and organic traffic together with actual leads or sales, since a ranking that doesn't convert isn't the goal.",
    ],
    whyHeading: "Why Shri Pro Craft",
    whyPoints: [
      { title: "Intent over volume", body: "Keywords are chosen for commercial relevance and realistic opportunity, not vanity search volume." },
      { title: "Technical groundwork first", body: "We fix the fundamentals before layering on content and links." },
      { title: "Reported against real outcomes", body: "Rankings and traffic are tracked alongside actual leads and sales." },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Meaningful movement usually takes a few months, and competitive terms take longer. We'll give you a realistic timeline based on your site and industry, not a fixed promise.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No credible agency can guarantee a specific ranking — search algorithms aren't something any agency controls. We can commit to the work being done properly and reported honestly.",
      },
      {
        question: "Is SEO worth it if I'm already running Google Ads?",
        answer:
          "Usually yes. Paid and organic serve different parts of the search results and different stages of buyer intent — running both, planned together, tends to outperform either alone.",
      },
    ],
    relatedSlugs: ["performance-marketing", "website-design-development", "social-media-marketing"],
  },

  "social-media-marketing": {
    slug: "social-media-marketing",
    navLabel: "Social Media Marketing",
    metaTitle: "Social Media Marketing Agency in Coimbatore | Shri Pro Craft",
    metaDescription:
      "Social media strategy, content planning and paid social management for brands that want a consistent presence and campaigns that support real business goals.",
    eyebrow: "Growth Engine · Social Media Marketing",
    h1: "Social media planned around a goal, not a posting schedule",
    heroSubhead:
      "We plan and manage organic and paid social — strategy, content and campaign execution — built to support actual business goals, not just a content calendar.",
    heroPrimaryCta: { label: "Start a Conversation", href: "/contact" },
    heroSecondaryCta: { label: "Explore Meta Ads", href: "/growth-engine/meta-ads" },
    definitionHeading: "What social media marketing actually covers",
    definitionParagraphs: [
      "Social media marketing covers two different jobs that often get treated as one: building an audience over time through organic content, and running paid campaigns that need to convert now. Both need a plan; neither works well as an afterthought.",
      "A consistent posting schedule isn't a strategy by itself. It needs a point of view, a format that suits the platform, and a reason for the audience to care.",
    ],
    coverageHeading: "What we manage",
    coverage: [
      { title: "Social Strategy", body: "Defining what each platform is actually for in your business, before deciding what to post." },
      { title: "Content Planning", body: "A structured calendar built around themes that suit your audience and industry." },
      { title: "Organic Social", body: "Content creation and community management across the platforms that matter for your business." },
      { title: "Paid Social", body: "Campaign management across Meta and other platforms, tied to defined goals.", href: "/growth-engine/meta-ads" },
      { title: "Creative Direction", body: "Visual and messaging direction that keeps content recognisable as yours." },
      { title: "Performance Measurement", body: "Tracking engagement and, where relevant, the leads or sales social activity produces." },
    ],
    approachHeading: "How we approach social media",
    approachParagraphs: [
      "We start by deciding what each platform needs to achieve — awareness, community, direct enquiries — rather than posting the same content everywhere.",
      "Content is planned in batches around themes relevant to your industry and audience.",
      "Paid social sits inside the same tracking and reporting as the rest of your Growth Engine, not as a separate line item.",
    ],
    whyHeading: "Why Shri Pro Craft",
    whyPoints: [
      { title: "Strategy before content calendar", body: "We define the platform's job before deciding what gets posted." },
      { title: "Organic and paid working together", body: "The two are planned as one system, not managed separately." },
      { title: "Measured against business goals", body: "Engagement is tracked, but so is what it produces commercially, where relevant." },
    ],
    faqs: [
      {
        question: "Which platforms should my business focus on?",
        answer: "It depends on where your customers actually spend time and what you're selling. We'll recommend platforms based on that, not a general rule.",
      },
      {
        question: "Do you handle content creation, or just management?",
        answer: "Both. We can plan, create and publish content, or work alongside an in-house team depending on what you need.",
      },
      {
        question: "Can social media marketing generate leads directly?",
        answer: "Yes, particularly when paid social is set up for lead generation with the right targeting and offer. Organic content tends to support that rather than replace it.",
      },
    ],
    relatedSlugs: ["meta-ads", "branding-creative", "performance-marketing"],
  },

  "lead-generation": {
    slug: "lead-generation",
    navLabel: "Lead Generation",
    metaTitle: "Lead Generation Agency in Coimbatore | Shri Pro Craft",
    metaDescription:
      "B2B and local lead generation — landing pages, funnels, CRM workflows and cold outreach — built to produce leads your sales team can actually work.",
    eyebrow: "Growth Engine · Lead Generation",
    h1: "Leads a sales team can actually work",
    heroSubhead:
      "We build the landing pages, funnels, outreach sequences and CRM workflows that turn interest into qualified leads — not just form fills that go nowhere.",
    heroPrimaryCta: { label: "Start a Conversation", href: "/contact" },
    heroSecondaryCta: {
      label: "Explore Website Design & Development",
      href: "/growth-engine/website-design-development",
    },
    definitionHeading: "What a lead generation system actually needs to do",
    definitionParagraphs: [
      "A lead generation system is judged by what happens after the form is submitted, not just how many forms get submitted. A high volume of unqualified leads usually costs a business more, in sales time, than a smaller number of the right ones.",
      "For B2B and considered purchases especially, the funnel, the follow-up sequence and the CRM handoff matter as much as the traffic source.",
    ],
    coverageHeading: "What we build",
    coverage: [
      { title: "B2B Lead Generation", body: "Funnels and outreach built around longer sales cycles and multiple decision-makers." },
      { title: "Landing Pages", body: "Pages built for a single action, matched to the traffic source and offer.", href: "/growth-engine/website-design-development" },
      { title: "Lead Funnels", body: "The sequence from first click to qualified conversation, mapped and built deliberately." },
      { title: "CRM Workflows", body: "Lead routing, scoring and follow-up automation so enquiries don't sit unanswered." },
      { title: "Cold Outreach", body: "Structured email and outreach sequences for direct B2B prospecting." },
      { title: "Webinar & Event Funnels", body: "Registration, reminder and follow-up sequences for events used as a lead source." },
    ],
    approachHeading: "How we approach lead generation",
    approachParagraphs: [
      "We define what a qualified lead looks like for your business before building anything, so the system produces that, not just volume.",
      "Landing pages and forms are matched to the offer and the traffic source they're built for.",
      "Follow-up is automated where it should be and left to a human where a human closes better.",
      "We track lead quality alongside lead volume, since the two don't always move together.",
    ],
    whyHeading: "Why Shri Pro Craft",
    whyPoints: [
      { title: "Qualified over volume", body: "We define and optimise for what a good lead actually looks like for your business." },
      { title: "Full funnel, not just the ad", body: "Landing page, form, follow-up and CRM handoff are built as one system." },
      { title: "CRM and follow-up included", body: "Leads are routed and followed up on, not left waiting in an inbox." },
    ],
    faqs: [
      {
        question: "What counts as a 'qualified' lead?",
        answer: "It depends on your business — we define this with you upfront, based on budget, authority, need and timing, rather than a generic checklist.",
      },
      {
        question: "Do you handle outreach as well as inbound leads?",
        answer: "Yes, for B2B businesses where structured outreach makes sense alongside inbound campaigns.",
      },
      {
        question: "Will this integrate with our existing CRM?",
        answer: "In most cases, yes. We'll review what you're using before recommending a workflow.",
      },
    ],
    relatedSlugs: ["performance-marketing", "website-design-development", "google-ads"],
  },

  "website-design-development": {
    slug: "website-design-development",
    navLabel: "Website Design & Development",
    metaTitle: "Website Design & Development Agency in Coimbatore | Shri Pro Craft",
    metaDescription:
      "Conversion-focused website design and development — built to move visitors toward a decision, not just describe the business.",
    eyebrow: "Growth Engine · Website Design & Development",
    h1: "A website should move people toward a decision",
    heroSubhead:
      "We design and build business websites, landing pages and e-commerce sites meant to convert — not just explain what you do.",
    heroPrimaryCta: { label: "Start a Conversation", href: "/contact" },
    heroSecondaryCta: {
      label: "Explore Performance Marketing",
      href: "/growth-engine/performance-marketing",
    },
    definitionHeading: "What a conversion-focused website actually is",
    definitionParagraphs: [
      "Most business websites are written and designed to describe the company. A conversion-focused website is written and designed to move a specific visitor toward a specific action — an enquiry, a call, a purchase.",
      "That difference shows up in structure, not just visual design: what's said first, what's asked of the visitor, and how much friction sits between interest and action.",
    ],
    coverageHeading: "What we build",
    coverage: [
      { title: "Website Design", body: "Layout and visual design built around how visitors actually read and decide." },
      { title: "Website Development", body: "Fast, reliable builds — from marketing sites to more complex web applications." },
      { title: "Business Websites", body: "Sites that establish credibility and make services clear within seconds." },
      { title: "Conversion-Focused Websites", body: "Pages structured around one primary action, with everything else supporting it." },
      { title: "Landing Pages", body: "Standalone pages built to match a specific campaign, offer or audience." },
      { title: "E-commerce Websites", body: "Online stores built for a smooth path from product to checkout." },
    ],
    approachHeading: "How we approach a website build",
    approachParagraphs: [
      "We start with what the site needs to achieve commercially, not with a template.",
      "Every page has one primary action; competing calls-to-action get cut.",
      "Performance and mobile experience are treated as part of the design brief, not a technical afterthought.",
      "Where a site is receiving paid traffic, we build with the tracking that campaign will need already in place.",
    ],
    whyHeading: "Why Shri Pro Craft",
    whyPoints: [
      { title: "Commercial purpose first", body: "Every layout decision is made against what the page needs to achieve." },
      { title: "Built for how visitors behave", body: "Structure follows real reading and decision patterns, not a template." },
      { title: "Performance as a requirement", body: "Speed and mobile experience are part of the brief, not a trade-off." },
    ],
    faqs: [
      {
        question: "How long does a website project take?",
        answer:
          "It depends on scope — a focused landing page can move quickly; a full business site or e-commerce build takes longer. We'll give you a realistic timeline before starting.",
      },
      {
        question: "Will the website be built for SEO from the start?",
        answer: "Yes — clean structure, proper headings and technical SEO fundamentals are part of every build, not an add-on.",
      },
      {
        question: "Can you redesign an existing website instead of starting from scratch?",
        answer: "Yes, and in many cases that's the better option if the existing structure and content have value worth keeping.",
      },
    ],
    relatedSlugs: ["seo", "lead-generation", "branding-creative"],
  },

  "branding-creative": {
    slug: "branding-creative",
    navLabel: "Branding & Creative",
    metaTitle: "Branding & Creative Agency in Coimbatore | Shri Pro Craft",
    metaDescription:
      "Brand strategy, identity and campaign creative that supports performance marketing — built to keep a business recognisable as it grows.",
    eyebrow: "Growth Engine · Branding & Creative",
    h1: "Creative that supports the numbers, not just the mood board",
    heroSubhead:
      "We develop brand identity, visual direction and campaign creative that supports performance marketing — built to keep a business recognisable as its advertising scales.",
    heroPrimaryCta: { label: "Start a Conversation", href: "/contact" },
    heroSecondaryCta: {
      label: "Explore Social Media Marketing",
      href: "/growth-engine/social-media-marketing",
    },
    definitionHeading: "Where branding fits inside performance marketing",
    definitionParagraphs: [
      "Branding and creative sit inside the Growth Engine rather than above it. Good creative earns attention; performance marketing is what turns that attention into a customer.",
      "A distinct, consistent identity also makes every other channel more efficient — recognisable ads are easier to work with, and a consistent look builds trust faster across touchpoints.",
    ],
    coverageHeading: "What we work on",
    coverage: [
      { title: "Brand Strategy", body: "Positioning and messaging that's specific enough to be useful, not a generic mission statement." },
      { title: "Brand Identity", body: "Logo, colour, typography and visual system built to be used consistently across channels." },
      { title: "Visual Identity", body: "The practical assets — templates, guidelines and formats — that keep execution consistent." },
      { title: "Creative Direction", body: "A consistent point of view across ads, social and website creative." },
      { title: "Campaign Creative", body: "Assets built for specific campaigns, sized and adapted for each platform." },
      { title: "Marketing Creatives", body: "Ongoing creative production for ads, social and web as campaigns run." },
    ],
    approachHeading: "How we approach branding and creative",
    approachParagraphs: [
      "We start with positioning — what the business does differently, and for whom — before any visual work begins.",
      "Identity work is built to be usable across ads, social and web from day one, not delivered as a static brand book.",
      "Creative for paid campaigns is tested and iterated the same way performance marketing is, rather than treated as untouchable once approved.",
    ],
    whyHeading: "Why Shri Pro Craft",
    whyPoints: [
      { title: "Positioning before visuals", body: "We define what makes the business different before designing how it looks." },
      { title: "Built for how it's used", body: "Identity work is designed for ads, social and web from the outset." },
      { title: "Creative treated as testable", body: "Campaign creative is iterated against performance, not left fixed." },
    ],
    faqs: [
      {
        question: "Do I need a full rebrand, or just campaign creative?",
        answer: "Not always a full rebrand — we'll tell you honestly if your existing identity is solid enough to build campaigns on top of.",
      },
      {
        question: "Can you work within our existing brand guidelines?",
        answer: "Yes. We can also help build guidelines if they don't exist yet or have become inconsistent over time.",
      },
      {
        question: "Is branding necessary if I mainly care about performance marketing?",
        answer:
          "A weak or inconsistent identity usually makes performance marketing less efficient, since recognisability affects how quickly people trust an ad enough to act on it.",
      },
    ],
    relatedSlugs: ["social-media-marketing", "website-design-development", "performance-marketing"],
  },
};

export const serviceOrder = [
  "performance-marketing",
  "google-ads",
  "meta-ads",
  "seo",
  "social-media-marketing",
  "lead-generation",
  "website-design-development",
  "branding-creative",
];

export const serviceList = serviceOrder.map((slug) => services[slug]);
