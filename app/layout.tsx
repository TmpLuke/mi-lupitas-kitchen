import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { ScrollProgress } from '@/components/scroll-progress'
import { MobileActionBar } from '@/components/mobile-action-bar'

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mi Lupita's Kitchen | Authentic Mexican Restaurant in Red Bank, NJ",
  description:
    "Mi Lupita's Kitchen serves authentic Mexican food in Red Bank, NJ — handmade tortillas, birria tacos, enchiladas, fajitas, and more. Rated 4.8 stars from 446 reviews. BYOB & outdoor seating.",
  generator: 'v0.app',
  keywords: [
    'Mexican restaurant',
    'Red Bank NJ',
    'authentic Mexican food',
    'birria tacos',
    'enchiladas',
    "Mi Lupita's Kitchen",
    'BYOB restaurant',
    'handmade tortillas',
  ],
  openGraph: {
    title: "Mi Lupita's Kitchen | Authentic Mexican Food in Red Bank, NJ",
    description:
      "Handmade tortillas, birria tacos, sizzling fajitas and fresh Mexican flavors in Red Bank, NJ. BYOB & outdoor seating available.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth bg-background`}
    >
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <MobileActionBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
