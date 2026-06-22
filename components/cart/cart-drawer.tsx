'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  Trash2,
  CheckCircle2,
  Loader2,
  ArrowLeft,
} from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { business } from '@/lib/data'

type Step = 'cart' | 'details' | 'done'

export function CartDrawer() {
  const { items, count, subtotal, setQty, remove, clear, open, setOpen } = useCart()
  const [step, setStep] = useState<Step>('cart')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [orderId, setOrderId] = useState('')

  const TAX_RATE = 0.06625 // NJ sales tax
  const tax = subtotal * TAX_RATE
  const total = subtotal + tax

  function close() {
    setOpen(false)
    // reset to cart view after the close animation
    setTimeout(() => {
      if (step === 'done') {
        setStep('cart')
        setOrderId('')
      }
    }, 350)
  }

  async function placeOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: String(form.get('name') || ''),
      phone: String(form.get('phone') || ''),
      pickupTime: String(form.get('pickupTime') || 'ASAP'),
      notes: String(form.get('notes') || ''),
      items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
      subtotal,
      tax,
      total,
    }

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.error || 'Something went wrong.')
      setOrderId(data.orderId || '')
      clear()
      setStep('done')
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Could not place your order. Please call us.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0 z-[70] bg-background/70 backdrop-blur-sm"
        >
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 34 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                {step === 'details' && (
                  <button
                    onClick={() => setStep('cart')}
                    aria-label="Back to cart"
                    className="tap-scale -ml-1 mr-1 text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                )}
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-xl font-light">
                  {step === 'cart' && 'Your Order'}
                  {step === 'details' && 'Pickup Details'}
                  {step === 'done' && 'Order Sent!'}
                </h2>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="tap-scale flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-background hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ---------- CART STEP ---------- */}
            {step === 'cart' && (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  {items.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center py-20 text-center">
                      <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
                      <p className="mt-4 font-heading text-xl font-light">Your cart is empty</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Add some dishes from the menu to get started.
                      </p>
                    </div>
                  ) : (
                    <ul className="space-y-4">
                      {items.map((item) => (
                        <li key={item.name} className="flex items-start gap-3">
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-foreground">{item.name}</p>
                            <p className="mt-0.5 text-sm text-muted-foreground">
                              ${item.price.toFixed(2)} each
                            </p>
                            {/* Stepper */}
                            <div className="mt-2 flex items-center gap-3">
                              <div className="flex items-center rounded-full border border-border">
                                <button
                                  onClick={() => setQty(item.name, item.qty - 1)}
                                  className="tap-scale flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-primary"
                                  aria-label={`Decrease ${item.name}`}
                                >
                                  <Minus className="h-3.5 w-3.5" />
                                </button>
                                <span className="w-7 text-center text-sm font-medium">{item.qty}</span>
                                <button
                                  onClick={() => setQty(item.name, item.qty + 1)}
                                  className="tap-scale flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-primary"
                                  aria-label={`Increase ${item.name}`}
                                >
                                  <Plus className="h-3.5 w-3.5" />
                                </button>
                              </div>
                              <button
                                onClick={() => remove(item.name)}
                                className="tap-scale text-muted-foreground hover:text-destructive"
                                aria-label={`Remove ${item.name}`}
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <p className="shrink-0 font-heading text-lg font-light text-primary">
                            ${(item.price * item.qty).toFixed(2)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {items.length > 0 && (
                  <div className="border-t border-border px-5 py-4">
                    <Totals subtotal={subtotal} tax={tax} total={total} />
                    <button
                      onClick={() => setStep('details')}
                      className="glow-hover tap-scale mt-4 w-full rounded-full bg-primary py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
                    >
                      Continue to Pickup
                    </button>
                  </div>
                )}
              </>
            )}

            {/* ---------- DETAILS STEP ---------- */}
            {step === 'details' && (
              <form onSubmit={placeOrder} className="flex flex-1 flex-col overflow-y-auto">
                <div className="flex-1 space-y-5 px-5 py-5">
                  <p className="rounded-xl bg-background px-4 py-3 text-sm text-muted-foreground">
                    🛍️ This is a <strong className="text-foreground">pickup order</strong>. Pay when
                    you arrive at {business.address.split(',')[0]}.
                  </p>

                  <FormField label="Name" name="name" placeholder="Your name" required />
                  <FormField
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="(732) 000-0000"
                    required
                  />

                  <div>
                    <label
                      htmlFor="pickupTime"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Pickup Time
                    </label>
                    <select
                      id="pickupTime"
                      name="pickupTime"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 md:text-sm"
                    >
                      <option value="ASAP (20–30 min)">ASAP (20–30 min)</option>
                      <option value="In 45 minutes">In 45 minutes</option>
                      <option value="In 1 hour">In 1 hour</option>
                      <option value="In 1.5 hours">In 1.5 hours</option>
                      <option value="In 2 hours">In 2 hours</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Allergies, spice level, special requests..."
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 md:text-sm"
                    />
                  </div>
                </div>

                <div className="border-t border-border px-5 py-4">
                  <Totals subtotal={subtotal} tax={tax} total={total} />
                  {error && (
                    <p className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {error} You can always call us at {business.phone}.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="glow-hover tap-scale mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      'Place Pickup Order'
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* ---------- DONE STEP ---------- */}
            {step === 'done' && (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary"
                >
                  <CheckCircle2 className="h-10 w-10" />
                </motion.span>
                <h3 className="mt-6 font-heading text-2xl font-light">Order received!</h3>
                {orderId && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Order #{orderId}
                  </p>
                )}
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  We&apos;ve sent your order to the kitchen. We&apos;ll have it ready for pickup —
                  pay when you arrive. Questions? Call {business.phone}.
                </p>
                <button
                  onClick={close}
                  className="tap-scale mt-8 rounded-full border border-border px-8 py-3 text-sm font-medium uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"
                >
                  Done
                </button>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Totals({ subtotal, tax, total }: { subtotal: number; tax: number; total: number }) {
  return (
    <div className="space-y-1.5 text-sm">
      <div className="flex justify-between text-muted-foreground">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-muted-foreground">
        <span>Tax (6.625%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-t border-border pt-2 font-heading text-lg font-light text-foreground">
        <span>Total</span>
        <span className="text-primary">${total.toFixed(2)}</span>
      </div>
    </div>
  )
}

function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 md:text-sm"
      />
    </div>
  )
}
