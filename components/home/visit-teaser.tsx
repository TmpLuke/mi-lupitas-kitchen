import Link from 'next/link'
import { MapPin, Phone, Clock, ArrowRight, Truck } from 'lucide-react'
import { business, hours } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { OpenBadge } from '@/components/open-status'

export function VisitTeaser() {
  return (
    <section className="grain bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="Map to Minas Grill & Market"
                src={business.mapEmbed}
                className="h-80 w-full lg:h-full lg:min-h-[26rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Visit Us
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl">
              Find us in Eatontown
            </h2>
            <OpenBadge className="mt-4" />

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <MapPin width={20} height={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">{business.address}</p>
                  <a
                    href={business.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <Phone width={20} height={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">{business.phone}</p>
                  <p className="text-sm text-muted-foreground">
                    Call to order ahead
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <Truck width={20} height={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">
                    {business.serviceOptions.join(' · ')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    However you like to eat
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 font-medium">
                  <Clock width={20} height={20} className="text-primary" />
                  Hours
                </div>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between text-muted-foreground"
                    >
                      <span>{h.day}</span>
                      <span>
                        {h.open} – {h.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Contact &amp; full details
              <ArrowRight
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
