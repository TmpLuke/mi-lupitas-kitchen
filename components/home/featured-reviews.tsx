import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { reviews, business } from '@/lib/data'
import { ReviewCard } from '@/components/review-card'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/reveal'

export function FeaturedReviews() {
  const featured = reviews.slice(0, 3)
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium">
          <span className="flex items-center gap-1 text-accent">
            <Star width={15} height={15} className="fill-accent" />
            {business.rating}
          </span>
          <span className="text-muted-foreground">
            from {business.reviewCount} Google reviews
          </span>
        </div>
        <h2 className="mt-5 text-balance font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
          Loved by the neighborhood
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-muted-foreground">
          Don&apos;t just take our word for it — here&apos;s what people are
          saying.
        </p>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
        {featured.map((r, i) => (
          <StaggerItem key={r.author}>
            <ReviewCard review={r} index={i} clamp />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="mt-10 text-center">
        <Link
          href="/reviews"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          Read all reviews
          <ArrowRight
            width={16}
            height={16}
            className="text-primary transition-transform group-hover:translate-x-1"
          />
        </Link>
      </Reveal>
    </section>
  )
}
