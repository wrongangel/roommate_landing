'use client'
import Button from '@/components/elements/button/Button'
import Container from '@/components/elements/container/Container'
import Image from 'next/image'
import styles from './SubscribeModal.module.scss'
import logo from '@/assets/svg/logo.svg'
import close from '@/assets/svg/closeWhite.svg'
import SubscribeForm from '../subscribeForm/SubscribeForm'
import { useTranslations } from 'next-intl'

interface Props {
  open: boolean,
  handleClose: () => void
}
const SubscribeModal = (props: Props) => {
  const t = useTranslations('Modal')
  return (
    <div className={`${styles.modal} ${!props.open && styles.modal__hide}`} onClick={props.handleClose}>
      <Container className={styles.modal__container}>
        <div className={styles.modal__window} onClick={e => e.stopPropagation()}>
          <button onClick={props.handleClose} className={styles.modal__closeButton}>
            <Image src={close} alt='Close modal' width={32} height={32} />
          </button>
          <div className={styles.modal__heroBlock}>
            <Image src={logo} alt='Roommate logo'  className={styles.modal__logo_image}/>
            <h2 className={styles.modal__logo_text}>Roommate.host</h2>
          </div>
          <div className={styles.modal__content}>
            <div className={styles.modal__content_block}>
              <h2 className={styles.modal__header}>{t('Header')}</h2>
              <p className={styles.modal__text}>{t('Text')}</p>
            </div>
            <div className={styles.modal__content_block}>
              <SubscribeForm handleClose={props.handleClose} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default SubscribeModal