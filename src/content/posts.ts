import type { PostMeta } from "@/types";

// Research categories from the brief: AI · Backend Engineering · Africa Tech.
export const posts: PostMeta[] = [
  {
    slug: "shaapi-architecture",
    section: "research",
    title: {
      fr: "Concevoir Shaapi : un framework FastAPI security-first",
      en: "Designing Shaapi: a security-first FastAPI framework",
    },
    summary: {
      fr: "Les décisions d'architecture derrière Shaapi : auth, migrations, stockage et déploiement par défaut.",
      en: "The architectural decisions behind Shaapi: auth, migrations, storage and deployment by default.",
    },
    category: { fr: "Ingénierie Backend", en: "Backend Engineering" },
    kind: { fr: "Article", en: "Article" },
    date: "2025-05-12",
  },
  {
    slug: "grounding-agents-rag-mcp",
    section: "research",
    title: {
      fr: "Ancrer les agents IA avec RAG et MCP",
      en: "Grounding AI agents with RAG and MCP",
    },
    summary: {
      fr: "Comment combiner recherche vectorielle et protocole MCP pour des agents fiables.",
      en: "Combining vector search and the MCP protocol for reliable agents.",
    },
    category: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
    kind: { fr: "Note", en: "Note" },
    date: "2025-03-28",
  },
  {
    slug: "qdrant-vector-search",
    section: "lab",
    title: {
      fr: "Expériences de recherche vectorielle avec Qdrant",
      en: "Vector search experiments with Qdrant",
    },
    summary: {
      fr: "Notes de prototypage : embeddings, filtres et latence sur Qdrant.",
      en: "Prototyping notes: embeddings, filters and latency on Qdrant.",
    },
    category: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
    kind: { fr: "Prototype", en: "Prototype" },
    date: "2025-04-19",
  },
];

export function postsBySection(section: PostMeta["section"]): PostMeta[] {
  return posts
    .filter((p) => p.section === section)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}
