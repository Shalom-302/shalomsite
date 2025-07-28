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
    title: 'Maîtriser FastAPI en 2025', 
    description: 'Formation disponible bientot.',
    level: 'Débutant',
    duration: '',
    videoCount: 30,
    price: '',
    thumbnail: '/formations/chatgpt-api.jpg',
    videoUrl: ''
  },
  { 
    id: 2, 
    title: 'Lanchain GenAI avec Python en 2025', 
    description: 'Formation disponible bientot.',
    level: 'Débutant',
    duration: '',
    videoCount: 30,
    price: '',
    thumbnail: '/formations/nextjs-14.jpg',
    videoUrl: ''
  },
  { 
    id: 3, 
    title: 'Les bases du Machine Learning avec Python en 2025', 
    description: 'Formation disponible bientot.',
    level: 'Débutant',
    duration: '',
    videoCount: 30,
    price: '',
    thumbnail: '/formations/vercel-ai.jpg',
    videoUrl: ''
  },
  { 
    id: 4, 
    title: 'Les bases du Deep Learning avec Python en 2025', 
    description: 'Formation disponible bientot.',
    level: 'Débutant',
    duration: '',
    videoCount: 30,
    price: '',
    thumbnail: '/formations/typescript-ai.jpg',
    videoUrl: ''
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
