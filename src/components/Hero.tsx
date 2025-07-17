"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="py-20 text-center space-y-6">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Je suis Kortex, Développeur IA
      </motion.h1>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Créateur de modèles IA, formateur en Deep Learning et bâtisseur de solutions pour l'Afrique.
      </p>
      <Button asChild>
        <a href="/projects">Voir mes projets</a>
      </Button>
    </section>
  )
}
