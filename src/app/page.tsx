// D:/KORTEX/SRC/app/page.tsx
import Link from 'next/link';

// Ce composant est un "Server Component" par défaut.
// Pas besoin de 'use client'. C'est rapide et bon pour le SEO.
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Bienvenue sur Kortex
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Explorez mes projets, découvrez mes formations et lisez mes articles sur les dernières technologies web.
      </p>
      <div className="mt-8 flex gap-4">
        <Link 
          href="/projects" 
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
        >
          Voir les projets
        </Link>
        <Link 
          href="/articles"
          className="bg-gray-100 text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
        >
          Lire les articles
        </Link>
      </div>
    </div>
  );
}