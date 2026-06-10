import type { TeachingItem } from "@/types";

export const teaching: TeachingItem[] = [
  {
    kind: "program",
    title: { fr: "Geige", en: "Geige" },
    description: {
      fr: "Programme d'enseignement du génie logiciel : cours, mentorat et accompagnement d'apprenants.",
      en: "Software-engineering teaching program: courses, mentoring and learner support.",
    },
  },
  {
    kind: "course",
    title: { fr: "Maîtriser FastAPI en 2025", en: "Mastering FastAPI in 2025" },
    description: {
      fr: "Construire des APIs backend robustes et sécurisées avec FastAPI, de zéro à la production.",
      en: "Build robust, secure backend APIs with FastAPI, from zero to production.",
    },
  },
  {
    kind: "course",
    title: { fr: "LangChain & GenAI avec Python", en: "LangChain & GenAI with Python" },
    description: {
      fr: "Orchestrer des agents IA, des chaînes et des intégrations LLM avec LangChain.",
      en: "Orchestrate AI agents, chains and LLM integrations with LangChain.",
    },
  },
  {
    kind: "course",
    title: { fr: "Les bases du Machine Learning", en: "Machine Learning foundations" },
    description: {
      fr: "Comprendre et appliquer les fondamentaux du ML avec Python.",
      en: "Understand and apply the fundamentals of ML with Python.",
    },
  },
  {
    kind: "course",
    title: { fr: "Les bases du Deep Learning", en: "Deep Learning foundations" },
    description: {
      fr: "Réseaux de neurones et fondamentaux du deep learning avec Python.",
      en: "Neural networks and deep-learning fundamentals with Python.",
    },
  },
  {
    kind: "pdf",
    title: { fr: "Build Your Own Shaapi", en: "Build Your Own Shaapi" },
    description: {
      fr: "Un guide PDF pour comprendre et reconstruire un framework FastAPI de production.",
      en: "A PDF guide to understand and rebuild a production FastAPI framework.",
    },
    href: "/build-your-own-shaapi.pdf",
  },
];
