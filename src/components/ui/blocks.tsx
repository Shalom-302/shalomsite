import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5", className)}>{children}</div>
  );
}

export function MonoLabel({ children }: { children: ReactNode }) {
  return <span className="mono-label">{children}</span>;
}

export function SectionHeading({
  label,
  title,
  description,
  action,
}: {
  label?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {label ? <MonoLabel>{label}</MonoLabel> : null}
        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function Card({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const base = cn(
    "group rounded-xl border border-border bg-card p-6 transition-colors",
    href && "hover:border-foreground/30 hover:bg-accent",
    className,
  );
  if (href) {
    const external = href.startsWith("http") || href.startsWith("/") === false;
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={base}
      >
        {children}
      </Link>
    );
  }
  return <div className={base}>{children}</div>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function PageHeader({
  label,
  title,
  intro,
}: {
  label?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <header className="mb-12">
      {label ? <MonoLabel>{label}</MonoLabel> : null}
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>
      ) : null}
    </header>
  );
}
