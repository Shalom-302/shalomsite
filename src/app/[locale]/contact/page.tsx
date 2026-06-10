import type { Metadata } from "next";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/content/site";
import { Container, PageHeader } from "@/components/ui/blocks";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.contact.title, description: dict.contact.intro };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);
  const c = dict.contact;

  const channels = [
    { icon: Mail, label: c.emailLabel, value: site.email, href: `mailto:${site.email}` },
    { icon: Github, label: c.githubLabel, value: `@${site.githubUser}`, href: site.github },
    { icon: Linkedin, label: c.linkedinLabel, value: "Shalom Tehe", href: site.linkedin },
  ];

  return (
    <Container className="py-20">
      <PageHeader label="contact" title={c.title} intro={c.intro} />

      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((ch) => {
          const Icon = ch.icon;
          const external = ch.href.startsWith("http");
          return (
            <a
              key={ch.label}
              href={ch.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-xl border border-border p-6 transition-colors hover:border-foreground/30 hover:bg-accent"
            >
              <div className="flex items-center gap-4">
                <Icon size={20} className="text-muted-foreground" />
                <div>
                  <p className="mono-label">{ch.label}</p>
                  <p className="mt-0.5 font-medium">{ch.value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          );
        })}
        <div className="flex items-center gap-4 rounded-xl border border-border p-6">
          <MapPin size={20} className="text-muted-foreground" />
          <div>
            <p className="mono-label">{c.locationLabel}</p>
            <p className="mt-0.5 font-medium">{site.location[locale]}</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <Mail size={16} /> {c.emailCta}
        </a>
      </div>
    </Container>
  );
}
