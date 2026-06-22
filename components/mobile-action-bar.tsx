'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Navigation, UtensilsCrossed } from 'lucide-react'
import { business } from '@/lib/data'

export function MobileActionBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="pb-safe fixed inset-x-0 bottom-0 z-50 px-3 pt-3 lg:hidden"
        >
          <div className="mx-auto flex max-w-md items-stretch gap-2 rounded-2xl border border-border/60 bg-background/85 p-2 shadow-2xl backdrop-blur-xl">
            <Link
              href="/menu"
              className="tap-scale flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2.5 text-foreground"
              aria-label="View menu"
            >
              <UtensilsCrossed className="h-5 w-5 text-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Menu</span>
            </Link>

            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-scale flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2.5 text-foreground"
              aria-label="Get directions"
            >
              <Navigation className="h-5 w-5 text-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Directions</span>
            </a>

            <a
              href={business.phoneHref}
              className="tap-scale flex flex-[1.5] flex-col items-center justify-center gap-1 rounded-xl bg-primary py-2.5 text-primary-foreground"
              aria-label="Call to order"
            >
              <Phone className="h-5 w-5" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Call to Order</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
