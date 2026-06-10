import type { MDXComponents } from "mdx/types";

// Styling applied to MDX-rendered content (research notes, lab entries).
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2 className="mt-10 text-xl font-semibold tracking-tight" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-8 text-lg font-semibold tracking-tight" {...props} />
    ),
    p: (props) => <p className="mt-4 leading-relaxed text-muted-foreground" {...props} />,
    ul: (props) => (
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted-foreground" {...props} />
    ),
    ol: (props) => (
      <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-muted-foreground" {...props} />
    ),
    a: (props) => (
      <a className="font-medium text-foreground underline underline-offset-4" {...props} />
    ),
    code: (props) => (
      <code
        className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="mt-5 overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-sm"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="mt-5 border-l-2 border-border pl-4 italic text-muted-foreground"
        {...props}
      />
    ),
    ...components,
  };
}
