'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const dishes = [
  { image: '/images/photo_04.jpg', name: 'Birria Tacos', category: 'Signature' },
  { image: '/images/photo_08.jpg', name: 'Carne Asada', category: 'From the Grill' },
  { image: '/images/photo_06.jpg', name: 'Guacamole', category: 'Fresh Daily' },
  { image: '/images/photo_05.jpg', name: 'Elote', category: 'Street Food' },
  { image: '/images/photo_07.jpg', name: 'Al Pastor', category: 'Classic' },
  { image: '/images/photo_01.jpg', name: 'Full Spread', category: 'Feast' },
]

function DishCard({ dish, i }: { dish: typeof dishes[0]; i: number }) {
  return (
    <div className="group relative shrink-0 w-[78vw] md:w-[45vw] lg:w-[35vw]">
      <div className="image-zoom aspect-[4/5] overflow-hidden rounded-sm">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {dish.category}
        </span>
        <h3 className="mt-2 font-heading text-2xl font-light text-foreground md:text-3xl">
          {dish.name}
        </h3>
      </div>

      <div className="absolute top-6 right-6 font-heading text-6xl font-light text-foreground/10 md:text-8xl">
        {String(i + 1).padStart(2, '0')}
      </div>
    </div>
  )
}

export function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-45%'])

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Section header */}
      <div className="mb-12 px-5 md:mb-16 md:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
        >
          Our Favorites
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-heading text-4xl font-light md:text-6xl lg:text-7xl"
        >
          Made fresh,<br />
          <span className="text-primary">every single day</span>
        </motion.h2>
      </div>

      {/* Mobile: native swipe scroll */}
      <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-5 pb-6 md:hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {dishes.map((dish, i) => (
          <div key={dish.name} className="snap-start shrink-0 w-[78vw]">
            <DishCard dish={dish} i={i} />
          </div>
        ))}
        {/* trailing space so last card doesn't sit flush at edge */}
        <div className="shrink-0 w-5" />
      </div>

      {/* Desktop: scroll-driven animation */}
      <motion.div
        style={{ x }}
        className="hidden md:flex gap-6 pl-12 lg:pl-20"
      >
        {dishes.map((dish, i) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
          >
            <DishCard dish={dish} i={i} />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile swipe hint dots */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {dishes.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full bg-primary transition-all ${i === 0 ? 'w-6' : 'w-1.5 opacity-30'}`}
          />
        ))}
      </div>
    </section>
  )
}
