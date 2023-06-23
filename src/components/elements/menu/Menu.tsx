'use client'
import { useTranslations } from "next-intl"
import Link from "next/link"
import { HTMLAttributes } from "react"
import LangSwitch from "../langSwitch/LangSwitch"
import styles from './Menu.module.scss'

interface Props {
  className?: HTMLAttributes<HTMLDivElement> | string,
  bottom?: boolean
}
const Menu = ({className, bottom}: Props) => {
  const t = useTranslations('Menu')
  return (
    <nav className={`${styles.menu} ${className}`}>
      <Link href={`/#prices`}>{t('Pricing')}</Link>
      <Link href={`/tos`}>{t('ToS')}</Link>
      <LangSwitch bottom={bottom} />
    </nav>
  )
}
export default Menu