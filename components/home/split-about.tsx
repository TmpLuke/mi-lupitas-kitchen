'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export function SplitAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="relative py-24 md:py-40">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center px-5 md:px-12 lg:px-20 lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Our Story
            </span>
            
            <h2 className="mt-6 font-heading text-4xl font-light leading-[1.1] md:text-5xl lg:text-6xl">
              A taste of home,<br />
              <span className="text-primary">far from home</span>
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="text-base leading-relaxed md:text-lg">
                Rooted in Mexican tradition, Mi Lupita&apos;s Kitchen brings the real flavors of
                Mexico to Red Bank, NJ. Every recipe carries generations of family tradition —
                from our nixtamalized handmade tortillas to slow-braised birria that warms the soul.
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                Our handmade tortillas are pressed fresh every day. Our grill sizzles with
                perfectly seasoned carne asada, al pastor and chorizo. And our kitchen fills
                the room with the aromas that make Mexican cuisine unforgettable.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:text-primary"
              >
                <span>Explore Menu</span>
                <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:text-primary"
              >
                <span>View Gallery</span>
                <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8"
          >
            {[
              { value: '446+', label: 'Google Reviews' },
              { value: '50+', label: 'Menu Items' },
              { value: '4.8', label: 'Google Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-light text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Image with parallax + floating cards */}
        <div className="relative px-5 md:px-12 lg:px-0">
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[3/4] overflow-hidden lg:aspect-auto lg:h-[82vh]"
          >
            <Image
              src="/images/interior_04.jpg"
              alt="Mi Lupita's Kitchen restaurant — authentic Mexican food in Red Bank, NJ"
              fill
              className="object-cover"
            />
            {/* Floating rating badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-6 -left-4 bg-primary p-7 text-primary-foreground md:-left-8 md:p-10"
            >
              <div className="font-heading text-5xl font-light md:text-6xl">4.8★</div>
              <div className="mt-1.5 text-xs uppercase tracking-[0.2em]">on Google</div>
            </motion.div>

            {/* Floating mini photo card — top right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute right-4 top-8 hidden w-36 overflow-hidden border-4 border-background shadow-2xl sm:block md:w-44"
            >
              <img
                src="/images/menu_guacamole.jpg"
                alt="Fresh guacamole at Mi Lupita's Kitchen"
                className="aspect-square w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
