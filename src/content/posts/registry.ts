import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";

type Loader = () => Promise<{ default: ComponentType }>;

const bodies: Record<string, Record<Locale, Loader>> = {
  "shaapi-architecture": {
    fr: () => import("./shaapi-architecture/fr.mdx"),
    en: () => import("./shaapi-architecture/en.mdx"),
  },
  "grounding-agents-rag-mcp": {
    fr: () => import("./grounding-agents-rag-mcp/fr.mdx"),
    en: () => import("./grounding-agents-rag-mcp/en.mdx"),
  },
  "qdrant-vector-search": {
    fr: () => import("./qdrant-vector-search/fr.mdx"),
    en: () => import("./qdrant-vector-search/en.mdx"),
  },
};

export async function getPostBody(
  slug: string,
  locale: Locale,
): Promise<ComponentType | null> {
  const entry = bodies[slug];
  if (!entry) return null;
  const mod = await entry[locale]();
  return mod.default;
}
