import './globals.css'
import { Cabin, Lato } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import Script from 'next/script'

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'he'}];
}

export default async function RootLayout({
  children, params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string}
}) {

  let messages;
  try {
    messages = (await import(`../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    console.log(error)
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${cabin.className} ${lato.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages} >
          {children}
        </NextIntlClientProvider>
        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-N2Q2T1CRB0'></Script>
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          >
            {
              `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-N2Q2T1CRB0');
              `
            }
          </Script>
      </body>
    </html>
  )
}
