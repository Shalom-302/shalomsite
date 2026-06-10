import type { OpenSourceItem } from "@/types";
import { site } from "./site";

export const openSource: OpenSourceItem[] = [
  {
    name: "Shaapi",
    tagline: { fr: "Le framework backend", en: "The backend framework" },
    description: {
      fr: "Framework FastAPI prêt pour la production : CLI, auth JWT/RBAC, migrations, stockage et déploiement conteneurisé.",
      en: "Production-ready FastAPI framework: CLI, JWT/RBAC auth, migrations, storage and containerized deployment.",
    },
    href: site.github,
    status: { fr: "Disponible", en: "Available" },
  },
  {
    name: "Shaops",
    tagline: { fr: "L'écosystème de déploiement", en: "The deployment ecosystem" },
    description: {
      fr: "Outils de déploiement et d'exploitation pour mettre les backends Shaapi en production, du VPS au conteneur.",
      en: "Deployment and operations tooling to ship Shaapi backends to production, from VPS to container.",
    },
    status: { fr: "En construction", en: "In progress" },
  },
  {
    name: "Shasec",
    tagline: { fr: "L'écosystème de sécurité", en: "The security ecosystem" },
    description: {
      fr: "Briques de sécurité (durcissement, secrets, politiques d'accès) pour des backends security-first.",
      en: "Security building blocks (hardening, secrets, access policies) for security-first backends.",
    },
    status: { fr: "En construction", en: "In progress" },
  },
];
