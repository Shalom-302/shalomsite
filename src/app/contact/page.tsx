// src/app/contact/page.tsx
import type { Metadata } from 'next';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact - Kortex AI',
  description: 'Contactez-moi pour vos projets IA ou questions techniques.',
};

export default function ContactPage() {
  const whatsappNumber = "+2250712116258"; // Remplacez par votre numéro
  const whatsappMessage = "Bonjour Kortex, je souhaite discuter d'un projet IA...";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="py-20 max-w-4xl mx-auto text-white">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Contactez-moi
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Discutons de votre prochain projet 
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Envoyez un message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900"
                placeholder="Projet IA, Formation, Collaboration..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none text-gray-900"
                placeholder="Décrivez votre projet ou votre question..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Envoyer le message
            </button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Autres moyens de contact</h2>
          
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-colors group"
          >
            <div className="bg-green-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-green-400">WhatsApp</h3>
              <p className="text-green-300">Réponse rapide garantie</p>
              <p className="text-sm text-green-200">{whatsappNumber}</p>
            </div>
          </a>

          {/* Email */}
          <div className="flex items-center gap-4 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <div className="bg-blue-500 p-3 rounded-full text-white">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-blue-400">Email</h3>
              <p className="text-blue-300">shalomtehe219@gmail.com</p>
            </div>
          </div>

          {/* Localisation */}
          <div className="flex items-center gap-4 p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl">
            <div className="bg-purple-500 p-3 rounded-full text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-purple-400">Localisation</h3>
              <p className="text-purple-300">Ivory Coast, Remote friendly</p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="pt-6 border-t border-white/10">
            <h3 className="font-semibold text-white mb-4">Suivez-moi</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Shalom-302" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/shalomt" target="_blank" rel="noopener noreferrer"
                 className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
