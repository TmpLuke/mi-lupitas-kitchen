import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { UtensilsCrossed, Wine, Music, TreePalm } from 'lucide-react'

const features = [
  {
    icon: UtensilsCrossed,
    label: 'Dine In & Takeout',
    sub: 'Delivery available through DoorDash and more.',
    accent: 'border-primary/40 hover:border-primary',
    iconBg: 'bg-primary/15 text-primary',
  },
  {
    icon: Wine,
    label: 'BYOB Friendly',
    sub: 'Bring your own wine or beer — no corkage fee ever.',
    accent: 'border-accent/40 hover:border-accent',
    iconBg: 'bg-accent/15 text-accent',
  },
  {
    icon: Music,
    label: 'Live Music',
    sub: 'Seasonal outdoor performances on the patio.',
    accent: 'border-primary/40 hover:border-primary',
    iconBg: 'bg-primary/15 text-primary',
  },
  {
    icon: TreePalm,
    label: 'Outdoor Seating',
    sub: 'Beautiful al fresco patio — perfect for any occasion.',
    accent: 'border-accent/40 hover:border-accent',
    iconBg: 'bg-accent/15 text-accent',
  },
]

export function AboutTeaser() {
  return (
    <section className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">

        {/* Section label */}
        <Reveal className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            The Lupita&apos;s Experience
          </p>
          <h2 className="mt-4 font-heading text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            More than just great food
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            We&apos;re a family-run kitchen where every dish is made with love, every guest
            is treated like family, and every visit feels like home.
          </p>
        </Reveal>

        {/* Stats row */}
        <Reveal className="mb-14">
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {[
              { label: 'Google Rating', value: 4.8, suffix: '★', decimals: 1 },
              { label: 'Happy Reviews', value: 446, suffix: '+', decimals: 0 },
              { label: 'Made Fresh Daily', value: 100, suffix: '%', decimals: 0 },
            ].map((s) => (
              <div key={s.label} className="bg-card px-6 py-10 text-center md:py-12">
                <p className="font-heading text-4xl font-light text-primary sm:text-5xl lg:text-6xl">
                  <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Feature cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <div className={`group h-full rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${f.accent}`}>
                <span className={`flex size-13 items-center justify-center rounded-xl ${f.iconBg}`}>
                  <f.icon width={26} height={26} />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold leading-tight">
                  {f.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
