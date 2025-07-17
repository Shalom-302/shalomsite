import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos - Kortex',
  description: 'Découvrez mon parcours, mes compétences et ma passion pour le développement web.',
};

export default function AboutPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight">À Propos de Kortex</h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Passionné par la création d'expériences web intuitives et performantes.
        </p>
      </header>
      
      <div className="prose lg:prose-xl mx-auto text-justify">
        <p>
          Bonjour ! Je suis Kortex, un développeur web spécialisé dans l'écosystème JavaScript moderne. Ma mission est de transformer des idées complexes en applications web élégantes, rapides et robustes.
        </p>
        <p>
          Avec une solide expérience sur des technologies comme <strong>React</strong>, <strong>Next.js</strong>, et <strong>TypeScript</strong>, je construis des interfaces utilisateur qui sont non seulement belles mais aussi optimisées pour la performance et le référencement (SEO).
        </p>
        <p>
          Ce site est à la fois mon portfolio et mon carnet de notes. Vous y trouverez :
        </p>
        <ul>
          <li>Mes <Link href="/projects">projets</Link> les plus récents.</li>
          <li>Des <Link href="/formations">formations</Link> pour partager mes connaissances.</li>
          <li>Des <Link href="/articles">articles</Link> sur des sujets qui me passionnent.</li>
        </ul>
        <p>
          N'hésitez pas à me contacter si vous avez un projet en tête ou si vous souhaitez simplement discuter technologie.
        </p>
      </div>
    </div>
  );
}