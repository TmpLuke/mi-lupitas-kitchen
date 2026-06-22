'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type CartItem = {
  name: string
  price: number // dollars, numeric
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  add: (name: string, price: number) => void
  remove: (name: string) => void
  setQty: (name: string, qty: number) => void
  clear: () => void
  open: boolean
  setOpen: (v: boolean) => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'mlk-cart'

/** Parse a price string like "$4.50" into a number (4.5). */
export function parsePrice(price: string): number {
  const n = parseFloat(price.replace(/[^0-9.]/g, ''))
  return Number.isFinite(n) ? n : 0
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [open, setOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Load from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {
      /* ignore */
    }
    setHydrated(true)
  }, [])

  // Persist on change (after hydration so we don't clobber stored data)
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items, hydrated])

  const value = useMemo<CartContextValue>(() => {
    const add = (name: string, price: number) =>
      setItems((prev) => {
        const existing = prev.find((i) => i.name === name)
        if (existing) {
          return prev.map((i) =>
            i.name === name ? { ...i, qty: i.qty + 1 } : i,
          )
        }
        return [...prev, { name, price, qty: 1 }]
      })

    const remove = (name: string) =>
      setItems((prev) => prev.filter((i) => i.name !== name))

    const setQty = (name: string, qty: number) =>
      setItems((prev) =>
        qty <= 0
          ? prev.filter((i) => i.name !== name)
          : prev.map((i) => (i.name === name ? { ...i, qty } : i)),
      )

    const clear = () => setItems([])

    const count = items.reduce((n, i) => n + i.qty, 0)
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0)

    return { items, count, subtotal, add, remove, setQty, clear, open, setOpen }
  }, [items, open])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
