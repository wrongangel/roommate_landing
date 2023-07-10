'use client'
import Button from "@/components/elements/button/Button"
import Container from "@/components/elements/container/Container"
import Image from "next/image"
import styles from './People.module.scss'
import peopleImage from '@/assets/images/people_o.png'
import { useTranslations } from "next-intl"

interface Props {}
const People = (props: Props) => {
  const t = useTranslations('People_block')
  return (
    <Container className={styles.people}>
      <div className={styles.people__content}>
        <h2 className={styles.content__header}>{t('Header_start')} <span className={styles.content__header_accent}>{t('Header_accent')}</span> {t('Header_end')}</h2>
        <div className={styles.content__text}>
          <p>{t('Text1')}</p>
          <p>{t('Text2')}</p>
        </div>
        <Button id='people' href='#prices'>{t('Button')}</Button>
      </div>
      <div className={styles.people__interactive}>
        <Image src={peopleImage} alt='' className={styles.interactive__image} />
      </div>
    </Container>
  )
}
export default People