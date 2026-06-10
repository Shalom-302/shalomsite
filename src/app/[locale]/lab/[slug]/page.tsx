import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { postsBySection, getPost } from "@/content/posts";
import { ArticleView } from "@/components/ArticleView";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    postsBySection("lab").map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang: Locale = isLocale(locale) ? locale : "fr";
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title[lang], description: post.summary[lang] };
}

export default async function LabPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);
  const post = getPost(slug);
  if (!post || post.section !== "lab") notFound();

  return (
    <ArticleView
      post={post}
      locale={locale}
      backHref={`/${locale}/lab`}
      backLabel={dict.lab.title}
    />
  );
}
