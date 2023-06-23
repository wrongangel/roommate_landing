'use client'
import Button from "@/components/elements/button/Button"
import Container from "@/components/elements/container/Container"
import styles from './Household.module.scss'
import shekel from '@/assets/svg/shekel.svg'
import vacuum_cleaner from '@/assets/svg/vacuum_cleaner.svg'
import cutlery from '@/assets/svg/cutlery.svg'
import agreement from '@/assets/svg/agreement.svg'
import other from '@/assets/svg/other.svg'
import householdImage from '@/assets/images/household.png'
import Image from "next/image"
import { useTranslations } from "next-intl"

interface Props {}
const Household = (props: Props) => {
  const t = useTranslations('Household_block')
  return (
    <Container className={styles.household__container}>
      <div className={styles.household__content}>
        <h2 className={styles.household__header}>{t('Header_start')} <span className={styles.household__header_accent}>{t('Header_accent')}</span> {t('Header_end')}</h2>
        <p className={styles.household__text}>{t('Text')}</p>
        <ul className={styles.household__pointsList}>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={shekel} alt='Shekel Icon' />
            <p className={styles.household__point_text}>{t('Point1')}</p>
          </li>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={vacuum_cleaner} alt='Cleaning Icon' />
            <p className={styles.household__point_text}>{t('Point2')}</p>
          </li>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={cutlery} alt='Cooking Icon' />
            <p className={styles.household__point_text}>{t('Point3')}</p>
          </li>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={agreement} alt='Agreement Icon' />
            <p className={styles.household__point_text}>{t('Point4')}</p>
          </li>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={other} alt='Others Icon' />
            <p className={styles.household__point_text}>{t('Point5')}</p>
          </li>
        </ul>
        <Button href='#prices'>{t('Button')}</Button>
      </div>
      <div className={styles.household__interactive}>
        <Image className={styles.household__image} src={householdImage} alt='Appartment image' />
      </div>
    </Container>
  )
}
export default Household