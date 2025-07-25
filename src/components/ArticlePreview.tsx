"use client";

import { Article } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { Clock, Calendar, Tag } from 'lucide-react';

type ArticlePreviewProps = {
  article: Article;
};

export default function ArticlePreview({ article }: ArticlePreviewProps) {
  const animation = useScrollAnimation();

  return (
    <motion.div {...animation}>
      <Link 
        href={article.slug} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group transition-all duration-300 hover:transform hover:scale-[1.02]"
      >
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                <Tag size={12} />
                {article.category}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(article.publishedAt).toLocaleDateString('fr-FR')}
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3">
            {article.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            {article.summary}
          </p>
          
          <span className="inline-flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
            Lire l&apos;article
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
