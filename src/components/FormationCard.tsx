// D:/KORTEX/SRC/components/FormationCard.tsx

import { Formation } from '@/types';

type FormationCardProps = {
  formation: Formation;
};

// Fonction pour associer un niveau à une couleur de badge
const getBadgeColor = (level: Formation['level']) => {
  switch (level) {
    case 'Débutant':
      return 'bg-green-100 text-green-800';
    case 'Intermédiaire':
      return 'bg-blue-100 text-blue-800';
    case 'Avancé':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function FormationCard({ formation }: FormationCardProps) {
  const badgeColor = getBadgeColor(formation.level);

  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">{formation.title}</h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${badgeColor}`}>
                {formation.level}
            </span>
        </div>
        <p className="mt-2 text-muted-foreground">{formation.description}</p>
      </div>
      {/* On pourrait ajouter un bouton ou un lien ici plus tard */}
    </div>
  );
}