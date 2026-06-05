import type { Metadata } from 'next'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { GalleryHero } from '@/components/gallery/gallery-hero'

export const metadata: Metadata = {
  title: "Gallery | Mi Lupita's Kitchen",
  description:
    "A look at the authentic Mexican food, handmade tortillas and fresh flavors at Mi Lupita's Kitchen in Red Bank, NJ.",
}

export default function GalleryPage() {
  return (
    <main className="grain">
      <GalleryHero />
      <GalleryGrid />
    </main>
  )
}
