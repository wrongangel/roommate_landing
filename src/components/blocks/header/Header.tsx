import Container from "@/components/elements/container/Container"
import Logo from "@/components/elements/logo/Logo"
import Menu from "@/components/elements/menu/Menu"
import styles from './Header.module.scss'
import MenuMobile from "@/components/elements/menuMobile/MenuMobile"

interface Props {}
const Header = (props: Props) => {
  return (
    <Container className={`${styles.header__container}`}>
      <Logo />
      <Menu className={styles.header__menu} />
      <MenuMobile className={styles.header__menuButton} />
    </Container>
  )
}
export default Header