'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const dishes = [
  {
    name: 'Birria de Res',
    subtitle: 'Our most loved dish',
    desc: 'Slow-braised beef on nixtamalized handmade tortillas with rich consommé for dipping. The dish everyone comes back for.',
    img: '/images/photo_04.jpg',
    tag: 'Signature',
  },
  {
    name: 'Carne Asada',
    subtitle: 'From the grill',
    desc: 'Perfectly seasoned skirt steak, grilled over open flame. Served with fresh handmade tortillas and house salsas.',
    img: '/images/photo_08.jpg',
    tag: 'Fan Favorite',
  },
  {
    name: 'Enchilada Tri-Color',
    subtitle: 'A Mexican classic',
    desc: 'Three enchiladas, three sauces — red chile, green tomatillo, and rich mole. A celebration of Mexican flavors.',
    img: '/images/photo_01.jpg',
    tag: 'Must Try',
  },
]

export function SignatureDishes() {
  return (
    <section className="px-4 py-4 md:px-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 flex items-end justify-between px-1"
      >
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            What We're Known For
          </span>
          <h2 className="mt-2 font-heading text-3xl font-light md:text-4xl">
            Signature dishes
          </h2>
        </div>
        <Link
          href="/menu"
          className="group hidden items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary sm:flex"
        >
          Full Menu <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>

      {/* 3-column photo grid */}
      <div className="grid gap-3 md:grid-cols-3">
        {dishes.map((dish, i) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative min-h-[420px] overflow-hidden md:min-h-[520px]"
          >
            <Image
              src={dish.img}
              alt={dish.name}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-108"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent transition-opacity duration-500 group-hover:via-background/30" />

            {/* Tag pill */}
            <div className="absolute top-5 left-5 z-10">
              <span className="bg-primary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                {dish.tag}
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-primary">
                {dish.subtitle}
              </p>
              <h3 className="mt-2 font-heading text-3xl font-light text-foreground">
                {dish.name}
              </h3>
              {/* Description slides up on hover */}
              <div className="overflow-hidden">
                <p className="mt-3 translate-y-4 text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  {dish.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile link */}
      <div className="mt-5 text-center sm:hidden">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary"
        >
          See Full Menu →
        </Link>
      </div>
    </section>
  )
}
