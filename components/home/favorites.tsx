'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Flame } from 'lucide-react'
import { favorites } from '@/lib/data'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/reveal'

export function Favorites() {
  return (
    <section className="grain bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="flex flex-col items-end justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Most Loved
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
              Customer favorites
            </h2>
            <p className="mt-3 max-w-md text-pretty text-muted-foreground">
              The dishes our regulars rave about, straight from the reviews.
            </p>
          </div>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            See full menu
            <ArrowRight
              width={16}
              height={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((f) => (
            <StaggerItem key={f.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={f.img || '/placeholder.svg'}
                    alt={f.name}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    <Flame width={13} height={13} />
                    Loved {f.mentions}×
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 p-5">
                  <h3 className="font-heading text-xl font-semibold">
                    {f.name}
                  </h3>
                  <ArrowRight
                    width={18}
                    height={18}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
