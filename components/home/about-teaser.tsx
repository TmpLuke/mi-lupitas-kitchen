import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { Croissant, Soup, Store, Sun } from 'lucide-react'

const features = [
  { icon: Sun, label: 'Open early', sub: 'Breakfast from 4:30 AM' },
  { icon: Soup, label: 'Hot food bar', sub: 'Changes fresh daily' },
  { icon: Croissant, label: 'In-house bakery', sub: 'Breads & sweets' },
  { icon: Store, label: 'Brazilian market', sub: 'Groceries & drinks' },
]

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Story
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            A little piece of Brazil, made fresh every day
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Minas Grill &amp; Market is a warm, family-run spot where the
            empanadas are golden, the rice and beans are generous, and the
            bread is baked in-house. Part grill, part bakery, part Brazilian
            market — there&apos;s always a friendly face and a fresh tray
            waiting.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From early-morning breakfast sandwiches on fresh Portuguese rolls
            to a hot lunch buffet that changes daily, everything is made with
            care and served with a smile.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                <CountUp to={4.8} decimals={1} />★
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Google rating</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                <CountUp to={153} suffix="+" />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Happy reviews</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                <CountUp to={100} suffix="%" />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Made fresh</p>
            </div>
          </div>
        </Reveal>

        <Reveal y={40} className="order-1 lg:order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/photo_01.jpg"
                alt="Fresh-baked breads, pastries and donuts inside Minas Grill & Market"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:block lg:-left-8 lg:w-52">
              <img
                src="/images/photo_07.jpg"
                alt="Golden fried risoles with shredded chicken"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.label} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <f.icon width={22} height={22} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {f.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
