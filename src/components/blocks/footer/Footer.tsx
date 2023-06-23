import Container from '@/components/elements/container/Container'
import Logo from '@/components/elements/logo/Logo'
import Menu from '@/components/elements/menu/Menu'
import styles from './Footer.module.scss'

interface Props { }
const Footer = (props: Props) => {
  return (
    <div className={styles.brake}>
      <Container className={styles.footer__container}>
        <div className={styles.footer__content}>
          <Logo white />
          <Menu className={styles.footer__menu} bottom />
          <p className={styles.footer__copyright}>© roommate.host 2023</p>
        </div>
      </Container>
    </div>
  )
}
export default Footer