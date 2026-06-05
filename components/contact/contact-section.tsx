'use client'

import { motion } from 'framer-motion'
import { business, hours } from '@/lib/data'
import { Phone, MapPin, Clock } from 'lucide-react'
import { OpenBadge } from '@/components/open-status'
import { ContactForm } from './contact-form'

export function ContactSection() {
  return (
    <section className="px-5 pb-20 md:px-12 lg:px-20">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left: Info */}
        <div className="space-y-10">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Location
                </h3>
                <p className="mt-1 text-foreground">{business.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Phone
                </h3>
                <a href={business.phoneHref} className="mt-1 text-foreground hover:text-primary">
                  {business.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Hours
                  </h3>
                  <OpenBadge />
                </div>
                <ul className="mt-3 space-y-2">
                  {hours.map((h) => {
                    const isToday = new Date().getDay() === h.dow
                    return (
                      <li
                        key={h.day}
                        className={`flex justify-between text-sm ${
                          isToday ? 'font-medium text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        <span>{h.day}</span>
                        <span>{h.open ? `${h.open} – ${h.close}` : 'Closed'}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-3"
          >
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center gap-2 border border-border px-5 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get Directions
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="overflow-hidden"
          >
            <iframe
              src={business.mapEmbed}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mi Lupita's Kitchen location"
              className="grayscale"
            />
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="border border-border bg-card p-8 md:p-10">
            <h2 className="font-heading text-2xl font-light">Send a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Questions about catering, special orders, or anything else? We&apos;d love to hear from you.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
