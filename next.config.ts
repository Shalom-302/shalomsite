import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Standalone output: .next/standalone ships a minimal server.js + only the
  // runtime deps, for a light Docker image (see Dockerfile).
  output: "standalone",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

// Plugins are referenced by name (string form) so the same config works with
// both Webpack and Turbopack — Turbopack cannot serialize imported functions.
const withMDX = createMDX({
  options: {
    // String form is required for Turbopack; cast to satisfy @next/mdx's
    // function-only Plugin types (resolved by name at build time).
    remarkPlugins: [["remark-gfm"]] as never,
    rehypePlugins: [["rehype-slug"]] as never,
  },
});

export default withMDX(nextConfig);
