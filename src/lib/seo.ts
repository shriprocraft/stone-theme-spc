import type { Metadata } from "next";
import { site } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildMetadata({ title, description, path, ogImage }: PageSeo): Metadata {
  const url = `${site.url}${path}`;
  const image = ogImage ?? `${site.url}/og-default.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
