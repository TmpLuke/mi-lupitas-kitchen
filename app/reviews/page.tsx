import type { Metadata } from 'next'
import { ReviewsWall } from '@/components/reviews/reviews-wall'
import { ReviewsHero } from '@/components/reviews/reviews-hero'

export const metadata: Metadata = {
  title: "Reviews | Mi Lupita's Kitchen",
  description:
    "Read what customers love about Mi Lupita's Kitchen — rated 4.8 stars from 446+ Google reviews in Red Bank, NJ.",
}

export default function ReviewsPage() {
  return (
    <main className="grain">
      <ReviewsHero />
      <ReviewsWall />
    </main>
  )
}
