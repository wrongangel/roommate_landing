import Header from '@/components/blocks/header/Header'
import Footer from '@/components/blocks/footer/Footer'
import Hero from '@/components/blocks/hero/Hero'
import People from '@/components/blocks/people/People'
import Brake from '@/components/blocks/brake/Brake'
import Place from '@/components/blocks/place/Place'
import Household from '@/components/blocks/household/Household'
import styles from './page.module.scss'
import PricesTriple from '@/components/blocks/pricesTriple/PricesTriple'

export default function Home() {
  return (
    <>
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
