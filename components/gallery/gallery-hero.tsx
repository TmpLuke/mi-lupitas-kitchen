'use client'

import { motion } from 'framer-motion'

export function GalleryHero() {
  return (
    <section className="relative flex min-h-[40vh] flex-col justify-end px-5 pb-12 pt-32 md:min-h-[50vh] md:px-12 md:pb-16 lg:px-20">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
      >
        A Feast for the Eyes
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 font-heading text-5xl font-light md:text-6xl lg:text-7xl"
      >
        Gallery
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg"
      >
        Handmade tortillas, sizzling grills and authentic Mexican flavors — take a look at what awaits you.
      </motion.p>
    </section>
  )
}
