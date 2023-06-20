import Button from '@/components/elements/button/Button'
import styles from './SubscribeForm.module.scss'
interface Props {
  handleClose: () => void
}
const SubscribeForm = (props: Props) => {
  return (
    <>
      <label className={styles.form__textInput}>
        <input type='email' placeholder="&nbsp;"></input>
        <span className={styles.form__textInput_placeholder}>Email</span>
      </label>
      <p>What functions are you interested in?</p>
      <div className={styles.form__checkList}>
          <label>
            <input type='checkbox' />
            <span>I am searching for room</span>
          </label>
          <label>
            <input type='checkbox' />
            <span>I want to rent my room</span>
          </label>
          <label>
            <input type='checkbox' />
            <span>I want to find people to rent together</span>
          </label>
          <label>
            <input type='checkbox' />
            <span>I want to manage my household</span>
          </label>
      </div>
      <Button onClick={props.handleClose}>Sign up</Button>
    </>
  )
}
export default SubscribeForm