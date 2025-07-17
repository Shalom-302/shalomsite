"use client";

import { Project } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const animation = useScrollAnimation();

  return (
    <motion.div {...animation}>
      <Link href={project.link} className="block border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="mt-2 text-muted-foreground">{project.description}</p>
      </Link>
    </motion.div>
  );
}