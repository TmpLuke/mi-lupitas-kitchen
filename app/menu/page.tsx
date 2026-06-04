import type { Metadata } from 'next'
import { MenuBrowser } from '@/components/menu/menu-browser'
import { MenuHero } from '@/components/menu/menu-hero'

export const metadata: Metadata = {
  title: 'Menu | Minas Grill & Market',
  description:
    'Browse the full Minas Grill & Market menu — Brazilian street food, burgers, subs, combos, breakfast, pasta, fresh sides and desserts.',
}

export default function MenuPage() {
  return (
    <main className="grain">
      <MenuHero />
      <MenuBrowser />
    </main>
  )
}
