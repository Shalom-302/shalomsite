import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { openSource } from "@/content/openSource";
import { Container, PageHeader } from "@/components/ui/blocks";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.openSource.title, description: dict.openSource.intro };
}

export default async function OpenSourcePage({
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
        label="open source"
        title={dict.openSource.title}
        intro={dict.openSource.intro}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {openSource.map((o, i) => (
          <Reveal key={o.name} delay={i * 0.05}>
            <div className="flex h-full flex-col rounded-xl border border-border p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-lg font-medium">{o.name}</h2>
                {o.href ? (
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={o.name}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {o.tagline[locale]}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {o.description[locale]}
              </p>
              {o.status ? (
                <span className="mt-4 font-mono text-xs text-muted-foreground">
                  {o.status[locale]}
                </span>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
