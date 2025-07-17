// D:/KORTEX/SRC/components/ProjectCard.tsx
import { Project } from '@/types';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} className="block border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
    </Link>
  );
}