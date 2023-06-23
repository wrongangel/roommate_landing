'use client'
import language from '@/assets/svg/language.svg'
import Image from 'next/image'
import Link from 'next-intl/link'
import styles from './LangSwitch.module.scss'
import { usePathname } from 'next-intl/client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface Props {
  bottom?: boolean
 }
const LangSwitch = (props: Props) => {
  const [open, setOpen] = useState(false)
  const t = useTranslations()
  const pathname = usePathname()
  return (
    <div className={styles.lang__container}>
      <button onClick={() => setOpen(!open)} className={styles.langSwitch}>
        <Image src={language} alt='language icon' /> {t('Lang')}
      </button>
      <div className={`${styles.langMenu} ${open ? props.bottom ? styles.langMenu__showBottom : styles.langMenu__show : ''}`}>
        <Link href={`${pathname}`} locale='en'>English</Link>
        <Link href={`${pathname}`} locale='iw'>Hebrew</Link>
      </div>
    </div>
  )
}
export default LangSwitch