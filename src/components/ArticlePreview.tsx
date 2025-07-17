import { Article } from '@/types';
import Link from 'next/link';

type ArticlePreviewProps = {
  article: Article;
};

export default function ArticlePreview({ article }: ArticlePreviewProps) {
  // On construit l'URL de la page de détail en utilisant le slug de l'article.
  const articleUrl = `/articles/${article.slug}`;

  return (
    <Link href={articleUrl} className="block group transition-opacity hover:opacity-75">
      <div className="border-b-2 border-gray-200 pb-6">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-lg text-gray-600">
          {article.summary}
        </p>
        <span className="mt-4 inline-block text-blue-600 font-semibold">
          Lire la suite →
        </span>
      </div>
    </Link>
  );
}