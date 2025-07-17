// D:/KORTEX/SRC/app/projects/page.tsx
import type { Metadata } from 'next';
import { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Mes Projets - Kortex',
  description: 'Découvrez la liste de mes projets web.',
};

// Mock data: dans une vraie app, ces données viendraient d'une API ou d'une base de données
const mockProjects: Project[] = [
  { id: 1, title: 'Site E-commerce', description: 'Une plateforme complète avec Next.js et Stripe.', link: '#' },
  { id: 2, title: 'Application de Tâches', description: 'Un gestionnaire de tâches collaboratif en temps réel.', link: '#' },
  { id: 3, title: 'Blog Personnel', description: 'Un blog statique ultra-rapide avec Astro.', link: '#' },
];

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}