'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { menu, menuAdvisory } from '@/lib/data'
import { cn } from '@/lib/utils'

export function MenuBrowser() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  const categories = ['All', ...menu.map((m) => m.category)]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menu
      .filter((c) => active === 'All' || c.category === active)
      .map((c) => ({
        ...c,
        items: q
          ? c.items.filter(
              (i) =>
                i.name.toLowerCase().includes(q) ||
                i.desc?.toLowerCase().includes(q),
            )
          : c.items,
      }))
      .filter((c) => c.items.length > 0)
  }, [active, query])

  const totalResults = filtered.reduce((n, c) => n + c.items.length, 0)

  return (
    <section className="px-5 py-12 md:px-12 md:py-20 lg:px-20">
      {/* Sticky filter bar */}
      <div className="sticky top-[72px] z-30 -mx-5 mb-12 bg-background/90 px-5 py-4 backdrop-blur-xl md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes..."
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-11 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 md:text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="tap-scale absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Live result count when searching */}
        {query && (
          <p className="mb-4 text-xs text-muted-foreground">
            {totalResults} result{totalResults !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </p>
        )}

        {/* Category tabs */}
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                'tap-scale relative shrink-0 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors',
                active === c
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {active === c && (
                <motion.span
                  layoutId="menu-tab"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {totalResults === 0 ? (
        <div className="py-20 text-center">
          <p className="font-heading text-2xl font-light">No dishes found</p>
          <p className="mt-2 text-muted-foreground">Try a different search or category.</p>
        </div>
      ) : (
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.05 }}
              >
                {/* Category header */}
                <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                      {String(catIndex + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-1 font-heading text-3xl font-light md:text-4xl">
                      {cat.category}
                    </h2>
                    {cat.note && (
                      <p className="mt-2 text-sm text-muted-foreground">{cat.note}</p>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {cat.items.length} item{cat.items.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Items grid */}
                <div className="grid gap-1 md:grid-cols-2 md:gap-x-12">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className="group flex items-start justify-between gap-4 border-b border-border/50 py-4 transition-colors hover:border-primary/30"
                    >
                      <div className="min-w-0">
                        <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
                          {item.name}
                        </h3>
                        {item.desc && (
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 font-heading text-lg font-light text-primary">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <p className="mx-auto mt-16 max-w-2xl text-center text-xs italic leading-relaxed text-muted-foreground">
        {menuAdvisory}
      </p>
    </section>
  )
}
