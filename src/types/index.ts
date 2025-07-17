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
};

export type Article = {
  id: number;
  title: string;
  summary: string;
  slug: string; // pour l'URL, ex: /articles/mon-premier-article
};