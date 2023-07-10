import Header from '@/components/blocks/header/Header'
import Footer from '@/components/blocks/footer/Footer'
import Hero from '@/components/blocks/hero/Hero'
import People from '@/components/blocks/people/People'
import Brake from '@/components/blocks/brake/Brake'
import Place from '@/components/blocks/place/Place'
import Household from '@/components/blocks/household/Household'
import Prices from '@/components/blocks/prices/Prices'
import styles from './page.module.scss'
import PricesTriple from '@/components/blocks/pricesTriple/PricesTriple'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title='Roommate'
        description='An app for finding roommates'
        canonical='https://roommate.host'
        openGraph={{
          url: 'https://roommate.host',
          title: 'Roommate',
          description: 'Find a room & a perfect roommate quick and easy',
          images:[
            {
              url: '/openGraph_cover_800x600.png',
              width: 800,
              height: 600,
              alt: 'Roommate.host',
              type: 'image/png'
            },
            {
              url: '/openGraph_cover_900x800.png',
              width: 900,
              height: 800,
              alt: 'Roommate.host',
              type: 'image/png'
            }
          ]
        }}
      />
      <main className={styles.main}>
        <Header />
        <Hero />
        <People />
        <Brake />
        <Place />
        <Household />
        <Brake second />
        <PricesTriple />
        <Footer />
      </main>
    </>
  )
}
