'use client'
import Button from '@/components/elements/button/Button'
import Container from '@/components/elements/container/Container'
import { useTranslations } from 'next-intl'
import styles from './Hero.module.scss'

interface Props {}
const Hero = (props: Props) => {
  const t = useTranslations('Hero')
  return (
    <Container className={styles.hero__container}>
      <h1 className={styles.hero__header}>{t('Header_start')}<br /> <span className={styles.hero__header_accent}>{t('Header_accent')}</span><br/>{t('Header_end')}</h1>
      <p className={styles.hero__text}>{t('Text')}</p>
      <Button id='hero' href='#prices'>{t('Button')}</Button>
    </Container>
  )
}
export default Hero