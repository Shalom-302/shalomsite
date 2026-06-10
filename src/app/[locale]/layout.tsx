import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/content/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = isLocale(locale) ? locale : "fr";
  const title = `${site.name} · ${site.title[lang]}`;
  const description = site.tagline[lang];

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s · ${site.name}` },
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/${lang}`,
      siteName: site.name,
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);

  return (
    <html lang={typedLocale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2"
          >
            {dict.common.skipToContent}
          </a>
          <Header locale={typedLocale} dict={dict} />
          <main id="main">{children}</main>
          <Footer locale={typedLocale} dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  );
}
