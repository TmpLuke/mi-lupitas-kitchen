'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed background with parallax zoom */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/images/photo_01.jpg"
          alt="Minas Grill bakery counter with fresh bread"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </motion.div>

      {/* Content with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 py-6 md:px-12 lg:px-20"
      >
        {/* Top: Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-4 pt-20 text-xs font-medium uppercase tracking-[0.3em] text-primary"
        >
          <span className="h-px w-12 bg-primary" />
          Brazilian Comfort Food
        </motion.div>

        {/* Center: Giant stacked typography */}
        <div className="flex flex-1 flex-col justify-center py-12">
          <h1 className="font-heading text-[clamp(4rem,18vw,14rem)] font-light leading-[0.85] tracking-tight">
            <motion.span
              className="block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            >
              Minas
            </motion.span>
            <motion.span
              className="block text-primary"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            >
              Grill
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Where every dish tells the story of Minas Gerais.
            Handcrafted with love since 2015.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              <span>View Menu</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-border px-8 py-4 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Visit Us
            </Link>
          </motion.div>
        </div>

        {/* Bottom: Location + scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex items-end justify-between pb-4"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Est. 2015 — Eatontown, NJ
          </div>
          <motion.button
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="flex flex-col items-center gap-2"
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-4 w-4 text-primary" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
