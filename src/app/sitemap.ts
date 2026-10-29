import type { MetadataRoute } from "next";
import { growthEngineLinks } from "@/lib/site";
import { projects } from "@/lib/content/projects";

// Required for `output: "export"` — without this Next.js 16 refuses to
// statically export /sitemap.xml ("export const dynamic = \"force-static\"
// not configured on route /sitemap.xml").
export const dynamic = "force-static";

/* Sub-service pages live under their parent service. Keep in step with
   src/app/growth-engine/<parent>/<slug>/page.tsx. */
const subServicePaths = [
  "/growth-engine/ai-automation/ai-agent-development",
  "/growth-engine/ai-automation/ai-automation-services",
  "/growth-engine/ai-automation/ai-chatbot-development",
  "/growth-engine/ai-automation/ai-workflow-automation",
  "/growth-engine/ai-automation/business-process-automation",
  "/growth-engine/custom-web-apps-software/api-integration-development",
  "/growth-engine/custom-web-apps-software/business-software-development",
  "/growth-engine/custom-web-apps-software/crm-internal-tools",
  "/growth-engine/custom-web-apps-software/custom-web-application-development",
  "/growth-engine/custom-web-apps-software/saas-application-development",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shriprocraft.com";

  const paths = [
    "",
    "/growth-engine",
    ...growthEngineLinks.map((service) => service.href),
    ...subServicePaths,
    "/execution-model",
    "/featured-projects",
    ...projects.map((project) => `/featured-projects/${project.slug}`),
    "/industries",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  // No lastModified: the pages carry no real modification dates, and a
  // build-time "now" would claim every page changed on every deploy.
  // Trailing slash matches the exported /<route>/index.html files
  // (next.config.ts trailingSlash: true).
  return [...new Set(paths)].map((path) => ({ url: `${baseUrl}${path}/` }));
}
