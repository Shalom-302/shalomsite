"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => null,
});

/** Contained, prominent 3D canvas for the hero (right column / mobile block). */
export function HeroCanvas() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]"
    >
      <Hero3D />
    </div>
  );
}
