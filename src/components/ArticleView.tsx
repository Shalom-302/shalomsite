import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { PostMeta } from "@/types";
import { getPostBody } from "@/content/posts/registry";
import { Container } from "@/components/ui/blocks";

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function ArticleView({
  post,
  locale,
  backHref,
  backLabel,
}: {
  post: PostMeta;
  locale: Locale;
  backHref: string;
  backLabel: string;
}) {
  const Body = await getPostBody(post.slug, locale);

  return (
    <Container className="py-20">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={14} /> {backLabel}
      </Link>

      <header className="mt-6 max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="mono-label">{post.category[locale]}</span>
          {post.kind ? (
            <span className="font-mono text-xs text-muted-foreground">
              · {post.kind[locale]}
            </span>
          ) : null}
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {post.title[locale]}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{post.summary[locale]}</p>
        <time className="mt-3 block font-mono text-xs text-muted-foreground">
          {formatDate(post.date, locale)}
        </time>
      </header>

      <article className="mt-10 max-w-2xl border-t border-border pt-8">
        {Body ? <Body /> : null}
      </article>
    </Container>
  );
}
