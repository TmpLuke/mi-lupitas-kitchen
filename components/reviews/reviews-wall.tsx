'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { reviews, business } from '@/lib/data'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const filters = [
  { label: 'All', value: 0 },
  { label: '5 Star', value: 5 },
  { label: '4 Star', value: 4 },
]

export function ReviewsWall() {
  const [filter, setFilter] = useState(0)

  const dist = useMemo(() => {
    const d: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    reviews.forEach((r) => (d[r.rating] = (d[r.rating] || 0) + 1))
    return d
  }, [])

  const shown = useMemo(
    () => (filter === 0 ? reviews : reviews.filter((r) => r.rating === filter)),
    [filter],
  )

  return (
    <section className="px-5 pb-20 md:px-12 lg:px-20">
      {/* Stats bar */}
      <div className="mb-12 grid gap-8 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-[1fr_2fr]">
        {/* Overall rating */}
        <div className="text-center md:text-left">
          <div className="font-heading text-7xl font-light text-primary">{business.rating}</div>
          <div className="mt-2 flex justify-center gap-1 md:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Based on {business.reviewCount} reviews
          </p>
        </div>

        {/* Distribution bars */}
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = dist[star] || 0
            const pct = (count / reviews.length) * 100
            return (
              <div key={star} className="flex items-center gap-4 text-sm">
                <span className="w-14 shrink-0 text-muted-foreground">{star} star</span>
                <div className="h-2 flex-1 overflow-hidden bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-primary"
                  />
                </div>
                <span className="w-8 shrink-0 text-right text-muted-foreground">{count}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-heading text-3xl font-light">All Reviews</h2>
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => setFilter(f.value)}
              className={cn(
                'px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors',
                filter === f.value
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews masonry */}
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
        {shown.map((r, i) => (
          <motion.div
            key={r.author + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="border border-border bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-primary text-xl font-medium text-primary-foreground">
                {r.author[0]}
              </div>
              <div>
                <div className="font-medium text-foreground">{r.author}</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <span>·</span>
                  <span>{r.source}</span>
                </div>
              </div>
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
              "{r.text}"
            </blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
