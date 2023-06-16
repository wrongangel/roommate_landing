import Footer from '@/components/blocks/footer/Footer'
import Header from '@/components/blocks/header/Header'
import styles from '../page.module.scss'

interface Props {}
const ToS = (props: Props) => {
  return (
    <main className={styles.main}>
      <Header />
      
      <Footer />
    </main>
  )
}
export default ToS