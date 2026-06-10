import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Download, Terminal } from "lucide-react";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { openSource } from "@/content/openSource";
import { postsBySection } from "@/content/posts";
import { teaching } from "@/content/teaching";
import { skills } from "@/content/experience";
import { Badge, Card, Container, SectionHeading } from "@/components/ui/blocks";
import { Reveal } from "@/components/Reveal";
import { HeroCanvas } from "@/components/HeroBackground";
import { RotatingWords } from "@/components/RotatingWords";
import { Marquee } from "@/components/Marquee";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);
  const h = dict.home;
  const base = `/${locale}`;

  const shaapi = projects.find((p) => p.featured)!;
  const research = postsBySection("research").slice(0, 3);
  const courses = teaching.filter((t) => t.kind === "course").slice(0, 4);
  const techs = skills.flatMap((s) => s.items);
  const docsLink = shaapi.links?.find((l) => l.label === "Documentation")?.href;

  return (
    <>
      {/* Hero: text + live 3D */}
      <section className="relative overflow-hidden border-b border-border">
        <Container className="grid min-h-[82vh] items-center gap-8 py-20 lg:grid-cols-2 lg:gap-10">
          <div>
            <Reveal>
              <span className="mono-label">{h.badge}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
                {h.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-2xl font-medium tracking-tight text-muted-foreground sm:text-3xl">
                {h.buildPrefix}{" "}
                <span className="text-foreground">
                  <RotatingWords words={h.rotating} />
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                {h.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`${base}/projects`}
                  className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  {h.ctaProjects}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={`${base}/research`}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                >
                  {h.ctaResearch}
                </Link>
                <a
                  href={site.resumePdf}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                >
                  <Download size={16} />
                  {h.ctaResume}
                </a>
              </div>
            </Reveal>
          </div>

          {/* 3D canvas */}
          <div className="relative h-[340px] w-full lg:h-[540px]">
            <HeroCanvas />
          </div>
        </Container>
      </section>

      {/* Tech marquee */}
      <Marquee items={techs} />

      {/* Featured: Shaapi — enriched */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              label={h.featuredLabel}
              title={shaapi.name}
              description={shaapi.tagline[locale]}
              action={
                docsLink ? (
                  <a
                    href={docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-accent"
                  >
                    <BookOpen size={14} /> {h.featuredDocs}
                  </a>
                ) : null
              }
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="grid gap-6 rounded-xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <p className="leading-relaxed text-muted-foreground">
                  {shaapi.description[locale]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {shaapi.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {shaapi.links?.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    >
                      {l.label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-4 font-mono text-sm">
                <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                  <Terminal size={14} />
                  <span className="text-xs">shell</span>
                </div>
                {shaapi.snippet?.map((line) => (
                  <div key={line} className="leading-7">
                    <span className="select-none text-muted-foreground">$ </span>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Features grid */}
          {shaapi.features ? (
            <div className="mt-6">
              <Reveal>
                <span className="mono-label">{h.featuresLabel}</span>
              </Reveal>
              <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {shaapi.features.map((f, i) => (
                  <Reveal key={f.title} delay={i * 0.04}>
                    <div className="h-full bg-card p-5">
                      <h3 className="font-mono text-sm font-medium">{f.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {f.description[locale]}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}

          <Reveal>
            <div className="mt-6">
              <Link
                href={`${base}/projects/${shaapi.slug}`}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.common.readMore} <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Latest research */}
      <section className="py-12">
        <Container>
          <Reveal>
            <SectionHeading
              label="research"
              title={h.researchHeading}
              description={h.researchSub}
              action={
                <Link
                  href={`${base}/research`}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {dict.common.viewAll} <ArrowRight size={14} />
                </Link>
              }
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {research.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Card href={`${base}/research/${p.slug}`} className="h-full">
                  <span className="mono-label">{p.category[locale]}</span>
                  <h3 className="mt-2 font-medium tracking-tight">{p.title[locale]}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary[locale]}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Open source */}
      <section className="py-12">
        <Container>
          <Reveal>
            <SectionHeading
              label="open source"
              title={h.openSourceHeading}
              description={h.openSourceSub}
              action={
                <Link
                  href={`${base}/open-source`}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {dict.common.viewAll} <ArrowRight size={14} />
                </Link>
              }
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {openSource.map((o, i) => (
              <Reveal key={o.name} delay={i * 0.05}>
                <Card href={o.href} className="h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono font-medium">{o.name}</h3>
                    {o.status ? (
                      <span className="text-xs text-muted-foreground">
                        {o.status[locale]}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {o.tagline[locale]}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{o.description[locale]}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Teaching */}
      <section className="py-12 pb-4">
        <Container>
          <Reveal>
            <SectionHeading
              label="teaching"
              title={h.teachingHeading}
              description={h.teachingSub}
              action={
                <Link
                  href={`${base}/teaching`}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {dict.common.viewAll} <ArrowRight size={14} />
                </Link>
              }
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((c, i) => (
              <Reveal key={c.title.en} delay={i * 0.05}>
                <div className="flex items-start justify-between rounded-xl border border-border p-5">
                  <div>
                    <h3 className="font-medium tracking-tight">{c.title[locale]}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.description[locale]}
                    </p>
                  </div>
                  <span className="ml-4 shrink-0 text-xs text-muted-foreground">
                    {dict.common.soon}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
