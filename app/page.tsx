import { Hero } from '@/components/home/hero'
import { MarqueeBand } from '@/components/home/marquee-band'
import { SplitAbout } from '@/components/home/split-about'
import { SignatureDishes } from '@/components/home/signature-dishes'
import { HorizontalShowcase } from '@/components/home/horizontal-showcase'
import { AboutTeaser } from '@/components/home/about-teaser'
import { Favorites } from '@/components/home/favorites'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CtaBand } from '@/components/cta-band'
import { VisitSection } from '@/components/home/visit-section'

export default function HomePage() {
  return (
    <main className="grain">
      <Hero />
      <MarqueeBand />
      <SplitAbout />
      <SignatureDishes />
      <HorizontalShowcase />
      <AboutTeaser />
      <Favorites />
      <TestimonialsSection />
      <CtaBand />
      <VisitSection />
    </main>
  )
}
