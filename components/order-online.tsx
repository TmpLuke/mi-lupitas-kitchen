'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag, Phone, BookOpen, Bike, ArrowUpRight, X } from 'lucide-react'
import { ordering } from '@/lib/data'
import { cn } from '@/lib/utils'

const iconFor = {
  phone: Phone,
  menu: BookOpen,
  delivery: Bike,
} as const

function OrderDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const options = ordering.options.filter((o) => o.enabled && o.href)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-background/80 p-4 backdrop-blur-md sm:items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="pb-safe relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl sm:p-8"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="tap-scale absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3">
              <span className="glow-pulse flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <ShoppingBag className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-light leading-tight">Order Now</h2>
                <p className="text-sm text-muted-foreground">Pickup &amp; delivery in Red Bank, NJ</p>
              </div>
            </div>

            {/* Options */}
            <div className="mt-7 space-y-3">
              {options.map((o, i) => {
                const Icon = iconFor[o.kind]
                const isPrimary = o.kind === 'phone'
                return (
                  <motion.a
                    key={o.id}
                    href={o.href}
                    target={o.kind === 'phone' ? undefined : '_blank'}
                    rel={o.kind === 'phone' ? undefined : 'noopener noreferrer'}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className={cn(
                      'tap-scale group flex items-center gap-4 rounded-2xl border p-4 transition-all',
                      isPrimary
                        ? 'border-transparent bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30'
                        : 'border-border bg-background hover:border-primary',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                        isPrimary ? 'bg-primary-foreground/15' : 'bg-primary/10 text-primary',
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">{o.label}</span>
                      <span
                        className={cn(
                          'block text-sm',
                          isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground',
                        )}
                      >
                        {o.desc}
                      </span>
                    </span>
                    <ArrowUpRight
                      className={cn(
                        'h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                        isPrimary ? 'text-primary-foreground/70' : 'text-muted-foreground',
                      )}
                    />
                  </motion.a>
                )
              })}
            </div>

            {!ordering.hasOnlineOrdering && (
              <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
                Online delivery ordering coming soon. For now, give us a call —
                we&apos;ll have your order hot and ready.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/** Compact button for the navbar (and anywhere else). */
export function OrderButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          'glow-hover tap-scale inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90',
          className,
        )}
      >
        <ShoppingBag className="h-4 w-4" />
        Order Online
      </button>
      <OrderDialog open={open} onClose={() => setOpen(false)} />
    </>
  )
}
