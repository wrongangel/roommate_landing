import Footer from '@/components/blocks/footer/Footer'
import Header from '@/components/blocks/header/Header'
import TOS from '@/components/blocks/tos/tos'
import styles from '../page.module.scss'
import { NextSeo } from 'next-seo'

interface Props { }
const ToS = (props: Props) => {
  return (
    <>
      <NextSeo
          title='Roommate'
          description='Roommate.host terms and conditions'
          canonical='https://roommate.host'
          openGraph={{
            url: 'https://roommate.host/tos',
            title: 'Roommate',
            description: 'Roommate.host terms and conditions',
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
          <TOS />
        <Footer />
      </main>
    </>
  )
}
export default ToS