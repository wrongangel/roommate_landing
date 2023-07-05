'use client'
import Container from '@/components/elements/container/Container'
import Image from 'next/image'
import styles from './Place.module.scss'
import placeImage from '@/assets/images/place.png'
import Button from '@/components/elements/button/Button'
import { useTranslations } from 'next-intl'

interface Props {}
const Place = (props: Props) => {
  const t = useTranslations('Place_block')
  return (
    <Container className={styles.place__container}>
      <div className={styles.place__interactive}>
        <Image src={placeImage} alt='' className={styles.place__interactive_image} />
      </div>
      <div className={styles.place__content}>
        <h2 className={styles.place__content_header}>{t('Header_start')} <span className={styles.place__content_accent}>{t('Header_accent')}</span> {t('Header_end')}</h2>
        <div className={styles.place__content_text}>
          <p>{t('Text1')}</p>
          <p>{t('Text2')}</p>
        </div>
        <Button id='place' href='#prices'>{t('Button')}</Button>
      </div>
    </Container>
  )
}
export default Place