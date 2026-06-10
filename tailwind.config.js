/** @type {import('tailwindcss').Config} */
// Tailwind v4 derives its theme from CSS (@theme in src/app/globals.css).
// This file only declares content sources and the dark-mode strategy.
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{mdx}",
  ],
};
