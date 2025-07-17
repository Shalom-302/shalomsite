"use client"

import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // L'alias '@/' pointe vers le dossier src/
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simule un temps de chargement
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="fr">
      <body className={inter.className}>
        <AnimatePresence>
          {loading && <Loader />}
        </AnimatePresence>
        <Header />
        <main className="min-h-screen container mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}