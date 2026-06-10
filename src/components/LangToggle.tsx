"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function LangToggle({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    const segments = pathname.split("/");
    // segments[0] is "" (leading slash), segments[1] is the current locale
    segments[1] = next;
    const target = segments.join("/") || `/${next}`;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
    router.push(target);
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-md border border-border font-mono text-xs"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale}
          className={`h-9 px-2.5 uppercase transition-colors first:rounded-l-md last:rounded-r-md ${
            l === locale
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:bg-accent"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
