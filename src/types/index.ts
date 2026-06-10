import type { Locale } from "@/i18n/config";

/** A value translated into every supported locale. */
export type Localized<T = string> = Record<Locale, T>;

export type SiteConfig = {
  name: string;
  title: Localized;
  tagline: Localized;
  email: string;
  phone: string;
  location: Localized;
  /** Public site URL (used for SEO / canonical). */
  url: string;
  github: string;
  githubUser: string;
  linkedin: string;
  resumePdf: string;
};

export type Experience = {
  company: string;
  role: Localized;
  period: Localized;
  location?: Localized;
  current?: boolean;
  missions: Localized<string[]>;
};

export type Education = {
  school: string;
  degree: Localized;
  date: Localized;
};

export type Project = {
  slug: string;
  name: string;
  tagline: Localized;
  description: Localized;
  featured?: boolean;
  status?: Localized;
  stack: string[];
  problem?: Localized;
  solution?: Localized;
  architecture?: Localized;
  impact?: Localized;
  /** Optional richer feature list (title + one-line description). */
  features?: { title: string; description: Localized }[];
  /** Optional shell snippet shown in a mono block (e.g. Shaapi CLI). */
  snippet?: string[];
  links?: { label: string; href: string }[];
};

export type OpenSourceItem = {
  name: string;
  tagline: Localized;
  description: Localized;
  href?: string;
  status?: Localized;
};

export type TeachingItem = {
  title: Localized;
  description: Localized;
  kind: "course" | "tutorial" | "resource" | "video" | "pdf" | "program";
  href?: string;
};

export type TimelineStep = {
  label: Localized;
  detail: Localized;
};

export type PostMeta = {
  slug: string;
  section: "research" | "lab";
  title: Localized;
  summary: Localized;
  category: Localized;
  date: string; // ISO
  kind?: Localized; // article / note / white paper / prototype
};
