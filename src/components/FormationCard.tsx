import { Formation } from '@/types';
import { Play, Clock } from 'lucide-react';
import Link from 'next/link';

type FormationCardProps = {
  formation: Formation;
};

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
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
        <Play className="text-white" size={48} />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${badgeColor}`}>
            {formation.level}
          </span>
        </div>
        {formation.price && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-bold text-gray-800">{formation.price}</span>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {formation.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {formation.description}
        </p>

        {/* Métadonnées */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          {formation.duration && (
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {formation.duration}
            </span>
          )}
          {formation.videoCount && (
            <span className="flex items-center gap-1">
              <Play size={14} />
              {formation.videoCount} vidéos
            </span>
          )}
        </div>

        {/* Bouton d&apos;action */}
        {formation.videoUrl && (
          <Link
            href={formation.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Play size={18} />
            Voir la formation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
