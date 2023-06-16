import Container from "@/components/elements/container/Container"
import Logo from "@/components/elements/logo/Logo"
import Menu from "@/components/elements/menu/Menu"
import Image from "next/image"
import styles from './Header.module.scss'
import menuIcon from '@/assets/svg/menu.svg'

interface Props {}
const Header = (props: Props) => {
  return (
    <Container className={`${styles.header__container}`}>
      <Logo />
      <Menu className={styles.header__menu} />
      <button className={styles.header__menuButton}><Image src={menuIcon} alt='menu' /></button>
    </Container>
  )
}
export default Header