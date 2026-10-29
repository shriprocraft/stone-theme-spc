import {
  ArrowRight,
  Briefcase,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  MousePointerClick,
  Share2,
  ShoppingBag,
  SlidersHorizontal,
  Store,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoTile } from "@/components/ui/bento";
import { GrowthEngineGrid } from "@/components/sections/GrowthEngineGrid";
import { executionStages } from "@/lib/content/execution-model";
import { industries } from "@/lib/content/industries";

export function PositioningStatement() {
  return (
    <section className="section-tight">
      <Container>
          <p className="heading-1 mx-auto max-w-[22ch] text-center">
            Most agencies sell channels. We build one connected system.
          </p>
          <p className="body-lg mx-auto mt-6 max-w-[58ch] text-center text-grey">
            Paid media, search, your website and your data working from the
            same numbers — not three vendors comparing notes over email.
          </p>
      </Container>
    </section>
  );
}

export function GrowthEngineOverview() {
  return (
    <section className="section bg-surface">
      <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="label mb-4">The Growth Engine</p>
            <h2 className="heading-1">Nine services. One system.</h2>
            <p className="body-lg mt-5 text-grey">
              We call our service umbrella the Growth Engine because that's
              what it's built to be — a set of connected parts, not a list of
              things an agency happens to offer.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href="/growth-engine" variant="secondary">
                Explore the Growth Engine
              </Button>
            </div>
          </div>

        <div className="mt-12">
          <GrowthEngineGrid />
        </div>
      </Container>
    </section>
  );
}

export function PerformanceFocus() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="label mb-4">The core of it</p>
              <h2 className="heading-1">
                Performance marketing is the part that has to work.
              </h2>
              <p className="body-lg mt-5 text-grey">
                Everything else in the Growth Engine — branding, content,
                social — supports this: paid acquisition and search visibility
                managed as one system, with tracking accurate enough to make
                real decisions on.
              </p>
              <div className="mt-8">
                <Button href="/growth-engine/performance-marketing" variant="ghost">
                  Explore Performance Marketing
                </Button>
              </div>
            </div>

            {/* Bento tiles — Google Ads is the elevated hero card, matching
                the Growth Engine grid's white-among-grey rhythm. */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <BentoTile
                hero
                centered
                icon={Target}
                iconImage="/services/google-ads.webp"
                title="Google Ads"
                body="Search, Shopping, Performance Max, YouTube"
              />
              <BentoTile
                icon={Share2}
                iconImage="/services/meta-ads.webp"
                title="Meta Ads"
                body="Facebook and Instagram, tested by creative"
              />
              <BentoTile
                icon={MousePointerClick}
                iconImage="/industries-icons/tracking.webp"
                title="Tracking"
                body="Conversion accuracy before scaling spend"
              />
              <BentoTile
                icon={SlidersHorizontal}
                iconImage="/industries-icons/optimisation.webp"
                title="Optimisation"
                body="Landing pages tested, not just built once"
              />
            </div>
        </div>
      </Container>
    </section>
  );
}

export function WhyShriProCraft() {
  const points = [
    {
      title: "One team across channels",
      body: "Search, social and your website are managed by the same team, working from the same conversion data.",
      image: "/why/why-team.webp",
      size: [540, 420],
      alt: "Stone figures of a team connected to Instagram, Facebook, Google, LinkedIn and YouTube",
      wide: true,
    },
    {
      title: "Tracking before spend",
      body: "We confirm conversion tracking is accurate before scaling budget, so decisions are based on real numbers.",
      image: "/why/why-tracking.webp",
      size: [600, 415],
      alt: "Stone magnifying glass over a growth chart, bar graph and rupee coin",
      wide: false,
    },
    {
      title: "Direct communication",
      body: "You talk to the people doing the work, not an account manager relaying messages.",
      image: "/why/why-chat.webp",
      size: [545, 410],
      alt: "Stone chat bubbles with glowing blue typing dots",
      wide: false,
    },
    {
      title: "Coimbatore rooted, work that travels",
      body: "Based in Coimbatore, working with businesses across Tamil Nadu, India and select international markets.",
      image: "/why/why-roots.webp",
      size: [670, 400],
      alt: "Stone South Indian temple tower with a location pin and palm trees",
      wide: true,
    },
  ] as const;

  return (
    <section className="section bg-surface">
      <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <p className="label mb-4">Why Shri Pro Craft</p>
            <h2 className="heading-1">How we're different to work with</h2>
          </div>

        {/* Same bento rhythm as before: wide + tile | tile + wide. Each card
            now pairs its 3D visual (left) with the copy (right). */}
        <BentoGrid cols={3} className="mt-14">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={
                "tile group flex flex-col gap-4 p-6 sm:p-7 " +
                (p.wide ? "sm:col-span-2 sm:flex-row sm:items-center sm:gap-7" : "lg:flex-row lg:items-center lg:gap-5")
              }
            >
              <img
                src={p.image}
                alt={p.alt}
                width={p.size[0]}
                height={p.size[1]}
                loading="lazy"
                decoding="async"
                draggable={false}
                className={
                  "h-auto shrink-0 object-contain drop-shadow-[0_14px_14px_rgba(70,50,25,0.18)] transition-transform duration-300 group-hover:scale-[1.03] " +
                  (p.wide ? "w-40 sm:w-[190px] lg:w-[230px]" : "w-36 lg:w-[112px] xl:w-[136px]")
                }
              />
              <div className="min-w-0">
                <h3 className={i === 0 ? "font-display text-lg font-medium text-ink" : "body-base font-medium text-ink"}>
                  {p.title}
                </h3>
                <p className="body-base mt-2 text-grey">{p.body}</p>
              </div>
            </div>
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}

export function FeaturedProjectsPreview() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[1.15fr_1fr] md:gap-10 lg:gap-20">
          {/* Transparent cut-out: only the island shows on the beige — no
              box, border or card. */}
          <img
            src="/proof-floating-island.webp"
            alt="A floating rock island carrying a windswept bonsai tree, ringed by metallic arcs and blue energy trails"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="mx-auto h-auto w-full max-w-[560px] object-contain md:max-w-none"
          />
          <div className="md:max-w-[480px]">
            <p className="label mb-4">Proof</p>
            <h2 className="heading-1">Featured Projects</h2>
            <p className="body-lg mt-5 max-w-[40ch] text-grey">
              Real work from real engagements — the business, the challenge,
              the strategy, and what was actually done. No invented numbers.
            </p>
            <div className="mt-8">
              <Button href="/featured-projects" variant="secondary" className="gap-5">
                See Our Work
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ExecutionModelPreview() {
  return (
    <section className="section bg-surface">
      <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="label mb-4">Execution Model</p>
            <h2 className="heading-1">How we work, stage by stage</h2>
          </div>

        {/* Bento grid of the six stages — numbered chips keep the
            step-by-step reading without the old carousel. */}
        <BentoGrid cols={3} className="mt-14">
          {executionStages.map((stage) => (
            <BentoTile
              key={stage.number}
              chip={stage.number}
              iconImage={`/stages/${stage.title.toLowerCase()}.webp`}
              title={stage.title}
              body={stage.summary}
            />
          ))}
        </BentoGrid>

        <div className="mt-10 flex justify-center">
          <Button href="/execution-model" variant="ghost">
            See How We Work
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* Icons for the industries bento — decorative mapping only; copy still
   comes from lib/content/industries. */
const industryIcons: Record<string, typeof Factory> = {
  "b2b-manufacturing": Factory,
  "ecommerce-d2c": ShoppingBag,
  "real-estate": Building2,
  education: GraduationCap,
  healthcare: HeartPulse,
  "professional-services": Briefcase,
  "local-businesses": Store,
};

export function IndustriesPreview() {
  return (
    <section className="section">
      <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="label mb-4">Who we work with</p>
            <h2 className="heading-1">Industries</h2>
          </div>

        {/* Bento tiles — one per industry, last tile spans two columns so
            the 4-column grid closes without holes. All link to the
            industries page exactly as the previous chips did. */}
        <BentoGrid cols={4} className="mt-12">
          {industries.map((industry, index) => (
            <BentoTile
              key={industry.slug}
              icon={industryIcons[industry.slug]}
              iconImage={`/industries-icons/${industry.slug}.webp`}
              title={industry.title}
              body={industry.summary}
              href="/industries"
              wide={index === industries.length - 1}
            />
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="section bg-surface">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-16">
            <div>
              <p className="label mb-4">About</p>
              <h2 className="heading-1">A small team that stays close to the work</h2>
              <p className="body-lg mt-5 text-grey">
                Shri Pro Craft is a Coimbatore-based performance marketing team.
                We work directly with the businesses we serve — no account
                layers, no briefs relayed through a middle person — and treat
                marketing as a system to be measured, not a creative exercise
                to be admired.
              </p>
              <div className="mt-7">
                <Button href="/about" variant="ghost">
                  About Shri Pro Craft
                </Button>
              </div>
            </div>

            {/* The cut-out is transparent in the file, so only the
                island shows on the section's beige — no box, border or shadow. */}
            <img
              src="/about-floating-island.webp"
              alt="A floating rock island carrying a windswept bonsai-style tree"
              width={1206}
              height={1105}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="mx-auto h-auto w-full max-w-[640px] max-lg:max-w-[480px]"
            />
        </div>
      </Container>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section">
      <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="display-2">Let's build something that grows.</h2>
            <p className="body-lg mt-5 text-grey">
              Tell us about your business and what you're trying to achieve —
              we'll tell you honestly whether we're a fit.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
            </div>
          </div>
      </Container>
    </section>
  );
}
