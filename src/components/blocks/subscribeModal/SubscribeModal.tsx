import Button from '@/components/elements/button/Button'
import Container from '@/components/elements/container/Container'
import Image from 'next/image'
import styles from './SubscribeModal.module.scss'
import logo from '@/assets/svg/logo.svg'
import SubscribeForm from '../subscribeForm/SubscribeForm'

interface Props {
  open: boolean,
  handleClose: () => void
}
const SubscribeModal = (props: Props) => {
  return (
    <div className={`${styles.modal} ${!props.open && styles.modal__hide}`} onClick={props.handleClose}>
      <Container className={styles.modal__container}>
        <div className={styles.modal__window} onClick={e => e.stopPropagation()}>
          <div className={styles.modal__heroBlock}>
            <Image src={logo} alt='Roommate logo'  className={styles.modal__logo_image}/>
            <h2 className={styles.modal__logo_text}>Roommate.host</h2>
          </div>
          <div className={styles.modal__content}>
            <div className={styles.modal__content_block}>
              <h2 className={styles.modal__header}>Sign Up for beta</h2>
              <p className={styles.modal__text}>Roommate.host is in development right now, you can sign up for invite and we notify you when we start beta test.</p>
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