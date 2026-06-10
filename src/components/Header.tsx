"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";

type NavKey = keyof Dictionary["nav"];

const NAV: { key: NavKey; path: string }[] = [
  { key: "about", path: "/about" },
  { key: "experience", path: "/experience" },
  { key: "projects", path: "/projects" },
  { key: "research", path: "/research" },
  { key: "openSource", path: "/open-source" },
  { key: "teaching", path: "/teaching" },
  { key: "lab", path: "/lab" },
  { key: "resume", path: "/resume" },
  { key: "contact", path: "/contact" },
];

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const href = (p: string) => `/${locale}${p}`;
  const isActive = (p: string) => pathname === href(p) || pathname.startsWith(href(p) + "/");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link
          href={href("")}
          className="flex items-baseline gap-2 font-semibold tracking-tight"
        >
          <span>Shalom Tehe</span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground sm:inline">
            ./eng
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map(({ key, path }) => (
            <Link
              key={key}
              href={href(path)}
              className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                isActive(path)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dict.nav[key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangToggle locale={locale} label={dict.common.toggleLanguage} />
          </div>
          <ThemeToggle label={dict.common.toggleTheme} />
          <button
            type="button"
            aria-label={dict.common.toggleMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="mx-auto max-w-5xl px-5 py-3">
              <div className="grid grid-cols-2 gap-1">
                {NAV.map(({ key, path }) => (
                  <Link
                    key={key}
                    href={href(path)}
                    className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
                      isActive(path) ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {dict.nav[key]}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-border pt-3 sm:hidden">
                <LangToggle locale={locale} label={dict.common.toggleLanguage} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
