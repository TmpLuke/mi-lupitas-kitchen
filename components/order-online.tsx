'use client'

import Link from 'next/link'
import { ShoppingBag, ShoppingCart } from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { cn } from '@/lib/utils'

/** "Order Online" button — takes the customer to the menu to start an order. */
export function OrderButton({ className }: { className?: string }) {
  return (
    <Link
      href="/menu"
      className={cn(
        'glow-hover tap-scale inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90',
        className,
      )}
    >
      <ShoppingBag className="h-4 w-4" />
      Order Online
    </Link>
  )
}

/** Cart icon with a live item-count badge — opens the cart drawer. */
export function CartButton({ className }: { className?: string }) {
  const { count, setOpen } = useCart()

  return (
    <button
      onClick={() => setOpen(true)}
      aria-label={`Open cart (${count} item${count !== 1 ? 's' : ''})`}
      className={cn(
        'tap-scale relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary',
        className,
      )}
    >
      <ShoppingCart className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
          {count}
        </span>
      )}
    </button>
  )
}
