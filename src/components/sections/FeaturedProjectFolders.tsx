"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlassFolder, { type FolderFile } from "@/components/ui/glass-folder-cards";
import { projects } from "@/lib/content/projects";

/* Stone icon per project (public/services). Decorative — the title carries the meaning. */
const projectIcons: Record<string, string> = {
  "social-growth-engine": "/services/meta-ads.webp",
  "google-ads": "/services/lead-generation.webp",
  "website-development": "/services/website-design-development.webp",
};

type FolderItem = {
  key: string;
  title: string;
  subtitle: string;
  href: string;
  icon?: string;
  cover?: string;
  files: FolderFile[];
};

/* Website screenshots are tall full-page captures — anchor to the top so the
   hero, not the middle of the page, shows on the folder sheet. */
const topAnchored = new Set(["website-development"]);

/** Featured projects as glass folders: the cover is the back panel, the
 *  documented screenshots are the files inside, and the stone icon and arrow
 *  sit on the front glass. All copy comes from lib/content/projects. */
export function FeaturedProjectFolders() {
  const [width, setWidth] = useState(400);
  useEffect(() => {
    const fit = () => setWidth(window.innerWidth < 640 ? 320 : window.innerWidth < 1280 ? 400 : 360);
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const items: FolderItem[] = [
    ...projects.map((project) => {
      const href = `/featured-projects/${project.slug}`;
      return {
        key: project.slug,
        title: project.business,
        subtitle: project.industry,
        href,
        icon: projectIcons[project.slug],
        cover: project.cover?.src,
        files: (project.gallery ?? []).slice(0, 4).map((g) => ({
          name: Array.isArray(g.caption) ? g.caption[0] : g.caption,
          image: g.src,
          imagePosition: topAnchored.has(project.slug) ? "top" : undefined,
          href,
        })),
      };
    }),
  ];

  return (
    <div className="mx-auto grid max-w-[1240px] justify-items-center gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.key}
          className={`flex flex-col items-center ${index === 2 ? "sm:col-span-2 xl:col-span-1" : ""}`}
        >
          <GlassFolder
            width={width}
            label={item.title}
            meta={item.subtitle}
            image={item.cover}
            art="none"
            action="none"
            files={item.files}
            appearDelay={index * 140}
            icon={item.icon ? <img src={item.icon} alt="" width={256} height={256} draggable={false} /> : undefined}
            corner={
              <Link
                href={item.href}
                aria-label={`View case study: ${item.title}`}
                className="grid h-[46px] w-[46px] place-items-center rounded-full border border-hairlineStrong bg-white/40 text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
            }
          />
          <Link href={item.href} className="btn-ghost mt-4">
            View case study
          </Link>
        </div>
      ))}
    </div>
  );
}
