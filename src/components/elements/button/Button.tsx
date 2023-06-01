import Link from "next/link"
import styles from './Button.module.scss'

interface Props {}
const Button = (props: Props) => {
  return (
    <Link href={`#`} className={styles.button}>Get Roommate</Link>
  )
}
export default Button