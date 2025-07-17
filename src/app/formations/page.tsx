// D:/KORTEX/SRC/app/formations/page.tsx

import type { Metadata } from 'next';
import { Formation } from '@/types';
import FormationCard from '@/components/FormationCard';

export const metadata: Metadata = {
  title: 'Nos Formations - Kortex',
  description: 'Découvrez toutes nos formations sur le développement web.',
};

// Mock data pour les formations
const mockFormations: Formation[] = [
  { id: 1, title: 'React pour les Débutants', description: 'Apprenez les bases de React, du JSX aux Hooks.', level: 'Débutant' },
  { id: 2, title: 'Maîtriser Next.js', description: 'Passez au niveau supérieur avec le rendu serveur et les App Components.', level: 'Intermédiaire' },
  { id: 3, title: 'TypeScript Avancé', description: 'Explorez les types génériques, les décorateurs et les types conditionnels.', level: 'Avancé' },
  { id: 4, title: 'Tailwind CSS de A à Z', description: 'Construisez des interfaces modernes et responsives sans quitter votre HTML.', level: 'Débutant' },
];

export default function FormationsPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Nos Formations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockFormations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </div>
    </div>
  );
}