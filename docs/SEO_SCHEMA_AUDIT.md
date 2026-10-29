# SEO Schema Audit — Shri Pro Craft

Framework: Next.js 16 App Router, static export (`output: "export"`, `trailingSlash: true`).
Canonical host: `https://shriprocraft.com`, trailing slash. Canonicals come from `buildMetadata()` in `src/lib/seo.ts`.
All schema is built in `src/lib/schema.ts` and rendered server-side by `src/components/seo/JsonLd.tsx`.
Site-wide entities (Organization, ProfessionalService, WebSite) are emitted once from `src/app/layout.tsx`.

Audit method: every `page.tsx` on disk (dynamic `[project-slug]` expanded from `src/lib/content/projects.ts`) was rendered and its JSON-LD parsed. 31 routes.

## Route inventory

| Route | Page type | Indexable? | Canonical | Page-level schema (after this work) | Status |
|---|---|---|---|---|---|
| `/` | Home | yes | `/` | WebPage | done |
| `/about/` | About | yes | `/about/` | AboutPage, BreadcrumbList | done (breadcrumb @id added) |
| `/contact/` | Contact | yes | `/contact/` | ContactPage, ContactPoint, BreadcrumbList | done |
| `/execution-model/` | Process | yes | `/execution-model/` | WebPage, BreadcrumbList | done (breadcrumb @id added) |
| `/growth-engine/` | Hub | yes | `/growth-engine/` | CollectionPage + ItemList (10 services), BreadcrumbList | **ItemList added** |
| 8 template service pages: `/growth-engine/{performance-marketing, google-ads, meta-ads, seo, social-media-marketing, lead-generation, website-design-development, branding-creative}/` | Service | yes | self | Service, WebPage, BreadcrumbList, FAQPage (**@id added**) | done |
| `/growth-engine/ai-automation/` + 5 sub-pages | Service | yes | self | Service, WebPage, BreadcrumbList | done (breadcrumb @id added) |
| `/growth-engine/custom-web-apps-software/` + 5 sub-pages | Service | yes | self | Service, WebPage, BreadcrumbList | done (breadcrumb @id added) |
| `/industries/` | Hub | yes | `/industries/` | CollectionPage + ItemList (7 names), BreadcrumbList | **ItemList added** |
| `/featured-projects/` | Hub | yes | `/featured-projects/` | CollectionPage + ItemList (2 projects), BreadcrumbList | **ItemList added** |
| `/featured-projects/social-growth-engine/`, `/featured-projects/google-ads/` | Case study | yes | self | CreativeWork (**image, publisher, mainEntityOfPage added**), WebPage, BreadcrumbList | done |
| `/privacy-policy/`, `/terms-and-conditions/` | Legal | yes | self | WebPage, BreadcrumbList | done (breadcrumb @id added) |

Route families that do **not** exist in the project: individual industry pages, insights/blog, author pages, careers/jobs, pricing, location pages. No schema was created for them.

## Findings and what was done

| # | Finding | Action |
|---|---|---|
| 1 | Organization was thin: only name, url, email, phone. | Added description, logo (ImageObject, `/logo.png` 1604×431), postal address, `sameAs`, two ContactPoints. All values come from `src/lib/site.ts`. |
| 2 | `Organization` and `ProfessionalService` described the same business with duplicated contact data and no link. | `ProfessionalService` now has `parentOrganization` → `#organization` and shares logo/address/sameAs. Both kept: the `#business` @id is referenced by the home WebPage. |
| 3 | `email` was emitted as `mailto:` strings. | Now plain addresses. |
| 4 | Most BreadcrumbLists had no `@id`. | `breadcrumbSchema` defaults to `<page url>#breadcrumb`. |
| 5 | FAQPage had no `@id`. | `<service url>#faq`. |
| 6 | Hub pages had no ItemList. | Added to Growth Engine, Industries, Featured Projects, linked via `mainEntity`. |
| 7 | JSON-LD serialisation did not escape `<`. | `JsonLd` now escapes `<` and U+2028/2029. |
| 8 | Sitemap omitted 8 service pages, 10 sub-service pages and both case studies. | `src/app/sitemap.ts` now lists all 31 routes, derived from site/project data. |
| 9 | Sitemap stamped every URL with `lastModified: new Date()` (a new "modified" date on every build). | Removed; no page has a real modification date. |
| 10 | Duplicate/conflicting entities | None found: the same `@id` repeats across layout and page scripts only with identical values. |

## Information not available (deliberately not invented)

- Founder, founding date, team `Person` entities, awards, certifications.
- Opening hours, geo coordinates, ratings/reviews, prices/offers.
- Article/case-study publication and modification dates, authors.
- Discord is a server-invite link, not a profile, so it is excluded from `sameAs`.

## Outstanding issues (outside this task's scope — reported only)

1. **`/insights/` returns 404 but is linked** from the desktop nav and mobile menu. No Insights page or articles exist, so no Article schema is possible. Either build the page or remove the links.
2. **Case study `CreativeWork.about`** for "Performance Marketing" (`/featured-projects/google-ads/`) is just the project title, because the project record has no summary text. Add a real `summary` in `src/lib/content/projects.ts` to improve it.
3. **`src/lib/site.ts`** carries the comment "Replace with the real, verified business details before launch" beside the emails/phone. Confirm they are final; they are published in schema.
4. The `google-ads` case study URL still has its old slug although the title is now "Performance Marketing" (renamed at the owner's request; URL unchanged).
5. Industries have no per-industry URLs, so their ItemList carries names only.
6. `next.config.ts` has `typescript.ignoreBuildErrors: true`, so `next build` does not fail on type errors; `tsc --noEmit` was run separately.
