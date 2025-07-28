// src/app/about/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Code2, Sparkles, Target, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos - Kortex',
  description: 'Découvrez mon parcours, mes compétences et ma passion pour le développement web.',
};

export default function AboutPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto text-white">
      <header className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full">
            <Brain className="text-white" size={48} />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          À Propos de Kortex
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Développeur IA passionné par l&apos;innovation et la création d&apos;expériences numériques exceptionnelles
        </p>
      </header>
      
      {/* Présentation principale */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-yellow-400" size={24} />
          <h2 className="text-2xl font-bold">Qui suis-je ?</h2>
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Salut ! Je suis <strong className="text-white">Kortex</strong>, développeur spécialisé dans l&apos;intelligence artificielle et les technologies web modernes.
          </p>
          <p>
            Ma mission ? Transformer des idées complexes en applications simples, performantes et accessibles à tous.
          </p>
        </div>
      </div>

      {/* Compétences */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-blue-400" size={24} />
            <h3 className="text-xl font-bold">Technologies</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong>Frontend:</strong> React, Next.js, TypeScript</li>
            <li>• <strong>IA:</strong> Langchain GenAI, Machine Learning ,Deep Learning Pytorch</li>
            <li>• <strong>Styling:</strong> Tailwind CSS, Framer Motion</li>
            <li>• <strong>Backend:</strong> FastAPI Python, Gin Go</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-purple-400" size={24} />
            <h3 className="text-xl font-bold">Spécialités</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• Applications IA conversationnelles</li>
            <li>• Interfaces utilisateur modernes</li>
            <li>• Optimisation des performances</li>
            <li>• Formation et mentorat</li>
          </ul>
        </div>
      </div>

      {/* Ce que vous trouverez */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <Users className="text-green-400" size={24} />
          <h2 className="text-2xl font-bold">Ce que vous trouverez ici</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-purple-500/20 p-3 rounded-full w-fit mx-auto mb-3">
              <Code2 className="text-purple-400" size={24} />
            </div>
            <h4 className="font-semibold mb-2">Projets</h4>
            <p className="text-sm text-gray-300">Mes dernières créations et expérimentations</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500/20 p-3 rounded-full w-fit mx-auto mb-3">
              <Zap className="text-blue-400" size={24} />
            </div>
            <h4 className="font-semibold mb-2">Formations</h4>
            <p className="text-sm text-gray-300">Tutoriels vidéo pour maîtriser l&apos;IA</p>
          </div>
          <div className="text-center">
            <div className="bg-green-500/20 p-3 rounded-full w-fit mx-auto mb-3">
              <Brain className="text-green-400" size={24} />
            </div>
            <h4 className="font-semibold mb-2">Articles</h4>
            <p className="text-sm text-gray-300">Analyses et découvertes tech</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-300 mb-6">
          Prêt à collaborer sur votre prochain projet IA ?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Contactez-moi
          </Link>
          <Link 
            href="/projects"
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Voir mes projets
          </Link>
        </div>
      </div>
    </div>
  );
}
