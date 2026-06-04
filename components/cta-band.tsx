import { Phone, Navigation } from 'lucide-react'
import { business } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="grain relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Hungry yet?
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Stop by today — fresh food is waiting
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
            Dine in, grab curbside pickup, or order delivery. Open early for
            breakfast and serving Brazilian favorites all day long.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              <Phone width={18} height={18} className="text-primary" />
              {business.phone}
            </a>
            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              <Navigation width={18} height={18} />
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
