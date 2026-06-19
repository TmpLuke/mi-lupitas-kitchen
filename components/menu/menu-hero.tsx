'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function MenuHero() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden pt-24 md:min-h-[60vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu_tacos.jpg"
          alt="Authentic Mexican tacos at Mi Lupita's Kitchen"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[50vh] flex-col justify-end px-5 pb-12 md:min-h-[60vh] md:px-12 md:pb-20 lg:px-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
        >
          Made Fresh Daily
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 font-heading text-5xl font-light md:text-6xl lg:text-7xl"
        >
          Our Menu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg"
        >
          From golden empanadas to hearty combos and homemade desserts — something for every craving.
        </motion.p>
      </div>
    </section>
  )
}
