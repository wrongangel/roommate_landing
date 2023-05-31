import Container from "@/components/elements/container/Container"
import styles from './Header.module.scss'

interface Props {}
const Header = (props: Props) => {
  return (
    <Container className={`${styles.header__container}`}>Header</Container>
  )
}
export default Header