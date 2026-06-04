import type { Metadata } from 'next'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { GalleryHero } from '@/components/gallery/gallery-hero'

export const metadata: Metadata = {
  title: 'Gallery | Minas Grill & Market',
  description:
    'A look at the fresh food, bakery and Brazilian favorites at Minas Grill & Market in Eatontown, NJ.',
}

export default function GalleryPage() {
  return (
    <main className="grain">
      <GalleryHero />
      <GalleryGrid />
    </main>
  )
}
