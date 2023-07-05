'use client'

import Button from '@/components/elements/button/Button'
import Container from '@/components/elements/container/Container'
import { useState } from 'react'
import SubscribeModal from '@/components/blocks/subscribeModal/SubscribeModal'
import styles from './Prices.module.scss'
import { useTranslations } from 'next-intl'

interface Props {
}
const Prices = (props: Props) => {
  const t = useTranslations('Prices')
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden'
  }

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <Container className={styles.prices__container}>
        <div id='prices' className={styles.prices__basic}></div>
        <div className={styles.prices__premium}></div>

        <div className={`${styles.c1} ${styles.r1}`}></div>
        <h3 className={`${styles.c2} ${styles.r1} ${styles.prices__tarif}`}>{t('Basic.Name')}</h3>
        <h3 className={`${styles.c3} ${styles.r1} ${styles.prices__tarif}`}>{t('Premium.Name')}</h3>

        <h2 className={`${styles.c1} ${styles.r2} ${styles.prices__header}`}>{t('Headers.Pricing')}</h2>
        <h2 className={`${styles.c2} ${styles.r2} ${styles.prices__price}`}>{t('Basic.Pricing')}</h2>
        <h2 className={`${styles.c3} ${styles.r2} ${styles.prices__price}`}>
          {t('Premium.Pricing')}
          <p className={styles.prices__price_comment}>{t('Premium.Pricing-comment')}</p>
        </h2>

        <h3 className={`${styles.c1} ${styles.r3} ${styles.prices__subHeader}`}>{t('Headers.Results')}</h3>
        <div className={`${styles.c2} ${styles.r3}`}>{t('Basic.Results')}</div>
        <div className={`${styles.c3} ${styles.r3}`}>{t('Premium.Results')}</div>

        <h3 className={`${styles.c1} ${styles.r4} ${styles.prices__subHeader}`}>{t('Headers.Filters')}</h3>
        <div className={`${styles.c2} ${styles.r4}`}>
          <ul className={styles.filters__list}>
            <li>{t('Basic.Filters.0')}</li>
            <li>{t('Basic.Filters.1')}</li>
            <li>{t('Basic.Filters.2')}</li>
          </ul>
        </div>
        <div className={`${styles.c3} ${styles.r4}`}>
          <ul className={styles.filters__list}>
            <li>{t('Premium.Filters.0')}</li>
            <li>{t('Premium.Filters.1')}</li>
            <li>{t('Premium.Filters.2')}</li>
            <li>{t('Premium.Filters.3')}</li>
            <li>{t('Premium.Filters.4')}</li>
            <li>{t('Premium.Filters.5')}</li>
          </ul>
          <p className={styles.filters__more}>{t('Premium.Filters-additional')}</p>
        </div>

        <h3 className={`${styles.c1} ${styles.r5} ${styles.prices__subHeader}`}>{t('Headers.Super-like')}</h3>
        <div className={`${styles.c2} ${styles.r5}`}>{t('Basic.Super-like')}</div>
        <div className={`${styles.c3} ${styles.r5}`}>{t('Premium.Super-like')}</div>

        <h3 className={`${styles.c1} ${styles.r6} ${styles.prices__subHeader}`}>{t('Headers.Dialogues')}</h3>
        <div className={`${styles.c2} ${styles.r6}`}>{t('Basic.Dialogues')}</div>
        <div className={`${styles.c3} ${styles.r6}`}>{t('Premium.Dialogues')}</div>

        <div className={`${styles.c1} ${styles.r7}`}></div>
        <div className={`${styles.c2} ${styles.r7}`}><Button id='basic' className={styles.prices__button_free} onClick={handleOpen}>{t('Basic.Button')}</Button></div>
        <div className={`${styles.c3} ${styles.r7}`}><Button id='premium' onClick={handleOpen}>{t('Premium.Button')}</Button></div>

      </Container>
      <SubscribeModal open={open} handleClose={handleClose} />
    </>
  )
}
export default Prices