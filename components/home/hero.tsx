'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, Star, MapPin } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed background with parallax zoom */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/images/menu_hero.jpg"
          alt="Mi Lupita's Kitchen — authentic Mexican food in Red Bank, NJ"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Left-to-right gradient so text is readable but photo shows on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        {/* Subtle warm tint */}
        <div className="absolute inset-0 bg-primary/8" />
      </motion.div>

      {/* Floating rating badge — top right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 right-5 z-20 hidden sm:flex items-center gap-3 border border-border/60 bg-background/75 px-5 py-3 backdrop-blur-md md:right-12"
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-primary text-primary" />
          ))}
        </div>
        <div className="border-l border-border pl-3">
          <div className="font-heading text-xl font-light leading-none">4.8</div>
          <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">446 Reviews</div>
        </div>
      </motion.div>

      {/* Main content — parallax out on scroll */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 py-6 md:px-12 lg:px-20"
      >
        {/* Top tagline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 pt-20 text-xs font-medium uppercase tracking-[0.35em] text-primary"
        >
          <span className="h-px w-16 bg-primary" />
          Authentic Mexican Kitchen
        </motion.div>

        {/* Giant title */}
        <div className="flex flex-1 flex-col justify-center py-10 overflow-hidden">
          <h1 className="font-heading font-light leading-[0.82] tracking-tight"
              style={{ fontSize: 'clamp(4.5rem, 19vw, 16rem)' }}>
            <motion.span
              className="block overflow-hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Mi
            </motion.span>
            <motion.span
              className="block overflow-hidden text-primary"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.25, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Lupita&apos;s
            </motion.span>
            <motion.span
              className="block overflow-hidden text-foreground/15"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Kitchen
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.9 }}
            className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Where every dish tells the story of Mexico.
            Handmade tortillas, bold salsas, and a warm welcome every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:bg-primary/85 hover:gap-5"
            >
              <span>View Menu</span>
              <span className="transition-all duration-300">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-foreground/25 px-8 py-4 text-sm font-medium uppercase tracking-wider text-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Get Directions
            </Link>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex items-end justify-between pb-4"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <MapPin className="h-3 w-3 text-primary" />
            193 Shrewsbury Ave · Red Bank, NJ
          </div>
          <motion.button
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-2"
            aria-label="Scroll down"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-4 w-4 text-primary" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
