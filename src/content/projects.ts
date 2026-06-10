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
      fr: "Shaapi est le framework que j'aurais voulu avoir au premier jour de chaque projet. Au lieu de recâbler l'authentification, les migrations, le stockage et le déploiement à chaque fois, une seule commande génère une architecture FastAPI complète, conteneurisée et security-first, prête à scaler. Du prototype à la production sans réécrire l'ossature : c'est ma façon de transformer des années d'ingénierie backend en conventions réutilisables.",
      en: "Shaapi is the framework I wish I'd had on day one of every project. Instead of re-wiring auth, migrations, storage and deployment every time, a single command scaffolds a complete, containerized, security-first FastAPI architecture that is ready to scale. From prototype to production without rewriting the skeleton: my way of turning years of backend engineering into reusable conventions.",
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
    name: "Shaai",
    tagline: { fr: "Assistant IA avec agents & RAG", en: "AI assistant with agents & RAG" },
    description: {
      fr: "Un assistant IA bâti sur des agents orchestrés, le protocole MCP et une recherche vectorielle Qdrant pour des réponses ancrées dans des données réelles (RAG).",
      en: "An AI assistant built on orchestrated agents, the MCP protocol and Qdrant vector search for answers grounded in real data (RAG).",
    },
    stack: ["MCP", "AI Agents", "Qdrant", "RAG", "LangChain", "FastAPI"],
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
    name: "SEV-OIL",
    tagline: {
      fr: "Vitrine B2B pour un fournisseur pétrolier",
      en: "B2B landing site for an oil supplier",
    },
    description: {
      fr: "Site vitrine conçu et développé pour SEV-OIL, fournisseur pétrolier basé à Abidjan : distribution en stations-service, ravitaillement de sites miniers et soutage maritime au Port d'Abidjan. Une landing page B2B bilingue (FR/EN), responsive et orientée crédibilité et génération de leads.",
      en: "Landing site designed and built for SEV-OIL, an Abidjan-based petroleum supplier: service-station distribution, mining-site fuel delivery and marine bunkering at the Port of Abidjan. A bilingual (FR/EN), responsive B2B page focused on credibility and lead generation.",
    },
    status: { fr: "En ligne · projet client", en: "Live · client project" },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n"],
    problem: {
      fr: "Un acteur pétrolier B2B avait besoin d'une présence en ligne crédible pour présenter ses services et capter des demandes de devis.",
      en: "A B2B petroleum player needed a credible online presence to showcase its services and capture quote requests.",
    },
    solution: {
      fr: "Une vitrine claire et rapide : services détaillés, couverture géographique, processus en cinq étapes, indicateurs de confiance (certifications, partenaires) et formulaire de contact.",
      en: "A clear, fast landing site: detailed services, geographic coverage, a five-step process, trust indicators (certifications, partners) and a contact form.",
    },
    impact: {
      fr: "Une image de marque professionnelle et un canal direct de génération de leads, en français et en anglais.",
      en: "A professional brand image and a direct lead-generation channel, in French and English.",
    },
    links: [{ label: "Site en ligne", href: "https://sevoil-site.kortexai.dev/" }],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
