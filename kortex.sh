#!/bin/bash

# Créer les dossiers
mkdir -p public/images
mkdir -p src/app/projects
mkdir -p src/app/formations
mkdir -p src/app/articles
mkdir -p src/app/about
mkdir -p src/components
mkdir -p src/styles

# Fichiers de pages
touch src/app/page.tsx
touch src/app/layout.tsx
touch src/app/projects/page.tsx
touch src/app/formations/page.tsx
touch src/app/articles/page.tsx
touch src/app/about/page.tsx

# Fichiers de composants
touch src/components/Header.tsx
touch src/components/Footer.tsx
touch src/components/Hero.tsx
touch src/components/ProjectCard.tsx
touch src/components/FormationCard.tsx
touch src/components/ArticlePreview.tsx

# Fichier de styles globaux
echo -e "@tailwind base;\n@tailwind components;\n@tailwind utilities;" > src/styles/globals.css

# Configs
touch .eslintrc.json
touch next.config.js
touch tailwind.config.js

# tailwind.config.js exemple
cat <<EOT > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOT

echo "✅ Structure Next.js App Router + Tailwind CSS créée avec succès."
