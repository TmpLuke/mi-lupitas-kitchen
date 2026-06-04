import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Stars({
  rating,
  size = 16,
  className,
}: {
  rating: number
  size?: number
  className?: string
}) {
  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={
            i < Math.round(rating)
              ? 'fill-accent text-accent'
              : 'fill-muted text-muted-foreground/40'
          }
        />
      ))}
    </div>
  )
}
