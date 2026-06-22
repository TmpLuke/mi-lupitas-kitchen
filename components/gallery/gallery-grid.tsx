'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { photos } from '@/lib/data'

export function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, prev, next])

  return (
    <section className="px-5 py-12 md:px-12 md:py-20 lg:px-20">
      {/* Asymmetric masonry grid */}
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {photos.map((p, i) => {
          // Create visual rhythm with varying heights
          const isLarge = i === 0 || i === 4 || i === 7
          const isMedium = i === 2 || i === 5
          
          return (
            <motion.button
              key={p.src}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`image-zoom shine tap-scale group relative overflow-hidden rounded-xl ${
                isLarge ? 'md:row-span-2' : isMedium ? 'md:col-span-2' : ''
              }`}
              style={{ aspectRatio: isLarge ? '3/4' : isMedium ? '16/9' : '4/3' }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
              {/* Index number on hover */}
              <div className="absolute bottom-4 left-4 font-heading text-4xl font-light text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-xl"
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="tap-scale absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation — hidden on small screens (swipe instead) */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
              className="tap-scale absolute left-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
              className="tap-scale absolute right-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image — drag to swipe on touch devices */}
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next()
                else if (info.offset.x > 80) prev()
              }}
              className="max-h-[85vh] max-w-5xl cursor-grab px-4 active:cursor-grabbing sm:px-20"
            >
              <Image
                src={photos[index].src}
                alt={photos[index].alt}
                width={1200}
                height={800}
                draggable={false}
                className="pointer-events-none max-h-[72vh] w-auto select-none object-contain"
              />
              <figcaption className="mt-5 text-center">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  {index + 1} / {photos.length}
                </span>
                <p className="mt-2 font-heading text-base font-light text-foreground md:text-lg">
                  {photos[index].alt}
                </p>
                <p className="mt-2 text-xs text-muted-foreground sm:hidden">
                  Swipe to browse
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
