import type { Metadata } from "next";
import { Download } from "lucide-react";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/content/site";
import {
  experiences,
  education,
  skills,
  languages,
} from "@/content/experience";
import { Badge, Container, PageHeader } from "@/components/ui/blocks";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.resume.title, description: dict.resume.intro };
}

const summary = {
  fr: "Ingénieur Backend & IA, je construis des systèmes backend prêts pour la production, des applications pilotées par l'IA et des outils pour développeurs. Créateur et mainteneur de Shaapi, un framework FastAPI open source publié sur PyPI, et auteur d'un guide technique sur l'ingénierie de frameworks. Plus de 3 ans à concevoir des architectures scalables en Python, FastAPI et PostgreSQL, et à livrer des systèmes LLM : pipelines RAG, agents IA et intégrations MCP. Je combine ingénierie concrète, leadership technique et enseignement, avec un engagement de long terme pour l'écosystème tech africain. Cet ingénieur conçoit, construit, enseigne et publie.",
  en: "Backend & AI Software Engineer building production-ready backend systems, AI-powered applications and developer tools. Creator and maintainer of Shaapi, an open-source FastAPI framework published on PyPI, and author of a technical guide on framework engineering. 3+ years designing scalable architectures with Python, FastAPI and PostgreSQL, and shipping LLM-based systems: RAG pipelines, AI agents and MCP integrations. Combines hands-on engineering, technical leadership and software-engineering education, with a long-term commitment to growing the African technology ecosystem. This engineer designs, builds, teaches and publishes.",
};

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);
  const r = dict.resume;

  return (
    <Container className="py-20">
      <div className="flex items-start justify-between gap-4">
        <PageHeader label="resume" title={r.title} intro={r.intro} />
        <a
          href={site.resumePdf}
          download
          className="mt-2 inline-flex shrink-0 items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <Download size={16} /> {r.download}
        </a>
      </div>

      <section className="border-t border-border py-8">
        <h2 className="mono-label">{r.summaryHeading}</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          {summary[locale]}
        </p>
      </section>

      <section className="border-t border-border py-8">
        <h2 className="mono-label">{r.experienceHeading}</h2>
        <div className="mt-4 space-y-5">
          {experiences.map((xp) => (
            <div key={xp.company}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">
                  {xp.role[locale]} · <span className="text-muted-foreground">{xp.company}</span>
                </p>
                <span className="font-mono text-xs text-muted-foreground">
                  {xp.period[locale]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-8">
        <h2 className="mono-label">{r.educationHeading}</h2>
        <div className="mt-4 space-y-3">
          {education.map((e) => (
            <div
              key={e.school}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between"
            >
              <p className="font-medium">
                {e.degree[locale]} · <span className="text-muted-foreground">{e.school}</span>
              </p>
              <span className="font-mono text-xs text-muted-foreground">{e.date[locale]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-8">
        <h2 className="mono-label">{r.skillsHeading}</h2>
        <div className="mt-4 space-y-4">
          {skills.map((group) => (
            <div key={group.group} className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="w-40 shrink-0 text-sm font-medium">{group.group}</span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-8">
        <h2 className="mono-label">{r.languagesHeading}</h2>
        <div className="mt-4 flex flex-wrap gap-6">
          {languages.map((l) => (
            <p key={l.name.en} className="text-sm">
              <span className="font-medium">{l.name[locale]}</span>{" "}
              <span className="text-muted-foreground">· {l.level[locale]}</span>
            </p>
          ))}
        </div>
      </section>
    </Container>
  );
}
