import type { Education, Experience } from "@/types";

// Source of truth: Shalom_Tehe_Backend_AI_Engineer.pdf (CV).
// Entries marked TODO come from claude.txt (brief) only → verify before deploy.
export const experiences: Experience[] = [
  {
    company: "Kaanari",
    role: { fr: "Développeur Generative AI", en: "Generative AI Developer" },
    period: { fr: "Sept. 2023 → Présent", en: "Sep 2023 → Present" },
    current: true,
    missions: {
      fr: [
        "Développement d'APIs backend avec FastAPI pour des applications pilotées par l'IA",
        "Intégration de solutions d'IA générative dans des produits web",
        "Conception et déploiement d'agents IA avec LangChain",
        "Collaboration avec des équipes pluridisciplinaires (produit, data, engineering)",
      ],
      en: [
        "Built backend APIs with FastAPI for AI-driven applications",
        "Integrated generative AI solutions into web products",
        "Designed and deployed AI agents using LangChain",
        "Collaborated with cross-functional teams (product, data, engineering)",
      ],
    },
  },
  // TODO vérifier → présent dans le brief (claude.txt), absent du CV
  {
    company: "IT Fondation Côte d'Ivoire",
    role: { fr: "Lead Developer", en: "Lead Developer" },
    period: { fr: "2026 → Présent", en: "2026 → Present" },
    current: true,
    missions: {
      fr: [
        "Leadership technique et encadrement d'équipe",
        "Architecture de projets et revues de code",
        "Accompagnement et montée en compétences des développeurs",
      ],
      en: [
        "Technical leadership and team guidance",
        "Project architecture and code reviews",
        "Mentoring and upskilling developers",
      ],
    },
  },
  // TODO vérifier → enseignement (brief), recoupe la page Teaching
  {
    company: "Geige",
    role: { fr: "Professeur / Formateur", en: "Professor / Trainer" },
    period: { fr: "2026 → Présent", en: "2026 → Present" },
    current: true,
    missions: {
      fr: [
        "Enseignement du génie logiciel",
        "Mentorat et accompagnement d'apprenants",
        "Conception de supports pédagogiques",
      ],
      en: [
        "Teaching software engineering",
        "Mentoring and supporting learners",
        "Designing educational material",
      ],
    },
  },
  {
    company: "lEMON Africa",
    role: {
      fr: "Administrateur Réseau & Sécurité (programme de formation)",
      en: "Network & Security Administrator (training program)",
    },
    period: { fr: "Jan. 2022 → Mai 2023", en: "Jan 2022 → May 2023" },
    missions: {
      fr: [
        "Sensibilisation à la cybersécurité auprès des employés",
        "Implémentation de protocoles et bonnes pratiques de sécurité",
        "Support aux opérations de sécurité réseau et système",
      ],
      en: [
        "Delivered cybersecurity awareness training to employees",
        "Helped implement security protocols and best practices",
        "Supported network and system security operations",
      ],
    },
  },
  {
    company: "American Space",
    role: { fr: "Bénévole", en: "Volunteer" },
    period: { fr: "Août 2021 → Jan. 2022", en: "Aug 2021 → Jan 2022" },
    missions: {
      fr: [
        "Accompagnement des utilisateurs sur les outils numériques",
        "Support technique et guidance utilisateur",
        "Développement de compétences en communication et relation client",
      ],
      en: [
        "Assisted users with digital tools and computer systems",
        "Provided technical support and user guidance",
        "Built strong communication and customer-interaction skills",
      ],
    },
  },
];

export const education: Education[] = [
  {
    school: "ESMA | Riviera",
    degree: {
      fr: "Licence en Programmation Web",
      en: "Bachelor's Degree in Web Programming",
    },
    date: { fr: "Juillet 2022", en: "July 2022" },
  },
  {
    school: "IFSM | Cocody",
    degree: {
      fr: "BTS Réseaux Informatiques",
      en: "Higher National Diploma in Computer Networks",
    },
    date: { fr: "Septembre 2021", en: "September 2021" },
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["FastAPI", "Python", "REST APIs", "Async architectures"] },
  {
    group: "AI & Orchestration",
    items: ["LangChain", "AI Agents", "RAG", "Generative AI", "NLP"],
  },
  { group: "Databases", items: ["PostgreSQL", "Redis", "Qdrant"] },
  { group: "DevOps", items: ["Docker", "VPS deployment", "Git", "CI/CD"] },
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript"] },
];

export const languages: { name: { fr: string; en: string }; level: { fr: string; en: string } }[] =
  [
    { name: { fr: "Français", en: "French" }, level: { fr: "Courant", en: "Fluent" } },
    {
      name: { fr: "Anglais", en: "English" },
      level: { fr: "Professionnel", en: "Professional" },
    },
  ];
