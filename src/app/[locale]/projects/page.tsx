import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { projects } from "@/content/projects";
import { Badge, Container, PageHeader } from "@/components/ui/blocks";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.projects.title, description: dict.projects.intro };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);
  const base = `/${locale}`;

  return (
    <Container className="py-20">
      <PageHeader label="projects" title={dict.projects.title} intro={dict.projects.intro} />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.04} className={p.featured ? "md:col-span-2" : ""}>
            <Link
              href={`${base}/projects/${p.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30 hover:bg-accent"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight">{p.name}</h2>
                {p.featured ? (
                  <span className="mono-label">{dict.common.featured}</span>
                ) : null}
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {p.tagline[locale]}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {p.description[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 6).map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {dict.common.readMore}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
