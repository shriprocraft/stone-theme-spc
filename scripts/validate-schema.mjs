#!/usr/bin/env node
/**
 * Structured-data checks against RENDERED HTML (not the TypeScript objects).
 *
 *   node scripts/validate-schema.mjs out                    # built static export
 *   node scripts/validate-schema.mjs http://localhost:3000  # running server
 *
 * Route list = every page.tsx on disk (dynamic [slug] routes expanded from
 * the case-study data) cross-checked against the sitemap.
 */
import fs from "node:fs";
import path from "node:path";

const SITE = "https://shriprocraft.com";
const target = process.argv[2] ?? "out";
const fromDisk = !/^https?:\/\//.test(target);

/* ---------- route discovery ---------- */
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === "page.tsx") out.push(p);
  }
  return out;
}
const projectSlugs = [...fs.readFileSync("src/lib/content/projects.ts", "utf8").matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]);
const routes = [];
for (const file of walk("src/app")) {
  const rel = "/" + path.relative("src/app", path.dirname(file)).split(path.sep).join("/");
  const route = rel === "/." ? "/" : rel;
  if (route.includes("[project-slug]")) projectSlugs.forEach((s) => routes.push(route.replace("[project-slug]", s) + "/"));
  else if (route.includes("[")) console.warn("! unhandled dynamic route", route);
  else routes.push(route === "/" ? "/" : route + "/");
}
routes.sort();

/* ---------- expected page-level type per route ---------- */
function expectedType(route) {
  if (route === "/") return "WebPage";
  if (route === "/about/") return "AboutPage";
  if (route === "/contact/") return "ContactPage";
  if (["/growth-engine/", "/featured-projects/", "/industries/"].includes(route)) return "CollectionPage";
  if (route.startsWith("/featured-projects/")) return "CreativeWork";
  if (route.startsWith("/growth-engine/")) return "Service";
  return "WebPage";
}

/* ---------- loading ---------- */
async function load(route) {
  if (fromDisk) {
    const file = path.join(target, route === "/" ? "index.html" : route, route === "/" ? "" : "index.html");
    return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
  }
  const res = await fetch(target.replace(/\/$/, "") + route);
  return res.ok ? res.text() : null;
}

const failures = [];
const fail = (route, msg) => failures.push(`${route}  ${msg}`);

/** Top-level nodes plus any nested object that declares its own @id and
 *  type (JSON-LD semantics: a nested node with an @id defines that entity). */
function nodesOf(blocks) {
  const out = [];
  const collect = (v, top) => {
    if (Array.isArray(v)) return v.forEach((x) => collect(x, false));
    if (!v || typeof v !== "object") return;
    if (top || (v["@id"] && v["@type"])) out.push(v);
    for (const [k, x] of Object.entries(v)) if (k !== "@context") collect(x, false);
  };
  for (const b of blocks) (b["@graph"] ? b["@graph"] : [b]).forEach((n) => collect(n, true));
  return out;
}
function scan(value, route, trail) {
  if (value === null || value === undefined) return fail(route, `null/undefined at ${trail}`);
  if (typeof value === "number" && !Number.isFinite(value)) return fail(route, `NaN/Infinity at ${trail}`);
  if (typeof value === "string") {
    if (/^(undefined|null|NaN)$/.test(value.trim()) || value.trim() === "") fail(route, `empty/placeholder string at ${trail}`);
    if (/example\.com|lorem|TODO|localhost|placeholder|staging/i.test(value)) fail(route, `placeholder text "${value.slice(0, 40)}" at ${trail}`);
    if (/^http:\/\//.test(value)) fail(route, `non-https URL at ${trail}: ${value}`);
    if (/^https:\/\/(www\.)?shriprocraft\.com/.test(value) && !value.startsWith(SITE)) fail(route, `non-canonical host at ${trail}: ${value}`);
    if (/@/.test(value) && value.startsWith("mailto:")) fail(route, `mailto: in email value at ${trail}`);
    return;
  }
  if (Array.isArray(value)) return value.forEach((v, i) => scan(v, route, `${trail}[${i}]`));
  if (typeof value === "object") for (const [k, v] of Object.entries(value)) scan(v, route, `${trail}.${k}`);
}

/* ---------- per-page checks ---------- */
let pagesChecked = 0;
const typeCounts = {};
for (const route of routes) {
  const html = await load(route);
  if (!html) { fail(route, "page not found / not rendered"); continue; }
  pagesChecked++;

  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) ?? [])[1];
  if (canonical !== SITE + route) fail(route, `canonical is ${canonical ?? "missing"}, expected ${SITE + route}`);

  const raw = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  if (!raw.length) { fail(route, "no JSON-LD in rendered HTML"); continue; }
  const blocks = [];
  raw.forEach((r, i) => { try { blocks.push(JSON.parse(r)); } catch (e) { fail(route, `script #${i} is not valid JSON: ${e.message}`); } });
  blocks.forEach((b, i) => { if (b["@context"] !== "https://schema.org") fail(route, `script #${i} missing/incorrect @context`); });

  const nodes = nodesOf(blocks);
  nodes.forEach((n) => { (Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]]).forEach((t) => { typeCounts[t] = (typeCounts[t] ?? 0) + 1; }); });
  blocks.forEach((b, i) => scan(b, route, `script#${i}`));

  // ids: unique per entity, no conflicting duplicates, all references resolve
  const byId = new Map();
  for (const n of nodes) {
    if (!n["@id"]) { if (n["@type"] !== "ContactPoint" && n["@type"] !== "ListItem") fail(route, `${n["@type"]} has no @id`); continue; }
    if (!n["@id"].startsWith(SITE + "/")) fail(route, `@id not on canonical host: ${n["@id"]}`);
    const prev = byId.get(n["@id"]);
    if (prev) {
      for (const k of Object.keys(n)) if (k in prev && JSON.stringify(prev[k]) !== JSON.stringify(n[k])) fail(route, `conflicting duplicate ${n["@id"]} on "${k}"`);
    } else byId.set(n["@id"], n);
  }
  (function refs(v, trail) {
    if (Array.isArray(v)) return v.forEach((x, i) => refs(x, `${trail}[${i}]`));
    if (v && typeof v === "object") {
      const keys = Object.keys(v);
      if (keys.length === 1 && keys[0] === "@id" && !byId.has(v["@id"])) fail(route, `dangling reference ${v["@id"]} at ${trail}`);
      else for (const [k, x] of Object.entries(v)) if (k !== "@id") refs(x, `${trail}.${k}`);
    }
  })(nodes, "graph");

  // page-level type + url match
  const want = expectedType(route);
  const page = nodes.find((n) => n["@type"] === want && (n.url === SITE + route || n["@id"]?.startsWith(SITE + route)));
  if (!page) fail(route, `expected a ${want} entity for ${SITE + route}`);
  else if (page.url && page.url !== SITE + route) fail(route, `${want}.url ${page.url} != canonical`);

  // breadcrumbs
  if (route !== "/") {
    const bc = nodes.find((n) => n["@type"] === "BreadcrumbList");
    if (!bc) fail(route, "no BreadcrumbList");
    else {
      const items = bc.itemListElement ?? [];
      items.forEach((it, i) => { if (it.position !== i + 1) fail(route, `breadcrumb position ${it.position} at index ${i}`); });
      if (items.at(-1)?.item !== SITE + route) fail(route, `last breadcrumb item is ${items.at(-1)?.item}`);
      if (items[0]?.item !== SITE + "/") fail(route, "breadcrumb does not start at Home");
    }
  }

  // services: provider is the canonical Organization
  for (const n of nodes.filter((x) => x["@type"] === "Service")) {
    if (n.provider?.["@id"] !== SITE + "/#organization") fail(route, "Service.provider is not the canonical Organization");
    if (!n.description && !n.name) fail(route, "Service has neither name nor description");
  }
  // no fabricated review/offer data anywhere
  for (const n of nodes) for (const bad of ["aggregateRating", "review", "offers", "priceRange"]) if (bad in n) fail(route, `${n["@type"]} contains ${bad} (not supported by visible content)`);
}

/* ---------- site-level checks (home page graph) ---------- */
{
  const html = await load("/");
  const nodes = nodesOf([...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1])));
  const org = nodes.find((n) => n["@id"] === SITE + "/#organization");
  const site = fs.readFileSync("src/lib/site.ts", "utf8");
  const phone = site.match(/schema:\s*"([^"]+)"/)?.[1];
  const email = site.match(/^\s+email:\s*"([^"]+)"/m)?.[1];
  if (!org) fail("/", "no Organization entity");
  else {
    for (const k of ["name", "url", "logo", "description", "address", "sameAs", "contactPoint", "email", "telephone"]) if (!(k in org)) fail("/", `Organization missing ${k}`);
    if (org.telephone !== phone) fail("/", `Organization.telephone ${org.telephone} != site.ts ${phone}`);
    if (org.email !== email) fail("/", `Organization.email ${org.email} != site.ts ${email}`);
    if (new Set(org.sameAs).size !== org.sameAs.length) fail("/", "duplicate sameAs URLs");
  }
  const ws = nodes.find((n) => n["@id"] === SITE + "/#website");
  if (!ws || ws.publisher?.["@id"] !== SITE + "/#organization") fail("/", "WebSite missing or publisher not the Organization");
  if (ws && "potentialAction" in ws) fail("/", "WebSite has a SearchAction but the site has no search");
  const orgs = nodes.filter((n) => n["@type"] === "Organization");
  if (orgs.length !== 1) fail("/", `${orgs.length} Organization entities (expected 1)`);
}

/* ---------- sitemap coverage ---------- */
{
  let xml = null;
  if (fromDisk) xml = fs.existsSync(path.join(target, "sitemap.xml")) ? fs.readFileSync(path.join(target, "sitemap.xml"), "utf8") : null;
  else { const r = await fetch(target.replace(/\/$/, "") + "/sitemap.xml"); xml = r.ok ? await r.text() : null; }
  if (!xml) fail("/sitemap.xml", "sitemap not found");
  else {
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    for (const r of routes) if (!locs.includes(SITE + r)) fail("/sitemap.xml", `missing ${SITE + r}`);
    for (const l of locs) if (!routes.includes(l.replace(SITE, ""))) fail("/sitemap.xml", `lists a URL with no page: ${l}`);
    if (/<lastmod>/.test(xml)) fail("/sitemap.xml", "contains lastmod values (pages have no real modification dates)");
  }
}

console.log(`Routes discovered: ${routes.length}   rendered & checked: ${pagesChecked}`);
console.log("Entity counts across all pages:", JSON.stringify(typeCounts));
if (failures.length) {
  console.log(`\nFAILED — ${failures.length} problem(s):`);
  failures.forEach((f) => console.log(" - " + f));
  process.exit(1);
}
console.log("\nAll schema checks passed.");
