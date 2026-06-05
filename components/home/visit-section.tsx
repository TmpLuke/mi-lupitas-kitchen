'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'
import { business } from '@/lib/data'

export function VisitSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo_08.jpg"
          alt="Authentic Mexican food at Mi Lupita's Kitchen"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 grid min-h-[80vh] lg:grid-cols-2">
        {/* Left: Info */}
        <div className="flex flex-col justify-center px-5 py-20 md:px-12 lg:px-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
          >
            Visit Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-light leading-tight md:text-5xl lg:text-6xl"
          >
            Come hungry,<br />
            <span className="text-primary">leave happy</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Location
                </div>
                <div className="mt-1 text-foreground">{business.address}</div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Hours
                </div>
                <div className="mt-1 text-foreground">
                  Tue–Sun: 10am – 10pm<br />
                  Monday: Closed
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Call Us
                </div>
                <a href={`tel:${business.phone}`} className="mt-1 text-foreground hover:text-primary">
                  {business.phone}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              Get Directions
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-border px-8 py-4 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Right: Large typography */}
        <div className="hidden items-center justify-center lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <div className="font-heading text-[10rem] font-light leading-none text-primary/20 xl:text-[14rem]">
              M
            </div>
            <div className="-mt-8 font-heading text-2xl font-light tracking-[0.5em] text-foreground">
              LUPITA&apos;S
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
