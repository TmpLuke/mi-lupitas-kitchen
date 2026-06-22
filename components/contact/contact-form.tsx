'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center py-12 text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center border border-primary text-primary">
            <CheckCircle2 className="h-8 w-8" />
          </span>
          <h3 className="mt-6 font-heading text-2xl font-light">Thank you!</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Your message has been received. For urgent requests, please give us a call.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-6 text-sm font-medium text-primary hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={onSubmit}
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Phone" name="phone" type="tel" placeholder="(732) 000-0000" />
          </div>
          <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="How can we help?"
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 md:text-sm"
            />
          </div>
          <button
            type="submit"
            className="glow-hover tap-scale inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

function Field({
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
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
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
