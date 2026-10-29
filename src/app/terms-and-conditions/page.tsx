import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceWebPageSchema } from "@/lib/schema";
import { LegalPage } from "@/components/sections/LegalPage";
import { termsAndConditions } from "@/lib/content/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | Shri Pro Craft",
  description:
    "The terms and conditions governing access to and use of the Shri Pro Craft website, products, and services.",
  path: "/terms-and-conditions",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceWebPageSchema({
          path: "/terms-and-conditions/",
          name: "Terms & Conditions | Shri Pro Craft",
          serviceId: `${site.url}/#organization`,
          isPartOfWebsite: true,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-and-conditions/" },
        ])}
      />
      <LegalPage document={termsAndConditions} />
    </>
  );
}
