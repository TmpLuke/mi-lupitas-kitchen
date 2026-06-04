'use client'

import { motion } from 'framer-motion'

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pb-12 pt-28 sm:min-h-[58vh]">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={image || '/placeholder.svg'} alt={imageAlt} className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/55 to-foreground/25" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-accent"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 max-w-3xl text-balance font-heading text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-background/85"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
