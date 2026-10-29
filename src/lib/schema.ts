import { site } from "./site";

/** Real, published profile URLs only. The Discord entry is a server invite
 *  link rather than a profile page, so it is not asserted as sameAs. */
const sameAs = Object.entries(site.social)
  .filter(([key]) => key !== "discord")
  .map(([, url]) => url);

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.streetAddress,
  addressLocality: site.locality,
  postalCode: site.postalCode,
  addressRegion: site.region,
  addressCountry: site.country,
};

/** /logo-v2.png is the real brand asset served from public/ (900×302). */
const logo = {
  "@type": "ImageObject",
  "@id": `${site.url}/#logo`,
  url: `${site.url}/logo-v2.png`,
  contentUrl: `${site.url}/logo-v2.png`,
  width: 900,
  height: 302,
  caption: site.name,
};

/** @id #organization — the publisher entity itself. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    logo,
    image: { "@id": `${site.url}/#logo` },
    email: site.email,
    telephone: site.phone.schema,
    address: postalAddress,
    sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone.schema,
        email: site.email,
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.growthEmail,
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    ],
  };
}

/** @id #business — the business as a place/service with location and offerings. */
export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    // Same real business as #organization — linked, not a second company.
    parentOrganization: { "@id": `${site.url}/#organization` },
    image: { "@id": `${site.url}/#logo` },
    telephone: site.phone.schema,
    email: site.email,
    address: postalAddress,
    sameAs,
    areaServed: [
      { "@type": "City", name: site.locality },
      { "@type": "State", name: site.region },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Performance Marketing",
      "Google Ads",
      "Meta Ads",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Lead Generation",
      "Website Design and Development",
      "Branding and Creative",
    ],
  };
}

/** @id #website — publisher references the Organization entity above. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

/** @id #webpage — the homepage entity: isPartOf the WebSite, about the ProfessionalService. */
export function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: `${site.url}/`,
    name: site.name,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#business` },
  };
}

export function serviceSchema({
  name,
  description,
  path,
  id,
  serviceType,
}: {
  name: string;
  description?: string;
  path: string;
  id?: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    ...(id ? { "@id": id } : {}),
    serviceType: serviceType ?? name,
    name,
    ...(description ? { description } : {}),
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: [site.locality, site.region, "India"],
  };
}

/** A page's own WebPage entity — about references the given entity, and
 *  optionally isPartOf the site-wide WebSite. */
export function serviceWebPageSchema({
  path,
  name,
  serviceId,
  isPartOfWebsite = false,
}: {
  path: string;
  name: string;
  serviceId: string;
  isPartOfWebsite?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    ...(isPartOfWebsite ? { isPartOf: { "@id": `${site.url}/#website` } } : {}),
    about: { "@id": serviceId },
  };
}

/** A listing/hub page — isPartOf the WebSite, about the Organization.
 *  Also covers page-type variants (e.g. AboutPage) that share this exact
 *  shape via the optional `type` param. */
export function collectionPageSchema({
  path,
  name,
  description,
  type = "CollectionPage",
  itemListId,
}: {
  path: string;
  name: string;
  description?: string;
  type?: string;
  /** @id of an ItemList emitted on the same page (see itemListSchema). */
  itemListId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    ...(description ? { description } : {}),
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    ...(itemListId ? { mainEntity: { "@id": itemListId } } : {}),
  };
}

/** An ordered list of the real items a hub page visibly presents. Items with
 *  no URL or name are dropped so no empty entries are ever emitted. */
export function itemListSchema({
  id,
  items,
}: {
  id: string;
  items: { name: string; path?: string }[];
}) {
  const valid = items.filter((item) => item.name);
  if (!valid.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": id,
    numberOfItems: valid.length,
    itemListElement: valid.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { url: `${site.url}${item.path}` } : {}),
    })),
  };
}

/** An individual case study — creator references the Organization. `about`
 *  must be real, verified text already written for that project (e.g. its
 *  objective), never a synthesized claim or metric. */
export function projectCreativeWorkSchema({
  path,
  name,
  about,
  image,
}: {
  path: string;
  name: string;
  about: string;
  /** Site-relative path of the project's real cover image. */
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${site.url}${path}#project`,
    name,
    url: `${site.url}${path}`,
    creator: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    about,
    ...(image ? { image: `${site.url}${image}` } : {}),
    mainEntityOfPage: { "@id": `${site.url}${path}#webpage` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[], id?: string) {
  // Default id: the breadcrumb of the last (current) page, "<url>#breadcrumb".
  const last = items[items.length - 1]?.path ?? "/";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": id ?? `${site.url}${last}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[], path?: string) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(path ? { "@id": `${site.url}${path}#faq` } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** The contact page as a single @graph: the ContactPage entity, the
 *  business's contact point and the breadcrumb, cross-referenced by @id.
 *  Contact details come from site.ts — the site's one canonical, verified
 *  source — so the markup always matches what the page displays. */
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${site.url}/contact/#webpage`,
        url: `${site.url}/contact/`,
        name: "Contact Shri Pro Craft | Performance Marketing Agency in Coimbatore",
        description:
          "Get in touch with Shri Pro Craft for performance marketing, Google Ads, Meta Ads, SEO, AI automation, custom web applications and other digital growth services.",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#organization` },
        breadcrumb: { "@id": `${site.url}/contact/#breadcrumb` },
      },
      {
        "@type": "ContactPoint",
        "@id": `${site.url}/contact/#contactpoint`,
        contactType: "customer service",
        telephone: site.phone.schema,
        email: site.growthEmail,
        areaServed: [site.locality, site.region, "India"],
        availableLanguage: ["English", "Tamil"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/contact/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${site.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: `${site.url}/contact/`,
          },
        ],
      },
    ],
  };
}
