import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { postsBySection } from "@/content/posts";
import { Card, Container, PageHeader } from "@/components/ui/blocks";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.lab.title, description: dict.lab.intro };
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);
  const posts = postsBySection("lab");

  return (
    <Container className="py-20">
      <PageHeader label="lab" title={dict.lab.title} intro={dict.lab.intro} />
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Card href={`/${locale}/lab/${p.slug}`} className="h-full">
              <div className="flex items-center gap-3">
                <span className="mono-label">{p.category[locale]}</span>
                {p.kind ? (
                  <span className="font-mono text-xs text-muted-foreground">
                    · {p.kind[locale]}
                  </span>
                ) : null}
              </div>
              <h2 className="mt-2 font-medium tracking-tight">{p.title[locale]}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.summary[locale]}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
