'use client'

import { useEffect, useState } from 'react'
import { hours } from '@/lib/data'

function parse(t: string) {
  const [time, mer] = t.split(' ')
  let [h, m] = time.split(':').map(Number)
  if (mer === 'PM' && h !== 12) h += 12
  if (mer === 'AM' && h === 12) h = 0
  return h * 60 + m
}

export function useOpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(
    null,
  )

  useEffect(() => {
    const compute = () => {
      const now = new Date()
      const dow = now.getDay()
      const mins = now.getHours() * 60 + now.getMinutes()
      const today = hours.find((h) => h.dow === dow)
      if (!today) return setStatus({ open: false, label: 'Closed today' })
      const o = parse(today.open)
      const c = parse(today.close)
      if (mins >= o && mins < c) {
        setStatus({ open: true, label: `Open until ${today.close}` })
      } else if (mins < o) {
        setStatus({ open: false, label: `Opens at ${today.open}` })
      } else {
        setStatus({ open: false, label: 'Closed now' })
      }
    }
    compute()
    const id = setInterval(compute, 60000)
    return () => clearInterval(id)
  }, [])

  return status
}

export function OpenBadge({ className = '' }: { className?: string }) {
  const status = useOpenStatus()
  if (!status) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground ${className}`}
      >
        <span className="size-2 rounded-full bg-muted-foreground/40" />
        Checking hours…
      </span>
    )
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${
        status.open
          ? 'border-chart-3/30 bg-chart-3/10 text-chart-3'
          : 'border-border bg-card text-muted-foreground'
      } ${className}`}
    >
      <span
        className={`size-2 rounded-full ${
          status.open ? 'animate-pulse bg-chart-3' : 'bg-muted-foreground/50'
        }`}
      />
      {status.label}
    </span>
  )
}
