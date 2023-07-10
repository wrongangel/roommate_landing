import './globals.css'
import { Cabin, Lato } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import Script from 'next/script'
import ScrollToTop from '@/components/elements/scrollToTop/ScrollToTop'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: 'Roommate',
  description: 'An app for finding roommates',
  openGraph: {
    url: 'https://roommate.host',
    title: 'Roommate.host',
    description: 'Find a room & a perfect roommate quick and easy',
    images: [
      {
        url: 'https://roommate.host/openGraph_cover_800x600.png',
        width: 800,
        height: 600,
        alt: 'Roommate.host.logo'
      },
      {
        url: 'https://roommate.host/openGraph_cover_900x800.png',
        width: 900,
        height: 800,
        alt: 'Roommate.host.logo'
      }
    ]
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'he' }];
}

export default async function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
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
        {process.env.NODE_ENV === "production" &&
          <>
            <Script id='google-tag-manager' strategy='afterInteractive'>
              {
                `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-NBB8778')
                  `
              }
            </Script>
            <noscript dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NBB8778"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} ></noscript>
          </>
        }
        <NextIntlClientProvider locale={locale} messages={messages} >
          {children}
        </NextIntlClientProvider>

        <ScrollToTop />
        {process.env.NODE_ENV === "production" &&
          <>
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
          </>
        }
      </body>
    </html>
  )
}
