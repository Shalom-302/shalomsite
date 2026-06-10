import type { Education, Experience } from "@/types";

// Source of truth: public/Shalom_Tehe_Resume.pdf (CV).
export const experiences: Experience[] = [
  {
    company: "Kaanari",
    role: { fr: "Développeur Generative AI", en: "Generative AI Developer" },
    period: { fr: "Sept. 2023 → Présent", en: "Sep 2023 → Present" },
    location: { fr: "Abidjan", en: "Abidjan" },
    current: true,
    missions: {
      fr: [
        "Conception et livraison de services backend pour des produits pilotés par l'IA (FastAPI, Python async, PostgreSQL), de l'architecture au déploiement conteneurisé (Docker/VPS)",
        "Construction et orchestration d'agents IA et de pipelines LLM (LangChain) : automatisation, NLP et extraction de données intelligente en production",
        "Intégration de capacités d'IA générative dans des produits clients, en transformant des cas d'usage flous en systèmes fiables, sécurisés et prêts pour la production",
        "Collaboration avec les équipes produit, data et engineering sur l'architecture et la livraison",
      ],
      en: [
        "Design and ship backend services for AI-driven products using FastAPI, async Python and PostgreSQL, owning systems from architecture to containerized (Docker/VPS) deployment",
        "Build and orchestrate AI agents and LLM pipelines (LangChain) powering automation, NLP and intelligent data extraction in production web products",
        "Integrate generative AI capabilities into customer-facing products, turning ambiguous AI use cases into reliable, secure, production-grade systems",
        "Collaborate with cross-functional product, data and engineering teams on architecture and delivery",
      ],
    },
  },
  {
    company: "IT Foundation Côte d'Ivoire",
    role: { fr: "Lead Developer", en: "Lead Developer" },
    period: { fr: "2026 → Présent", en: "2026 → Present" },
    location: { fr: "Abidjan", en: "Abidjan" },
    current: true,
    missions: {
      fr: [
        "Leadership technique sur les projets logiciels : décisions d'architecture, choix technologiques et planification de la livraison",
        "Mise en place des bonnes pratiques d'ingénierie : revue de code, workflows Git, clean architecture et standards de déploiement conteneurisé",
        "Accompagnement et mentorat des développeurs, traduction des besoins métier en feuilles de route techniques fiables",
      ],
      en: [
        "Provide technical leadership across software projects: architecture decisions, technology choices and delivery planning",
        "Establish engineering best practices: code review, Git workflows, clean architecture and containerized deployment standards",
        "Support and mentor developers, translating business requirements into reliable technical roadmaps",
      ],
    },
  },
  {
    company: "GEIGE",
    role: {
      fr: "Professeur / Formateur technique",
      en: "Professor / Technical Trainer",
    },
    period: { fr: "2026 → Présent", en: "2026 → Present" },
    location: {
      fr: "Grande École Informatique de Gestion Entreprise, Abidjan",
      en: "Grande École Informatique de Gestion Entreprise, Abidjan",
    },
    current: true,
    missions: {
      fr: [
        "Enseignement du génie logiciel, du développement backend et de Python à des étudiants et développeurs juniors",
        "Conception de cursus orientés projet et accompagnement des étudiants sur des réalisations concrètes",
        "Vulgarisation de concepts d'ingénierie complexes en supports d'apprentissage clairs et actionnables",
      ],
      en: [
        "Teach software engineering, backend development and Python to students and junior developers",
        "Design hands-on, project-based curricula and mentor students through real-world builds",
        "Translate complex engineering concepts into clear, actionable learning material",
      ],
    },
  },
  {
    company: "Lemon Africa",
    role: {
      fr: "Administrateur Réseau & Sécurité (programme de formation)",
      en: "Network & Security Administrator (training program)",
    },
    period: { fr: "Jan. 2022 → Mai 2023", en: "Jan 2022 → May 2023" },
    missions: {
      fr: [
        "Sensibilisation à la cybersécurité auprès des employés",
        "Support à l'implémentation de protocoles de sécurité et d'opérations réseau",
      ],
      en: [
        "Delivered cybersecurity awareness training to employees",
        "Supported the implementation of security protocols and network operations",
      ],
    },
  },
  {
    company: "American Space",
    role: {
      fr: "Bénévole, support compétences numériques",
      en: "Volunteer, Digital Skills Support",
    },
    period: { fr: "Août 2021 → Jan. 2022", en: "Aug 2021 → Jan 2022" },
    missions: {
      fr: [
        "Support technique et accompagnement des utilisateurs sur les outils numériques",
        "Développement de solides compétences en communication et relation client",
      ],
      en: [
        "Provided technical support and user enablement on digital tools",
        "Developed strong communication and customer-interaction skills",
      ],
    },
  },
];

export const education: Education[] = [
  {
    school: "ESMA, Riviera · Abidjan",
    degree: {
      fr: "Licence en Programmation Web",
      en: "Bachelor's Degree in Web Programming",
    },
    date: { fr: "Juillet 2022", en: "July 2022" },
  },
  {
    school: "IFSM, Cocody · Abidjan",
    degree: {
      fr: "BTS Réseaux Informatiques",
      en: "Higher National Diploma in Computer Networks",
    },
    date: { fr: "Septembre 2021", en: "September 2021" },
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Backend",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Async architectures",
      "Clean architecture",
      "SQLAlchemy",
      "Alembic",
    ],
  },
  {
    group: "AI & Orchestration",
    items: [
      "Generative AI",
      "LLM Applications",
      "RAG",
      "AI Agents",
      "MCP",
      "LangChain",
      "Prompt Engineering",
      "NLP",
    ],
  },
  { group: "Databases", items: ["PostgreSQL", "Redis", "Qdrant", "Vector DBs"] },
  { group: "DevOps", items: ["Docker", "Linux", "Git", "CI/CD", "VPS deployment"] },
  {
    group: "Open Source",
    items: ["PyPI", "Package publishing", "Documentation", "CLI development"],
  },
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript"] },
];

export const languages: { name: { fr: string; en: string }; level: { fr: string; en: string } }[] =
  [
    {
      name: { fr: "Français", en: "French" },
      level: { fr: "Courant (niveau natif)", en: "Fluent (native-level)" },
    },
    {
      name: { fr: "Anglais", en: "English" },
      level: { fr: "Professionnel", en: "Professional working proficiency" },
    },
  ];
