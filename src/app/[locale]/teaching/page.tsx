import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, FileText, GraduationCap, Play, Video } from "lucide-react";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { teaching } from "@/content/teaching";
import type { TeachingItem } from "@/types";
import { Container, PageHeader } from "@/components/ui/blocks";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.teaching.title, description: dict.teaching.intro };
}

const ICONS: Record<TeachingItem["kind"], typeof BookOpen> = {
  program: GraduationCap,
  course: BookOpen,
  tutorial: Play,
  resource: FileText,
  video: Video,
  pdf: FileText,
};

export default async function TeachingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);

  return (
    <Container className="py-20">
      <PageHeader label="teaching" title={dict.teaching.title} intro={dict.teaching.intro} />
      <div className="grid gap-5 sm:grid-cols-2">
        {teaching.map((t, i) => {
          const Icon = ICONS[t.kind];
          const isLink = Boolean(t.href);
          const inner = (
            <>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Icon size={18} className="text-muted-foreground" />
                  <span className="mono-label">{t.kind}</span>
                </div>
                {isLink ? <ArrowUpRight size={16} className="text-muted-foreground" /> : null}
              </div>
              <h2 className="mt-3 font-medium tracking-tight">{t.title[locale]}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.description[locale]}</p>
            </>
          );
          return (
            <Reveal key={t.title.en} delay={i * 0.04}>
              {isLink ? (
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-xl border border-border p-6 transition-colors hover:border-foreground/30 hover:bg-accent"
                >
                  {inner}
                </a>
              ) : (
                <div className="flex h-full flex-col rounded-xl border border-border p-6">
                  {inner}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
