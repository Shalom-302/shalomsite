// src/components/Hero.tsx
"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-20 text-center space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold"
        variants={itemVariants}
      >
        Je suis Kortex, Développeur IA
      </motion.h1>
      <motion.p
        className="text-muted-foreground max-w-xl mx-auto"
        variants={itemVariants}
      >
        Créateur de modèles IA, formateur en Deep Learning et bâtisseur de solutions pour l&apos;Afrique.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button asChild>
          <a href="/projects">Voir mes projets</a>
        </Button>
      </motion.div>
    </motion.section>
  )
}
