import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { site } from "@/content/site";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = 2026;
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href={`/${locale}`} className="font-semibold tracking-tight">
            Shalom Tehe
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">{dict.footer.tagline}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {year} Shalom Tehe. {dict.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github size={16} />
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
