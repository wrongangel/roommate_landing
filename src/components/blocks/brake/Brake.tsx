'use client'

import Container from '@/components/elements/container/Container'
import { useTranslations } from 'next-intl'
import styles from './Brake.module.scss'

interface Props {
  second?: boolean
}
const Brake = (props: Props) => {
  const t = useTranslations('Brake1')
  const t1 = useTranslations('Brake2')
  return (
    <div className={styles.brake}>
      <Container className={styles.brake__container}>
        {!props.second ?
          <h2 className={styles.brake__text}>{t('Start')} <span className={styles.brake__text_accent}>{t('Accent')}</span> {t('End')}</h2>
          :
          <h2 className={styles.brake__text}>{t1('Start')} <span className={styles.brake__text_accent}>{t1('Accent')}</span> {t1('End')}</h2>
        }
      </Container>
    </div>
  )
}
export default Brake