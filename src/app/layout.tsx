// D:/KORTEX/SRC/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // L'alias '@/' pointe vers le dossier src/
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kortex - Bienvenue",
  description: "Portfolio et blog par Kortex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen container mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}