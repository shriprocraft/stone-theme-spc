# SEO Schema Validation — Shri Pro Craft

## How to run

```
npm run build            # static export to out/
npm run validate:schema  # checks the rendered HTML in out/
node scripts/validate-schema.mjs http://localhost:3000   # or against a running server
```

The project has no unit-test runner, so `scripts/validate-schema.mjs` (dependency-free) is the test suite. It reads the **rendered HTML**, not the TypeScript objects.

## Checks performed per route (31 routes)

1. Page renders; canonical link equals `https://shriprocraft.com<route>`.
2. At least one JSON-LD script in the initial HTML; every script parses as JSON and has `@context: https://schema.org`.
3. No `null`/`undefined`/`NaN`/empty strings; no `example.com`, `lorem`, `TODO`, `localhost`, `placeholder`, `staging`; no `http://`; no non-canonical host; no `mailto:` inside email fields.
4. Every entity has an `@id` on the canonical host; same-`@id` entities never disagree on a property; every `{"@id": ...}` reference resolves inside the page's graph.
5. The expected page-level type exists with a matching `url` (WebPage / AboutPage / ContactPage / CollectionPage / Service / CreativeWork).
6. BreadcrumbList positions run 1..n, start at Home and end at the page's canonical URL.
7. Every Service has `provider` = the canonical Organization.
8. No `aggregateRating`, `review`, `offers` or `priceRange` anywhere.

Site-level: exactly one Organization with name, url, logo, description, address, sameAs (no duplicates), contactPoint, email and telephone, matching `src/lib/site.ts`; WebSite publisher is the Organization and has no SearchAction (the site has no search). The sitemap lists every discovered route and nothing else, with no `lastmod`.

## Results (actually run)

| Run | Result |
|---|---|
| `validate-schema.mjs` against the dev server | 31/31 routes rendered and checked; all checks pass (after the fixes below) |
| Production build (`next build --webpack`, in a temporary copy of the project) | succeeded: 31 pages plus `/sitemap.xml` prerendered |
| `validate-schema.mjs` against that build's `out/` | 31/31 routes; all checks pass |
| `tsc --noEmit`; `eslint` on the changed files | no errors |

Entity counts across the 31 pages: Organization 31, ImageObject 31, ProfessionalService 31, WebSite 31, WebPage 26, BreadcrumbList 30, Service 20, FAQPage 8, CollectionPage 3, ItemList 3, CreativeWork 2, AboutPage 1, ContactPage 1, ContactPoint 1. Site-wide entities repeat once per page by design, with the same `@id` and identical content.

### Problems the validator found, and the fixes
- 8 FAQPage entities had no `@id` -> added `<url>#faq`.
- The checker first flagged `#logo` as a dangling reference. The logo is declared nested inside `Organization.logo`, which is valid JSON-LD, so the checker was taught to register nested entities that carry an `@id`.

## Not done / needs external verification

- **Google Rich Results Test and validator.schema.org were not run** (no public URL reachable from this environment). Run both on the deployed site. `CollectionPage`, `ItemList` and `CreativeWork` are valid Schema.org but do not produce Google rich results.
- The production build used `--webpack` because Turbopack rejected the junctioned `node_modules` of the temporary copy. The project's own `npm run build` (Turbopack) was not run in the live folder, to avoid overwriting the existing `out/` while the dev server runs. Run it before deploying.
- Whole-repo `npm run lint` was not run; the changed files were linted.
- Nothing here guarantees rankings or rich results.
