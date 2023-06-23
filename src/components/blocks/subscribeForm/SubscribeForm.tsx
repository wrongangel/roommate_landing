'use client'
import Button from '@/components/elements/button/Button'
import { useTranslations } from 'next-intl'
import styles from './SubscribeForm.module.scss'
interface Props {
  handleClose: () => void
}
const SubscribeForm = (props: Props) => {
  const t = useTranslations('Modal')
  return (
    <>
      <label className={styles.form__textInput}>
        <input type='email' placeholder="&nbsp;"></input>
        <span className={styles.form__textInput_placeholder}>{t('Hint')}</span>
      </label>
      <p>{t('Question')}</p>
      <div className={styles.form__checkList}>
          <label>
            <input type='checkbox' />
            <span>{t('Point1')}</span>
          </label>
          <label>
            <input type='checkbox' />
            <span>{t('Point2')}</span>
          </label>
          <label>
            <input type='checkbox' />
            <span>{t('Point3')}</span>
          </label>
          <label>
            <input type='checkbox' />
            <span>{t('Point4')}</span>
          </label>
      </div>
      <Button onClick={props.handleClose}>{t('Button')}</Button>
    </>
  )
}
export default SubscribeForm