'use client'
import Image from "next/image"
import { HTMLAttributes, useState } from "react"
import styles from './MenuMobile.module.scss'
import menuIcon from '@/assets/svg/menu.svg'
import closeIcon from '@/assets/svg/close.svg'
import Link from 'next-intl/link'
import LangSwitch from "../langSwitch/LangSwitch"
import language from '@/assets/svg/language.svg'
import { useTranslations } from "next-intl"
import { usePathname } from "next-intl/client"

interface Props {
  className?: HTMLAttributes<HTMLDivElement> | string
}
const MenuMobile = (props: Props) => {
  const t = useTranslations('Menu')
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const handleClose = () => {
    setOpen(false)
    document.body.style.overflow = 'unset'
  }
  return (
    <div className={`${styles.menu} ${props.className}`}>
      <div onClick={() => setOpen(!open)} className={`${styles.backdrop} ${open && styles.backdrop__show}`}></div>
      <button onClick={handleOpen} className={styles.menu__button}><Image src={menuIcon} alt='menu' /></button>
      <div className={`${styles.menu__content} ${open && styles.menu__content_open}`}>
        <div className={styles.menu__button_close}><button onClick={handleClose} className={styles.menu__button}><Image src={closeIcon} alt='menu' /></button></div>
        <nav className={`${styles.menu__links}`}>
          <Link href={`/#prices`} onClick={handleClose}>{t('Pricing')}</Link>
          <Link href={`/tos`} onClick={handleClose}>{t('ToS')}</Link>
          <Image src={language} alt='language icon' />
          <Link href={`${pathname}`} locale='en' onClick={handleClose}>English</Link>
          <Link href={`${pathname}`} locale='iw' onClick={handleClose}>Hebrew</Link>
        </nav>
      </div>
    </div>
  )
}
export default MenuMobile