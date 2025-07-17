import type { Metadata } from 'next';
import { Article } from '@/types';
import ArticlePreview from '@/components/ArticlePreview';

export const metadata: Metadata = {
  title: 'Nos Articles - Kortex',
  description: 'Lisez nos articles sur les dernières tendances du développement web.',
};

// Rappel : ces données seront remplacées par un appel à une API ou une base de données.
const mockArticles: Article[] = [
  { id: 1, title: 'Pourquoi Next.js 15 change la donne', summary: 'Une analyse des nouvelles fonctionnalités comme React 19 et la mise en cache améliorée.', slug: 'pourquoi-nextjs-15' },
  { id: 2, title: 'Les Server Components expliqués simplement', summary: 'Comprenez enfin la différence entre les composants serveur et client.', slug: 'server-components-expliques' },
  { id: 3, title: '5 astuces Tailwind CSS que vous ne connaissez pas', summary: 'Optimisez votre workflow avec ces techniques peu connues.', slug: '5-astuces-tailwind-css' },
];

export default function ArticlesPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight">Blog</h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Mes pensées et découvertes sur le monde du web.
        </p>
      </header>

      <div className="space-y-10">
        {mockArticles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}