'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { business } from '@/lib/data'
import { OrderButton, CartButton } from '@/components/order-online'

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[60] transition-all duration-500',
          scrolled ? 'bg-background/90 backdrop-blur-xl' : 'bg-transparent',
        )}
      >
        <nav className="flex items-center justify-between px-5 py-5 md:px-12 lg:px-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <span className="font-heading text-xl font-light tracking-tight text-foreground md:text-2xl">
              Lupita&apos;s<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop nav - minimal, right-aligned */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = l.href === pathname
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'relative px-5 py-2 text-sm font-medium uppercase tracking-wider transition-colors',
                    active ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-5 bottom-0 h-px bg-primary"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Visit Us
            </a>
            <OrderButton />
            <CartButton />
          </div>

          {/* Mobile: cart + menu toggle (the bottom action bar carries "Order") */}
          <div className="flex items-center gap-1 lg:hidden">
            <CartButton />
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-10 w-10 items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative h-4 w-6">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute top-0 left-0 h-px w-full bg-foreground"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute bottom-0 left-0 h-px w-full bg-foreground"
              />
            </div>
          </button>
          </div>
        </nav>

        {/* Scroll progress line */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-px origin-left bg-border"
          />
        )}
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-background lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-5 pb-12 pt-24">
              <nav className="flex flex-col">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={l.href}
                      className={cn(
                        'block border-b border-border py-5 font-heading text-3xl font-light',
                        l.href === pathname ? 'text-primary' : 'text-foreground',
                      )}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <Link
                  href="/menu"
                  className="tap-scale flex w-full items-center justify-center gap-3 rounded-full bg-primary py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
                >
                  Order Online
                </Link>
                <a
                  href={business.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-scale flex w-full items-center justify-center gap-3 rounded-full border border-border py-4 text-sm font-medium uppercase tracking-wider text-foreground"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${business.phone}`}
                  className="tap-scale flex w-full items-center justify-center gap-3 rounded-full border border-border py-4 text-sm font-medium uppercase tracking-wider text-foreground"
                >
                  Call {business.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
