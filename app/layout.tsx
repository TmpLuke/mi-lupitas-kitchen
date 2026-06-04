import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

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
  title: 'Minas Grill & Market | Authentic Brazilian Food in Eatontown, NJ',
  description:
    'Minas Grill & Market serves authentic Brazilian street food, fresh-baked breads, hot lunch specials, combos and groceries in Eatontown, NJ. Rated 4.8 stars from 153 reviews.',
  generator: 'v0.app',
  keywords: [
    'Brazilian restaurant',
    'Eatontown NJ',
    'Brazilian food',
    'empanadas',
    'pao de queijo',
    'Minas Grill',
    'Brazilian market',
  ],
  openGraph: {
    title: 'Minas Grill & Market | Authentic Brazilian Food',
    description:
      'Authentic Brazilian street food, fresh bakery, hot lunch specials and a Brazilian market in Eatontown, NJ.',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
