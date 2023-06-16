import Link from "next/link"
import { HTMLAttributes } from "react"
import LangSwitch from "../langSwitch/LangSwitch"
import styles from './Menu.module.scss'

interface Props {
  className?: HTMLAttributes<HTMLDivElement> | string
}
const Menu = ({className}: Props) => {
  return (
    <nav className={`${styles.menu} ${className}`}>
      <Link href={`/#prices`}>Pricing</Link>
      <Link href={`#`}>Terms of service</Link>
      <LangSwitch />
    </nav>
  )
}
export default Menu