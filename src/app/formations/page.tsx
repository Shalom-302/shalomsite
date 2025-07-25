import type { Metadata } from 'next';
import { Formation } from '@/types';
import FormationCard from '@/components/FormationCard';

export const metadata: Metadata = {
  title: 'Formations Vidéo - Kortex AI',
  description: 'Formations complètes en vidéo sur l&apos;IA et le développement moderne.',
};

const videoFormations: Formation[] = [
  { 
    id: 1, 
    title: 'Maîtriser ChatGPT API en 2024', 
    description: 'Formation complète pour intégrer l&apos;IA conversationnelle dans vos applications. 12 vidéos, 4h de contenu.',
    level: 'Intermédiaire',
    duration: '4h 30min',
    videoCount: 12,
    price: '89€',
    thumbnail: '/formations/chatgpt-api.jpg',
    videoUrl: 'https://youtube.com/playlist?list=YOUR_PLAYLIST_ID'
  },
  { 
    id: 2, 
    title: 'Next.js 14 de Zéro à Expert', 
    description: 'Apprenez Next.js 14 avec les Server Components, App Router et les dernières fonctionnalités. 20 vidéos pratiques.',
    level: 'Débutant',
    duration: '8h 15min',
    videoCount: 20,
    price: '129€',
    thumbnail: '/formations/nextjs-14.jpg',
    videoUrl: 'https://youtube.com/playlist?list=YOUR_PLAYLIST_ID'
  },
  { 
    id: 3, 
    title: 'Créer des Apps IA avec Vercel AI SDK', 
    description: 'Construisez des applications d&apos;IA modernes avec streaming, embeddings et RAG. Projets concrets inclus.',
    level: 'Avancé',
    duration: '6h 45min',
    videoCount: 15,
    price: '149€',
    thumbnail: '/formations/vercel-ai.jpg',
    videoUrl: 'https://youtube.com/playlist?list=YOUR_PLAYLIST_ID'
  },
  { 
    id: 4, 
    title: 'TypeScript pour l&apos;IA - Masterclass', 
    description: 'Maîtrisez TypeScript dans le contexte de l&apos;IA : types avancés, inférence et patterns spécialisés.',
    level: 'Avancé',
    duration: '5h 20min',
    videoCount: 18,
    price: '99€',
    thumbnail: '/formations/typescript-ai.jpg',
    videoUrl: 'https://youtube.com/playlist?list=YOUR_PLAYLIST_ID'
  }
];

export default function FormationsPage() {
  return (
    <div className="py-20">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Formations Vidéo
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Apprenez l&apos;IA et le développement moderne avec mes formations vidéo complètes et pratiques
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {videoFormations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </div>
    </div>
  );
}
