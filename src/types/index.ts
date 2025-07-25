// D:/KORTEX/SRC/types/index.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export type Formation = {
  id: number;
  title: string;
  description: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration?: string;
  videoCount?: number;
  price?: string;
  thumbnail?: string;
  videoUrl?: string;
};

export type Article = {
  id: number;
  title: string;
  summary: string;
  slug: string;
  category: string;
  readTime: string;
  publishedAt: string;
};
