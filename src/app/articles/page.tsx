import type { Metadata } from 'next';
import { Article } from '@/types';
import ArticlePreview from '@/components/ArticlePreview';

export const metadata: Metadata = {
  title: 'Articles - Kortex AI',
  description: 'Mes analyses et tutoriels sur l&apos;IA et les technologies modernes.',
};

const realArticles: Article[] = [
  { 
    id: 1, 
    title: 'Guide complet de ChatGPT pour les développeurs', 
    summary: 'Comment intégrer efficacement l&apos;API OpenAI dans vos projets web avec des exemples concrets.',
    slug: 'https://openai.com/blog/chatgpt-api',
    category: 'IA',
    readTime: '8 min',
    publishedAt: '2024-01-15'
  },
  { 
    id: 2, 
    title: 'Next.js 14 et les Server Actions expliqués', 
    summary: 'Découvrez les nouvelles fonctionnalités révolutionnaires de Next.js 14 avec des cas d&apos;usage pratiques.',
    slug: 'https://nextjs.org/blog/next-14',
    category: 'Web Dev',
    readTime: '12 min',
    publishedAt: '2024-01-10'
  },
  { 
    id: 3, 
    title: 'Créer un chatbot IA avec Vercel AI SDK', 
    summary: 'Tutorial step-by-step pour construire un assistant IA personnalisé avec les derniers outils.',
    slug: 'https://vercel.com/blog/ai-sdk-3-generative-ui',
    category: 'IA',
    readTime: '15 min',
    publishedAt: '2024-01-05'
  },
  { 
    id: 4, 
    title: 'Tailwind CSS v4 : Les nouveautés qui changent tout', 
    summary: 'Analyse approfondie des nouvelles fonctionnalités et améliorations de performance.',
    slug: 'https://tailwindcss.com/blog/tailwindcss-v4-alpha',
    category: 'CSS',
    readTime: '6 min',
    publishedAt: '2023-12-28'
  },
  { 
    id: 5, 
    title: 'Déployer une app IA sur Vercel en 5 minutes', 
    summary: 'Guide rapide pour mettre en production votre application d&apos;intelligence artificielle.',
    slug: 'https://vercel.com/guides/deploying-nextjs-with-vercel',
    category: 'DevOps',
    readTime: '5 min',
    publishedAt: '2023-12-20'
  }
];

export default function ArticlesPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Blog Tech
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Mes analyses et découvertes sur l&apos;IA et le développement moderne
        </p>
      </header>

      <div className="space-y-8">
        {realArticles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
