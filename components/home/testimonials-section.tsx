'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import { reviews } from '@/lib/data'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const featured = reviews.slice(0, 5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [featured.length])

  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-40">
      {/* Large decorative quote */}
      <div className="absolute top-12 left-8 font-heading text-[20rem] font-light leading-none text-border/30 md:left-16">
        "
      </div>

      <div className="relative z-10 px-5 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
            >
              What People Say
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-heading text-4xl font-light md:text-5xl lg:text-6xl"
            >
              Loved by<br />
              <span className="text-primary">our community</span>
            </motion.h2>
          </div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden flex-col items-end md:flex"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="mt-2 text-right">
              <span className="font-heading text-3xl font-light">4.8</span>
              <span className="ml-2 text-sm text-muted-foreground">on Google</span>
            </div>
          </motion.div>
        </div>

        {/* Testimonial carousel */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="max-w-4xl"
            >
              <blockquote className="font-heading text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-4xl">
                "{featured[current].text}"
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-medium text-primary-foreground">
                  {featured[current].author[0]}
                </div>
                <div>
                  <div className="font-medium text-foreground">{featured[current].author}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex">
                      {[...Array(featured[current].rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <span>·</span>
                    <span>{featured[current].date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="absolute right-0 bottom-0 flex gap-2">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 transition-all duration-300 ${
                  i === current ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
