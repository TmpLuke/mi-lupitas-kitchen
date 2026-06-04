import { Metadata } from 'next'
import { ContactSection } from '@/components/contact/contact-section'
import { ContactHero } from '@/components/contact/contact-hero'
import { business } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us | Minas Grill & Market',
  description: `Visit us at ${business.address} or call ${business.phone}. Questions about catering, reservations, or our menu? We'd love to hear from you.`,
}

export default function ContactPage() {
  return (
    <main className="grain">
      <ContactHero />
      <ContactSection />
    </main>
  )
}
