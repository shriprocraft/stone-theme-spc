import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const content = services["lead-generation"];

export const metadata: Metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/growth-engine/lead-generation",
});

export default function Page() {
  return <ServicePageTemplate content={content} completeSchema webPageTitle="Lead Generation Services" />;
}
