import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const content = services["meta-ads"];

export const metadata: Metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/growth-engine/meta-ads",
});

export default function Page() {
  return <ServicePageTemplate content={content} completeSchema serviceName="Meta Ads Management" />;
}
