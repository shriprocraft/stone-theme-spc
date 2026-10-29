export type GalleryImage = {
  src: string;
  alt: string;
  caption: string | string[];
};

// Ordered narrative sections rendered above the gallery on a case-study
// page. `services: true` renders the project's servicesUsed as chips;
// `bullets` is reserved for verifiable, platform-documented figures.
export type CaseStudySection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  services?: true;
};

export type Project = {
  slug: string;
  business: string;
  industry: string;
  // Narrative-style fields (challenge/strategy/execution case studies).
  // Optional — a gallery-style project (below) may omit these entirely.
  challenge?: string;
  objective?: string;
  strategy?: string;
  execution?: string;
  servicesUsed?: string[];
  outcome?: string;
  keyLearnings?: string;
  // Gallery-style fields (analytics-screenshot-driven case studies).
  // `summary` is exactly two lines.
  gallery?: GalleryImage[];
  summary?: [string, string];
  // Ordered case-study sections (Project Overview → … → Results) rendered
  // above the gallery. Content is derived from the project's own documented
  // material only — platform-reported metrics, never invented.
  caseStudy?: CaseStudySection[];
  // Card cover shown on the Featured Projects listing. Sourced from the
  // owner-supplied per-project decks only — never shared across projects.
  cover?: { src: string; alt: string };
  // Gallery images are mixed-shape page screenshots (heroes and tall full
  // pages): `uniform` crops each to the same top-anchored frame so the cards
  // line up. Analytics-dashboard galleries keep their natural height.
  galleryLayout?: "uniform";
};

// Case studies go here once an engagement has real, verifiable detail to
// show — no placeholder businesses, invented metrics or sample outcomes.
// Each entry should follow the Project shape above in full.
export const projects: Project[] = [
  {
    slug: "social-growth-engine",
    business: "Social Growth Engine",
    industry: "Social Media Marketing",
    servicesUsed: ["Social Media Marketing"],
    cover: {
      src: "/projects/social-growth-engine/cover.jpg",
      alt: "Meta Business Suite insights showing 886K+ Views, 418K+ Reach, Content interactions and 6.2K+ Link clicks for the Social Growth Engine campaign",
    },
    gallery: [
      {
        src: "/projects/social-growth-engine/sge-01.jpg",
        alt: "Meta Business Suite insights panel showing Views, Reach, Content interactions and Link clicks",
        caption: "886K+ Views | 418K+ Reach | +311.6K% Link Click Growth",
      },
      {
        src: "/projects/social-growth-engine/sge-02.jpg",
        alt: "Meta Business Suite insights panel showing Content interactions, Link clicks, Visits and Follows",
        caption: "6.2K+ Link Clicks (+311.6K%) | 4.9K+ Visits (+495.3%) | +3.3K% Content Interactions",
      },
      {
        src: "/projects/social-growth-engine/sge-03.jpg",
        alt: "Facebook content overview showing Views, Watch time and Content interactions",
        caption: "+7.5K% Watch Time | +326.7% Viewers | +158.3% Content Interactions",
      },
      {
        src: "/projects/social-growth-engine/sge-04.jpg",
        alt: "Instagram content overview showing Views, Reach and Content interactions",
        caption: "Achieved approximately 44.3K% in engagement rates.",
      },
      {
        src: "/projects/social-growth-engine/sge-05.jpg",
        alt: "Instagram account insights showing Views and audience breakdown by content type",
        caption: "46.4K+ Organic Views | Expanding Audience Reach | Consistent Content Performance",
      },
      {
        src: "/projects/social-growth-engine/sge-07.jpg",
        alt: "Instagram account insights donut chart showing Views and top content by views",
        caption: "+990.2% Account Reach Growth | 4.7K+ Views | 76.2% Reels Engagement Density",
      },
      {
        src: "/projects/social-growth-engine/sge-08.jpg",
        alt: "Instagram mobile app Views screen showing Accounts reached growth",
        caption: "32.6K+ Total Views | +5,020% Reach Growth | 98.6% New Audience Discovery",
      },
      {
        src: "/projects/social-growth-engine/sge-09.jpg",
        alt: "Meta insights four-panel view showing Views, Follows, Reach and Interactions",
        caption: "44.6K+ Views Delivered | 37.1K Reach Milestone | Exceptional New Audience Growth",
      },
      {
        src: "/projects/social-growth-engine/sge-10.jpg",
        alt: "Views and Viewers metrics panel showing total views and unique viewers",
        caption: "33.6K+ Total Views (+100%) | 25.0K+ Unique Viewers (+100%) | Fresh Campaign Traction",
      },
      {
        src: "/projects/social-growth-engine/sge-11.jpg",
        alt: "Views and Reach metrics panel showing total views and unique reach",
        caption: "33.9K+ Total Views (+9.1K%) | 27.1K+ Unique Reach (+56.3K%) | High-Velocity Campaign Momentum",
      },
      {
        src: "/projects/social-growth-engine/sge-12.jpg",
        alt: "Meta insights four-panel view showing Views, Follows, Visits and Interactions",
        caption: "45.3K+ Views Achieved | 36.5K+ Audience Reached | Exceptional Brand Visibility Growth",
      },
      {
        src: "/projects/social-growth-engine/sge-13.jpg",
        alt: "Meta insights four-panel view showing Views, Viewers, Content interactions and Link clicks",
        caption: [
          "695.1K+ Views (+14.6K%) | 498.1K+ Viewers (+42.1K%)",
          "3.3K+ Content Interactions (+1.9K%) | 162 Link Clicks (+5.3K%)",
        ],
      },
      {
        src: "/projects/social-growth-engine/sge-14.jpg",
        alt: "Meta insights four-panel view showing Views by platform, Reach, Content interactions and Link clicks",
        caption: [
          "1.1M+ Views (+2.3K%) across Facebook and Instagram | 614K+ Reach (+20.7K%)",
          "14.9K+ Content Interactions (+869.3%) | 4.6K+ Link Clicks (+100%)",
        ],
      },
      {
        src: "/projects/social-growth-engine/sge-15.jpg",
        alt: "Instagram Performance panel showing Views, Follows, Reach and Interactions for 5 July to 1 August 2026",
        caption: [
          "52.0K+ Views (+77.7%) | 41.3K+ Reach (+68.2%)",
          "192 Content Interactions (+35.2%), 78% from non-followers",
        ],
      },
      {
        src: "/projects/social-growth-engine/sge-16.jpg",
        alt: "Meta insights four-panel view showing Views by platform, Reach, Content interactions and Link clicks for June 2026",
        caption: [
          "38.6K+ Views (+513.5%) | 32.1K+ Reach (+504.2%)",
          "160 Content Interactions (+566.7%) | 23 Link Clicks (+109.1%)",
        ],
      },
      {
        src: "/projects/social-growth-engine/sge-17.jpg",
        alt: "Instagram Insights overview showing Views, Reach and Content interactions for 10 January to 30 March 2026",
        caption: [
          "47.2K+ Views (+26%) | 7.3K+ Reach (+239.8%)",
          "1.8K+ Content Interactions (+134.8%)",
        ],
      },
    ],
    summary: [
      "Social Growth Engine — A performance-driven social media growth campaign focused on increasing visibility, audience reach, engagement and content discovery.",
      "The campaign delivered significant growth across views, reach, link clicks, watch time and new-audience discovery through consistent content performance.",
    ],
    caseStudy: [
      {
        heading: "Project Overview",
        body: [
          "Social Growth Engine is a performance-driven social media growth campaign focused on increasing visibility, audience reach, engagement and content discovery. Planning, publishing and measurement ran across Facebook and Instagram, with Meta Business Suite insights as the single source of truth for every figure reported here.",
        ],
      },
      {
        heading: "Challenge",
        body: [
          "The account needed consistent, compounding growth rather than one-off spikes — views, reach, content interactions, link clicks and new-audience discovery all had to move together on a cadence the brand could sustain. Every number published about the campaign had to be verifiable against platform-reported insights, with no invented metrics.",
        ],
      },
      {
        heading: "Strategy",
        body: [
          "Growth was planned around platform-native formats — reels and short-form video first — published on a consistent schedule and measured window over window. Expanding reach into non-follower audiences was treated as the primary growth lever, with link clicks and profile visits as the commercial signals behind it.",
        ],
      },
      {
        heading: "Execution",
        body: [
          "Content was planned, published and reviewed against Meta insights in weekly loops. Formats that earned non-follower reach were scaled; underperforming ones were retired. Reporting windows tracked Views, Reach, Content Interactions, Link Clicks, Visits and Follows exactly as the platforms report them.",
        ],
      },
      {
        heading: "Services Delivered",
        services: true,
      },
      {
        heading: "Campaign Approach",
        body: [
          "An organic-first growth engine: reels-led content to feed discovery, consistent publishing to keep momentum, and insights-led iteration to compound reach. The headline was sustained content performance — not a single paid spike.",
        ],
      },
      {
        heading: "Results",
        bullets: [
          "1.1M+ views (+2.3K%) across Facebook and Instagram, with 614K+ reach (+20.7K%)",
          "886K+ views and 418K+ reach at campaign peak, with link click growth of +311.6K%",
          "14.9K+ content interactions (+869.3%) and 4.6K+ link clicks (+100%)",
          "4.9K+ profile visits (+495.3%) and +7.5K% watch time growth",
          "98.6% of the audience reached through new discovery — 32.6K+ total views with +5,020% reach growth in a single window",
        ],
      },
    ],
  },
  {
    slug: "google-ads",
    business: "Performance Marketing",
    industry: "Google Ads Marketing",
    servicesUsed: ["Google Ads"],
    cover: {
      src: "/projects/google-ads/cover.jpg",
      alt: "Google Ads campaign overview showing Impressions, Clicks, Average CPC and Cost for 14 May to 14 June 2025",
    },
    gallery: [
      {
        src: "/projects/google-ads/ga-01.jpg",
        alt: "Google Ads campaign overview showing Impressions, Clicks, Average CPC and Cost for 14 May to 14 June 2025",
        caption: [
          "118K+ Impressions (+106K) | 8.15K+ Clicks (+7.51K)",
          "₹1.23 Avg. CPC (−₹0.21) | ₹10.1K Cost (+₹9.14K)",
        ],
      },
      {
        src: "/projects/google-ads/ga-02.jpg",
        alt: "Google Ads campaign overview showing Impressions, Clicks, Conversions and Cost per conversion for 21 June to 20 July 2025",
        caption: [
          "150K+ Impressions (+79) | 7.55K+ Clicks (−1.32K)",
          "27.59 Conversions (+20.59) | ₹658 Cost/Conversion (−₹1.53K)",
        ],
      },
      {
        src: "/projects/google-ads/ga-03.jpg",
        alt: "Google Ads campaign groups overview showing two campaign groups with Clicks, Conversions, Cost per conversion and Cost for 22 September to 21 October 2025",
        caption: [
          "233 Clicks | 38.00 Conversions | $66.87 Cost/Conversion | $2.54K Cost",
          "610 Clicks | 81.00 Conversions | $59.19 Cost/Conversion | $4.79K Cost",
        ],
      },
    ],
    caseStudy: [
      {
        heading: "Project Overview",
        body: [
          "A Google Ads engagement focused on capturing existing search demand efficiently. Performance is documented through Impressions, Clicks, Average CPC, Conversions and Cost per Conversion across successive reporting windows, exactly as the platform reports them.",
        ],
      },
      {
        heading: "Challenge",
        body: [
          "Grow qualified click volume while pushing average CPC and cost per conversion down — scale and efficiency at the same time, not one at the expense of the other.",
        ],
      },
      {
        heading: "Google Ads Strategy",
        body: [
          "A search-led structure split into dedicated campaign groups, each with its own budget, targeting and conversion actions — so performance could be read and tuned per group instead of being averaged away at account level.",
        ],
      },
      {
        heading: "Campaign Setup",
        body: [
          "Campaign groups were built around distinct offers with separate budgets and bidding. Conversion tracking was wired in before any scaling, so every optimisation decision reads from documented conversions and cost per conversion rather than raw traffic.",
        ],
      },
      {
        heading: "Optimization",
        body: [
          "Bids, budgets and ad copy were refined window over window against three levers: impressions for coverage, clicks for intent, and cost per conversion for efficiency. The documented deltas show CPC and cost per conversion falling while volume climbed.",
        ],
      },
      {
        heading: "Services Delivered",
        services: true,
      },
      {
        heading: "Results",
        bullets: [
          "118K+ impressions (+106K) and 8.15K+ clicks (+7.51K) in the first documented window, at ₹1.23 average CPC (−₹0.21)",
          "150K+ impressions sustained in the following window, with 27.59 conversions (+20.59) at ₹658 cost per conversion (−₹1.53K)",
          "Campaign groups scaled to 843 combined clicks and 119 conversions in a later window",
          "Cost per conversion held at $66.87 and $59.19 across the two campaign groups as spend reached $2.54K and $4.79K",
        ],
      },
    ],
  },
  {
    slug: "website-development",
    business: "Website Development",
    industry: "Web Design & Development",
    servicesUsed: ["Website Development"],
    galleryLayout: "uniform",
    cover: {
      src: "/projects/website-development/cover.jpg",
      alt: "Dr. Balaji Jagan orthodontics website home page designed by Shri Pro Craft",
    },
    gallery: [
      {
        src: "/projects/website-development/wd-01.jpg",
        alt: "Dr. Balaji Jagan orthodontics website home page with Preventive Care, Precision Dentistry and Smile Restoration cards over a 3D tooth and stone scene",
        caption: "Dr. Balaji Jagan — Master in Orthodontics",
      },
      {
        src: "/projects/website-development/wd-03.jpg",
        alt: "Solvéa Architecture website page with hero, about us, why Solvéa, featured work, services and contact sections",
        caption: "Solvéa Architecture",
      },
      {
        src: "/projects/website-development/wd-05.jpg",
        alt: "AstraForge Systems website page with satellite hero, purpose statement, mission statistics and footer in a dark monochrome theme",
        caption: "AstraForge Systems",
      },
      {
        src: "/projects/website-development/wd-06.jpg",
        alt: "FreshBite healthy meal delivery website page with hero, menu, popular dishes, testimonials and footer",
        caption: "FreshBite",
      },
      {
        src: "/projects/website-development/wd-02.jpg",
        alt: "Dr. Balaji Jagan dental care website hero featuring a dental implant with Explore Treatments and Book Appointment actions",
        caption: "Dr. Balaji Jagan — Dental Care",
      },
      {
        src: "/projects/website-development/wd-04.jpg",
        alt: "Atelier Form villa design website page with services, approach, process, featured projects and testimonials",
        caption: "Atelier Form",
      },
      {
        src: "/projects/website-development/wd-07.jpg",
        alt: "Aeronest travel booking website page with flight search, flight deals, destinations and customer reviews",
        caption: "Aeronest",
      },
      {
        src: "/projects/website-development/wd-08.jpg",
        alt: "Terra Nova property intelligence website with desktop and mobile layouts showing featured rural properties and search",
        caption: "Terra Nova",
      },
      {
        src: "/projects/website-development/wd-09.jpg",
        alt: "Azure Wake private yacht charter website page with yacht collection, destinations, crew and charter enquiry sections",
        caption: "Azure Wake",
      },
      {
        src: "/projects/website-development/wd-10.jpg",
        alt: "Verdant Table plant-based meals website page with hero, meal plans, ingredients, blog and footer",
        caption: "Verdant Table",
      },
      {
        src: "/projects/website-development/wd-11.jpg",
        alt: "Northline Digital marketing agency website page with hero, services, results, testimonials and footer",
        caption: "Northline Digital",
      },
      {
        src: "/projects/website-development/wd-12.jpg",
        alt: "Golden Square premium service homes website hero in New Siddhapudur, Coimbatore with Enquire Now and View Living Spaces actions",
        caption: "Golden Square",
      },
      {
        src: "/projects/website-development/wd-13.jpg",
        alt: "Mitaren Agro marketplace website hero with fresh produce, product search and category navigation",
        caption: "Mitaren Agro",
      },
      {
        src: "/projects/website-development/wd-14.jpg",
        alt: "VitaNova healthcare innovation website page with hero, key products, awards and recognition",
        caption: "VitaNova",
      },
      {
        src: "/projects/website-development/wd-15.jpg",
        alt: "Allzon Shop website hero for premium digital art prints and photo frames",
        caption: "Allzon Shop",
      },
      {
        src: "/projects/website-development/wd-16.jpg",
        alt: "Aadhi Shakthi Expo 2026 exhibition portal hero with visitor registration form",
        caption: "Aadhi Shakthi Expo 2026",
      },
      {
        src: "/projects/website-development/wd-17.jpg",
        alt: "BGF Woods furniture manufacturer and exporter website hero with Request a Quote action",
        caption: "BGF Woods",
      },
    ],
  },
];
