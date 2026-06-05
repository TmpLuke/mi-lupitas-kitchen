'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { reviews } from '@/lib/data'
import Link from 'next/link'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const featured = reviews.slice(0, 6)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [featured.length])

  const prev = () => setCurrent((c) => (c - 1 + featured.length) % featured.length)
  const next = () => setCurrent((c) => (c + 1) % featured.length)

  return (
    <section className="relative overflow-hidden py-28 md:py-44">
      {/* Background photo with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo_16.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/92" />
      </div>

      {/* Large decorative quote mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-4 select-none font-heading text-[22rem] font-light leading-none text-primary/8 md:left-12"
      >
        "
      </div>

      <div className="relative z-10 px-5 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-medium uppercase tracking-[0.35em] text-primary"
            >
              What People Say
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-heading text-4xl font-light leading-tight md:text-5xl lg:text-6xl"
            >
              Loved by<br />
              <span className="text-primary">our community</span>
            </motion.h2>
          </div>

          {/* Rating display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 rounded-2xl border border-border bg-card px-7 py-5 self-start md:self-auto"
          >
            <div className="text-center">
              <div className="font-heading text-5xl font-light text-primary">4.8</div>
              <div className="mt-1 flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div className="border-l border-border pl-5">
              <div className="font-heading text-2xl font-light text-foreground">446+</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Google Reviews</div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <div className="relative min-h-[280px] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="font-heading text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-4xl">
                &ldquo;{featured[current].text}&rdquo;
              </blockquote>
              <div className="mt-10 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-medium text-primary-foreground">
                  {featured[current].author[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{featured[current].author}</div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex gap-0.5">
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
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === current ? 'w-10 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow buttons + link */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link
              href="/reviews"
              className="hidden text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary sm:block"
            >
              All Reviews →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
