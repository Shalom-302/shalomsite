"use client";

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-black border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </motion.div>
  );
}
