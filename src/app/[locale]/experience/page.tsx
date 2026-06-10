import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { experiences, education } from "@/content/experience";
import { Container, PageHeader } from "@/components/ui/blocks";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.experience.title, description: dict.experience.intro };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);

  return (
    <Container className="py-20">
      <PageHeader
        label="experience"
        title={dict.experience.title}
        intro={dict.experience.intro}
      />

      <div className="space-y-4">
        {experiences.map((xp, i) => (
          <Reveal key={xp.company} delay={i * 0.04}>
            <article className="rounded-xl border border-border p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">{xp.company}</h2>
                  <p className="text-muted-foreground">{xp.role[locale]}</p>
                </div>
                <span className="text-right font-mono text-xs text-muted-foreground">
                  {xp.period[locale]}
                  {xp.current ? " ●" : ""}
                  {xp.location ? (
                    <span className="mt-0.5 block text-[0.7rem]">{xp.location[locale]}</span>
                  ) : null}
                </span>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {xp.missions[locale].map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <h2 className="mono-label mt-14 block">{dict.experience.educationHeading}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <Reveal key={e.school}>
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-medium tracking-tight">{e.degree[locale]}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {e.date[locale]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
