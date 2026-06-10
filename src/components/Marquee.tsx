"use client";

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden border-y border-border py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-mono text-sm text-muted-foreground"
          >
            {item}
            <span className="ml-8 text-border">/</span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused]"
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-mono text-sm text-muted-foreground"
          >
            {item}
            <span className="ml-8 text-border">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
