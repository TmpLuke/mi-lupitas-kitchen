import { Phone, Navigation, ExternalLink } from 'lucide-react'
import { business } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Subtle diagonal stripe pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 sm:py-24">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/60">
            Come visit us
          </p>
          <h2 className="mt-4 text-balance font-heading text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Hungry? We&apos;re ready<br className="hidden sm:block" /> when you are.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-primary-foreground/75 md:text-lg">
            Dine in, takeout or delivery — open Tuesday through Sunday.
            BYOB welcome. Outdoor seating available.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneHref}
              className="tap-scale group inline-flex items-center gap-3 rounded-full bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
              {business.phone}
            </a>
            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-105 active:scale-95"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          {/* Address line */}
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-primary-foreground/50">
            193 Shrewsbury Ave, Red Bank, NJ 07701
            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in maps"
            >
              <ExternalLink className="h-3.5 w-3.5 hover:text-primary-foreground transition-colors" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
