import type { Metadata } from 'next'
import { ReviewsWall } from '@/components/reviews/reviews-wall'
import { ReviewsHero } from '@/components/reviews/reviews-hero'

export const metadata: Metadata = {
  title: 'Reviews | Minas Grill & Market',
  description:
    'Read what customers love about Minas Grill & Market — rated 4.7 stars from 150+ Google reviews in Eatontown, NJ.',
}

export default function ReviewsPage() {
  return (
    <main className="grain">
      <ReviewsHero />
      <ReviewsWall />
    </main>
  )
}
