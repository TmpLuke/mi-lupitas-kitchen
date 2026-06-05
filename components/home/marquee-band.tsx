'use client'

import { motion } from 'framer-motion'

const row1 = ['Birria Tacos', 'Handmade Tortillas', 'Carne Asada', 'Enchiladas', 'Al Pastor', 'Guacamole']
const row2 = ['BYOB Friendly', 'Live Music', 'Outdoor Seating', 'Red Bank NJ', 'Open Tue–Sun', 'Authentic Mexican']

export function MarqueeBand() {
  return (
    <section className="overflow-hidden border-y border-border bg-card">
      {/* Row 1 — left */}
      <div className="border-b border-border/50 py-4 md:py-5">
        <div className="flex">
          {[0, 1].map((idx) => (
            <div key={idx} className="animate-marquee flex shrink-0" aria-hidden={idx === 1 ? true : undefined}>
              {[...row1, ...row1].map((word, i) => (
                <div key={i} className="flex shrink-0 items-center gap-6 px-6 md:gap-10 md:px-10">
                  <span className="font-heading text-xl font-light text-foreground md:text-2xl lg:text-3xl">
                    {word}
                  </span>
                  <span className="text-primary">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right (reverse direction) */}
      <div className="py-4 md:py-5">
        <div className="flex">
          {[0, 1].map((idx) => (
            <div key={idx} className="animate-marquee-reverse flex shrink-0" aria-hidden={idx === 1 ? true : undefined}>
              {[...row2, ...row2].map((word, i) => (
                <div key={i} className="flex shrink-0 items-center gap-6 px-6 md:gap-10 md:px-10">
                  <span className="font-heading text-xl font-light text-muted-foreground md:text-2xl lg:text-3xl">
                    {word}
                  </span>
                  <span className="text-accent">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
