import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { HomeFaq } from "@/components/sections/HomeFaq";
import {
  GrowthEngineOverview,
  PerformanceFocus,
  WhyShriProCraft,
  FeaturedProjectsPreview,
  ExecutionModelPreview,
  IndustriesPreview,
  AboutPreview,
  FinalCTA,
} from "@/components/sections/HomeSections";

export const metadata: Metadata = buildMetadata({
  title: "Performance Marketing Agency in Coimbatore | Shri Pro Craft",
  description:
    "Shri Pro Craft is a performance marketing agency in Coimbatore running paid acquisition, SEO and conversion systems for businesses that need measurable customer growth.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema()} />
      <Hero />
      <GrowthEngineOverview />
      <PerformanceFocus />
      <WhyShriProCraft />
      <FeaturedProjectsPreview />
      <ExecutionModelPreview />
      <IndustriesPreview />
      <AboutPreview />
      <Testimonials />
      <HomeFaq />
      <FinalCTA />
    </>
  );
}
