import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceWebPageSchema } from "@/lib/schema";
import { LegalPage } from "@/components/sections/LegalPage";
import { privacyPolicy } from "@/lib/content/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Shri Pro Craft",
  description:
    "How Shri Pro Craft collects, uses, discloses, stores, and safeguards personal information shared through our website and services.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceWebPageSchema({
          path: "/privacy-policy/",
          name: "Privacy Policy | Shri Pro Craft",
          serviceId: `${site.url}/#organization`,
          isPartOfWebsite: true,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ])}
      />
      <LegalPage document={privacyPolicy} />
    </>
  );
}
