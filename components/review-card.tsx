import { Quote } from 'lucide-react'
import { Stars } from '@/components/stars'
import type { Review } from '@/lib/data'

const palette = [
  'bg-primary text-primary-foreground',
  'bg-accent text-accent-foreground',
  'bg-chart-3 text-background',
  'bg-chart-5 text-background',
]

export function ReviewCard({
  review,
  index = 0,
  clamp = false,
}: {
  review: Review
  index?: number
  clamp?: boolean
}) {
  const initials = review.author
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <Quote width={26} height={26} className="text-primary/20" />
      </div>
      <p
        className={`mt-4 flex-1 text-pretty leading-relaxed text-foreground/85 ${
          clamp ? 'line-clamp-6' : ''
        }`}
      >
        {review.text}
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
            palette[index % palette.length]
          }`}
        >
          {initials}
        </span>
        <div>
          <p className="text-sm font-semibold">{review.author}</p>
          <p className="text-xs text-muted-foreground">{review.date}</p>
        </div>
      </div>
    </div>
  )
}
