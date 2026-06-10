import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Terminal } from "lucide-react";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { projects, getProject } from "@/content/projects";
import { Badge, Container } from "@/components/ui/blocks";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang: Locale = isLocale(locale) ? locale : "fr";
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.tagline[lang] };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const p = dict.projects;
  const sections: { label: string; value?: string }[] = [
    { label: p.problemLabel, value: project.problem?.[locale] },
    { label: p.solutionLabel, value: project.solution?.[locale] },
    { label: p.architectureLabel, value: project.architecture?.[locale] },
    { label: p.impactLabel, value: project.impact?.[locale] },
  ].filter((s) => s.value);

  return (
    <Container className="py-20">
      <Link
        href={`/${locale}/projects`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={14} /> {dict.projects.title}
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          {project.featured ? <span className="mono-label">{dict.common.featured}</span> : null}
        </div>
        <p className="mt-3 text-lg text-muted-foreground">{project.tagline[locale]}</p>
        {project.status ? (
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {project.status[locale]}
          </p>
        ) : null}
      </header>

      <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
        {project.description[locale]}
      </p>

      <div className="mt-6">
        <span className="mono-label">{p.stackLabel}</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>

      {project.snippet ? (
        <div className="mt-8 max-w-xl rounded-lg border border-border bg-card p-4 font-mono text-sm">
          <div className="mb-3 flex items-center gap-2 text-muted-foreground">
            <Terminal size={14} />
            <span className="text-xs">shell</span>
          </div>
          {project.snippet.map((line) => (
            <div key={line} className="leading-7">
              <span className="select-none text-muted-foreground">$ </span>
              {line}
            </div>
          ))}
        </div>
      ) : null}

      {project.features ? (
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((f) => (
            <div key={f.title} className="h-full bg-card p-5">
              <h3 className="font-mono text-sm font-medium">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.description[locale]}</p>
            </div>
          ))}
        </div>
      ) : null}

      {sections.length > 0 ? (
        <div className="mt-10 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
          {sections.map((s) => (
            <section key={s.label}>
              <h2 className="mono-label">{s.label}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.value}</p>
            </section>
          ))}
        </div>
      ) : null}

      {project.links && project.links.length > 0 ? (
        <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-8">
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-accent"
            >
              {l.label} <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      ) : null}
    </Container>
  );
}
