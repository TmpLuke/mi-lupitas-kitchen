'use client'

import { motion } from 'framer-motion'

const words = [
  'Pão de Queijo',
  'Coxinha',
  'Fresh Bakery',
  'Picanha',
  'Pastel Frito',
  'Rice & Beans',
  'Hot Lunch',
  'Empanadas',
]

export function MarqueeBand() {
  return (
    <section className="overflow-hidden border-y border-border bg-card py-5 md:py-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex"
      >
        <div className="animate-marquee flex shrink-0">
          {[...words, ...words].map((word, i) => (
            <div key={i} className="flex shrink-0 items-center gap-6 px-6 md:gap-10 md:px-10">
              <span className="font-heading text-xl font-light text-foreground md:text-2xl lg:text-3xl">
                {word}
              </span>
              <span className="text-sm text-primary">✦</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0" aria-hidden="true">
          {[...words, ...words].map((word, i) => (
            <div key={i} className="flex shrink-0 items-center gap-6 px-6 md:gap-10 md:px-10">
              <span className="font-heading text-xl font-light text-foreground md:text-2xl lg:text-3xl">
                {word}
              </span>
              <span className="text-sm text-primary">✦</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
