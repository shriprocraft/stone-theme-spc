import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const content = services["website-design-development"];

export const metadata: Metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/growth-engine/website-design-development",
});

export default function Page() {
  return (
    <ServicePageTemplate
      content={content}
      completeSchema
      serviceName="Website Design and Development"
      breadcrumbLabel="Website Design and Development"
    />
  );
}
