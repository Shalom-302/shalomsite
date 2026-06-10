import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { postsBySection } from "@/content/posts";
import { Container, PageHeader } from "@/components/ui/blocks";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.research.title, description: dict.research.intro };
}

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);
  const posts = postsBySection("research");

  return (
    <Container className="py-20">
      <PageHeader label="research" title={dict.research.title} intro={dict.research.intro} />

      <div className="divide-y divide-border border-y border-border">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.04}>
            <Link
              href={`/${locale}/research/${p.slug}`}
              className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="mono-label">{p.category[locale]}</span>
                  {p.kind ? (
                    <span className="font-mono text-xs text-muted-foreground">
                      · {p.kind[locale]}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-1.5 text-lg font-medium tracking-tight transition-colors group-hover:text-foreground">
                  {p.title[locale]}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.summary[locale]}</p>
              </div>
              <time className="shrink-0 font-mono text-xs text-muted-foreground">
                {formatDate(p.date, locale)}
              </time>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
