'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { business } from '@/lib/data'

export function ReviewsHero() {
  return (
    <section className="relative flex min-h-[40vh] flex-col justify-end px-5 pb-12 pt-32 md:min-h-[50vh] md:px-12 md:pb-16 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3"
      >
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {business.rating}★ · {business.reviewCount} Reviews
        </span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 font-heading text-5xl font-light md:text-6xl lg:text-7xl"
      >
        What People Say
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg"
      >
        Friendly staff, fresh food and generous portions — see why the neighborhood keeps coming back.
      </motion.p>
    </section>
  )
}
