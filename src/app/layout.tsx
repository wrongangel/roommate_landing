import './globals.css'
import { Cabin, Lato } from 'next/font/google'

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin'
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-lato'
})

export const metadata = {
  title: 'Roommate',
  description: 'An app for finding roommates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cabin.className} ${lato.variable}`}>{children}</body>
    </html>
  )
}
