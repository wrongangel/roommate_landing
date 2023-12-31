'use client'

import Button from '@/components/elements/button/Button'
import Container from '@/components/elements/container/Container'
import { useState } from 'react'
import SubscribeModal from '@/components/blocks/subscribeModal/SubscribeModal'
import styles from './PricesTriple.module.scss'
import { useTranslations } from 'next-intl'

interface Props {
}
const PricesTriple = (props: Props) => {
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
        <div className={styles.prices__premium_second}></div>

        <h3 className={`${styles.c1} ${styles.r1} ${styles.prices__tarif}`}>{t('Basic.Name')}</h3>
        <h3 className={`${styles.c2} ${styles.r1} ${styles.prices__tarif}`}>{t('Premium.Name')}</h3>
        <h3 className={`${styles.c3} ${styles.r1} ${styles.prices__tarif}`}>{t('Premium_monthly.Name')}</h3>

        <h2 className={`${styles.c1} ${styles.r2} ${styles.prices__price}`}>{t('Basic.Pricing')}</h2>
        <h2 className={`${styles.c2} ${styles.r2} ${styles.prices__price}`}>
          {t('Premium.Pricing')}
          <p className={styles.prices__price_comment}>{t('Premium.Pricing-comment')}</p>
        </h2>
        <h2 className={`${styles.c3} ${styles.r2} ${styles.prices__price}`}>
          {t('Premium_monthly.Pricing')}
          <p className={styles.prices__price_comment}>{t('Premium_monthly.Pricing-comment')}</p>
        </h2>

        <div className={`${styles.c1} ${styles.r3}`}>{t('Basic.Results')}</div>
        <div className={`${styles.c2} ${styles.r3}`}>{t('Premium.Results')}</div>
        <div className={`${styles.c3} ${styles.r3}`}>{t('Premium_monthly.Results')}</div>

        <div className={`${styles.c1} ${styles.r4}`}>
          <ul className={styles.filters__list}>
            <li>{t('Basic.Filters.0')}</li>
            <li>{t('Basic.Filters.1')}</li>
            <li>{t('Basic.Filters.2')}</li>
          </ul>
        </div>
        <div className={`${styles.c2} ${styles.r4}`}>
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
        <div className={`${styles.c3} ${styles.r4}`}>
          <ul className={styles.filters__list}>
            <li>{t('Premium_monthly.Filters.0')}</li>
            <li>{t('Premium_monthly.Filters.1')}</li>
            <li>{t('Premium_monthly.Filters.2')}</li>
            <li>{t('Premium_monthly.Filters.3')}</li>
            <li>{t('Premium_monthly.Filters.4')}</li>
            <li>{t('Premium_monthly.Filters.5')}</li>
          </ul>
          <p className={styles.filters__more}>{t('Premium_monthly.Filters-additional')}</p>
        </div>

        <div className={`${styles.c1} ${styles.r5}`}>{t('Basic.Super-like')}</div>
        <div className={`${styles.c2} ${styles.r5}`}>{t('Premium.Super-like')}</div>
        <div className={`${styles.c3} ${styles.r5}`}>{t('Premium_monthly.Super-like')}</div>

        <div className={`${styles.c1} ${styles.r6}`}>{t('Basic.Dialogues')}</div>
        <div className={`${styles.c2} ${styles.r6}`}>{t('Premium.Dialogues')}</div>
        <div className={`${styles.c3} ${styles.r6}`}>{t('Premium_monthly.Dialogues')}</div>

        <div className={`${styles.c1} ${styles.r7}`}><Button id='basic' target='_blank' className={styles.prices__button_free} href={'https://app.roommate.host/'}>{t('Basic.Button')}</Button></div>
        <div className={`${styles.c2} ${styles.r7}`}><Button id='premium' target='_blank' onClick={handleOpen} href={'https://app.roommate.host/'}>{t('Premium.Button')}</Button></div>
        <div className={`${styles.c3} ${styles.r7}`}><Button id='premium_monhtly' target='_blank' onClick={handleOpen} href={'https://app.roommate.host/'}>{t('Premium_monthly.Button')}</Button></div>

      </Container>
      <SubscribeModal open={open} handleClose={handleClose} />
    </>
  )
}
export default PricesTriple