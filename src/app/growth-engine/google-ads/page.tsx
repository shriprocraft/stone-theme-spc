import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const content = services["google-ads"];

export const metadata: Metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/growth-engine/google-ads",
});

export default function Page() {
  return <ServicePageTemplate content={content} completeSchema serviceName="Google Ads Management" />;
}
