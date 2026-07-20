import type { Metadata } from 'next'
import { MenuBrowser } from '@/components/menu/menu-browser'
import { MenuHero } from '@/components/menu/menu-hero'

export const metadata: Metadata = {
  title: "Menu | Mi Lupita's Kitchen",
  description:
    "Browse the full Mi Lupita's Kitchen menu — birria tacos, enchiladas, molcajete, burritos, quesadillas, tortas and more. Authentic Mexican street food in Red Bank, NJ.",
}

export default function MenuPage() {
  return (
    <main className="grain">
      <MenuHero />
      <MenuBrowser />
    </main>
  )
}
