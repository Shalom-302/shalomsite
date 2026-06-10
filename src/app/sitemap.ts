import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { postsBySection } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/research",
    "/open-source",
    "/teaching",
    "/lab",
    "/resume",
    "/contact",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({ url: `${site.url}/${locale}${path}`, changeFrequency: "monthly" });
    }
    for (const p of projects) {
      entries.push({ url: `${site.url}/${locale}/projects/${p.slug}` });
    }
    for (const p of postsBySection("research")) {
      entries.push({ url: `${site.url}/${locale}/research/${p.slug}` });
    }
    for (const p of postsBySection("lab")) {
      entries.push({ url: `${site.url}/${locale}/lab/${p.slug}` });
    }
  }

  return entries;
}
