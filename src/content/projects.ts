import type { Project } from "@/types";
import { site } from "./site";

export const projects: Project[] = [
  {
    slug: "shaapi",
    name: "Shaapi",
    featured: true,
    tagline: {
      fr: "Framework FastAPI prêt pour la production",
      en: "Production-ready FastAPI framework",
    },
    description: {
      fr: "Shaapi est le framework que j'aurais voulu avoir au premier jour de chaque projet. Au lieu de recâbler l'authentification, les migrations, le stockage et le déploiement à chaque fois, une seule commande génère une architecture FastAPI complète, conteneurisée et security-first, prête à scaler. Livré « batteries included » (PostgreSQL, Redis, MinIO, JWT, RBAC, Docker), publié et maintenu sur PyPI avec une documentation publique et un guide « Build Your Own Shaapi ». Je construis des outils pour les développeurs, pas seulement des applications.",
      en: "Shaapi is the framework I wish I'd had on day one of every project. Instead of re-wiring auth, migrations, storage and deployment every time, a single command scaffolds a complete, containerized, security-first FastAPI architecture that is ready to scale. Shipped batteries-included (PostgreSQL, Redis, MinIO, JWT, RBAC, Docker), published and maintained on PyPI with public documentation and a \"Build Your Own Shaapi\" guide. I build tools for developers, not only applications.",
    },
    status: { fr: "Open source · activement développé", en: "Open source · actively developed" },
    features: [
      {
        title: "CLI",
        description: {
          fr: "Générez, lancez et gérez un projet entier en une commande.",
          en: "Scaffold, run and manage a whole project in one command.",
        },
      },
      {
        title: "Auth JWT + RBAC",
        description: {
          fr: "Authentification et contrôle d'accès par rôles prêts à l'emploi.",
          en: "Authentication and role-based access control out of the box.",
        },
      },
      {
        title: "Alembic",
        description: {
          fr: "Migrations de base de données versionnées dès le départ.",
          en: "Versioned database migrations from the start.",
        },
      },
      {
        title: "PostgreSQL + Redis",
        description: {
          fr: "Base relationnelle et cache/queues câblés et orchestrés.",
          en: "Relational store and cache/queues wired and orchestrated.",
        },
      },
      {
        title: "MinIO",
        description: {
          fr: "Stockage objet compatible S3 intégré.",
          en: "Built-in S3-compatible object storage.",
        },
      },
      {
        title: "Docker",
        description: {
          fr: "Conteneurs prêts pour le local comme pour le déploiement VPS.",
          en: "Containers ready for local and VPS deployment alike.",
        },
      },
    ],
    stack: [
      "FastAPI",
      "CLI",
      "Docker",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "JWT",
      "RBAC",
      "Alembic",
    ],
    problem: {
      fr: "Démarrer un backend FastAPI production-ready demande de recâbler à chaque fois l'auth, les migrations, le stockage, le cache et le déploiement.",
      en: "Bootstrapping a production-ready FastAPI backend means re-wiring auth, migrations, storage, caching and deployment every single time.",
    },
    solution: {
      fr: "Une CLI qui génère une architecture éprouvée avec JWT, RBAC, migrations Alembic, stockage MinIO, cache Redis et orchestration Docker prêts à l'emploi.",
      en: "A CLI that generates a battle-tested architecture with JWT, RBAC, Alembic migrations, MinIO storage, Redis caching and Docker orchestration out of the box.",
    },
    architecture: {
      fr: "Conteneurs Docker, PostgreSQL, Redis et MinIO orchestrés ; couche d'authentification JWT + RBAC ; migrations versionnées via Alembic.",
      en: "Orchestrated Docker containers, PostgreSQL, Redis and MinIO; JWT + RBAC authentication layer; versioned migrations via Alembic.",
    },
    impact: {
      fr: "Réduit la mise en place d'un backend sécurisé de plusieurs jours à quelques minutes.",
      en: "Cuts the setup of a secure backend from days to minutes.",
    },
    snippet: ["pip install shaapi", "shaapi new myapp", "shaapi up"],
    links: [
      { label: "Documentation", href: "https://shalom-302.github.io/shaapi/" },
      { label: "GitHub", href: site.github },
      { label: "PyPI", href: "https://pypi.org/project/shaapi/" },
      { label: "Build Your Own Shaapi (PDF)", href: "/build-your-own-shaapi.pdf" },
    ],
  },
  {
    slug: "shaai",
    name: "ShaAI",
    tagline: {
      fr: "Initiative d'ingénierie & de recherche en IA",
      en: "AI engineering & research initiative",
    },
    description: {
      fr: "ShaAI est mon initiative appliquée d'ingénierie et de recherche en IA, centrée sur les systèmes intelligents : architectures agentiques, pipelines de génération augmentée par récupération (RAG), intégrations MCP, automatisation et systèmes de connaissance pilotés par l'IA.",
      en: "ShaAI is my applied AI engineering and research initiative focused on intelligent systems: agentic architectures, retrieval-augmented generation (RAG) pipelines, MCP integrations, AI-driven automation and knowledge systems.",
    },
    status: { fr: "Initiative · en cours", en: "Initiative · ongoing" },
    stack: ["AI Agents", "MCP", "RAG", "LLM Applications", "LangChain", "Qdrant"],
    links: [{ label: "GitHub", href: site.github }],
  },
  {
    slug: "tekawake",
    name: "TEKAWAKE",
    tagline: {
      fr: "Média d'éveil sur la tech en Afrique",
      en: "A tech-awareness media for Africa",
    },
    description: {
      fr: "TEKAWAKE est un média qui rend la technologie accessible en Afrique : « pour profiter de la tech, pas la subir ». Articles, vidéos et newsletter couvrant cybersécurité, IA, blockchain, data, robotique, healthtech, fintech et startups. Soutenu par Kaanari.",
      en: "TEKAWAKE is a media outlet making technology accessible across Africa: \"benefit from tech, don't suffer it.\" Articles, videos and a newsletter covering cybersecurity, AI, blockchain, data, robotics, healthtech, fintech and startups. Backed by Kaanari.",
    },
    status: { fr: "En ligne · média", en: "Live · media" },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Content / MDX"],
    problem: {
      fr: "En Afrique, la technologie est souvent subie faute de vulgarisation accessible et fiable.",
      en: "In Africa, technology is often endured for lack of accessible, trustworthy explanation.",
    },
    solution: {
      fr: "Un média éditorial clair, organisé par grands domaines tech, avec articles, vidéos et une newsletter pour éveiller et accompagner le public.",
      en: "A clear editorial media, organized by major tech domains, with articles, videos and a newsletter to inform and guide the audience.",
    },
    impact: {
      fr: "Sensibilisation et montée en compétences du public africain sur les sujets technologiques clés.",
      en: "Raising awareness and upskilling African audiences on key technology topics.",
    },
    links: [{ label: "Site en ligne", href: "https://tekawake.kortexai.dev/" }],
  },
  {
    slug: "teleco-health",
    name: "Teleco Health",
    tagline: { fr: "Plateforme e-santé basée sur l'IA", en: "AI-based e-health platform" },
    description: {
      fr: "Une plateforme de télésanté intégrant des fonctionnalités d'IA générative pour l'assistance et l'automatisation, avec des services backend FastAPI + PostgreSQL pensés pour la sécurité des données.",
      en: "A telehealth platform integrating generative-AI features for assistance and automation, with FastAPI + PostgreSQL backend services designed around data security.",
    },
    stack: ["FastAPI", "Generative AI", "PostgreSQL", "Security"],
  },
  {
    slug: "traaf",
    name: "Traaf",
    tagline: {
      fr: "Gestion du transport urbain",
      en: "Urban transportation management",
    },
    description: {
      fr: "Une application de gestion du transport urbain : backend FastAPI gérant utilisateurs, flux de transport et données opérationnelles, avec des APIs REST sécurisées sur PostgreSQL, déployées en conteneurs sur VPS.",
      en: "An urban transportation management app: a FastAPI backend handling users, transportation flows and operational data, with secure REST APIs over PostgreSQL, deployed in containers on a VPS.",
    },
    stack: ["FastAPI", "PostgreSQL", "Docker", "VPS"],
  },
  {
    slug: "sevoil",
    name: "Sevoil",
    tagline: {
      fr: "Plateforme de vente et gestion de produits pétroliers",
      en: "Petroleum sales & management platform",
    },
    description: {
      fr: "Plateforme métier réelle pour la vente et la gestion de produits pétroliers. En tant que Lead Backend Engineer, je suis responsable de l'architecture backend, du design des APIs et de la gestion des données pour des workflows métier spécifiques, avec une approche security-first et prête pour la production. La vitrine publique présente l'activité (stations-service, sites miniers, soutage maritime au Port d'Abidjan).",
      en: "A real-world business platform for the sale and management of petroleum products. As Lead Backend Engineer I own the backend architecture, API design and data management for industry-specific business workflows, with a security-first, production-grade approach. The public landing site presents the business (service stations, mining sites, marine bunkering at the Port of Abidjan).",
    },
    status: { fr: "En production · projet client", en: "In production · client project" },
    stack: [
      "FastAPI",
      "PostgreSQL",
      "API Design",
      "Security",
      "Docker",
      "Next.js",
    ],
    problem: {
      fr: "Un acteur pétrolier B2B avait besoin d'une plateforme fiable pour gérer la vente de produits pétroliers et d'une présence en ligne crédible.",
      en: "A B2B petroleum player needed a reliable platform to manage petroleum-product sales and a credible online presence.",
    },
    solution: {
      fr: "Une architecture backend sécurisée (APIs, gestion des données, workflows métier) et une vitrine claire présentant services, couverture et génération de leads.",
      en: "A secure backend architecture (APIs, data management, business workflows) and a clear landing site presenting services, coverage and lead generation.",
    },
    impact: {
      fr: "Une plateforme prête pour la production et une image de marque professionnelle, en français et en anglais.",
      en: "A production-ready platform and a professional brand image, in French and English.",
    },
    links: [{ label: "Site en ligne", href: "https://sevoil-site.kortexai.dev/" }],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
