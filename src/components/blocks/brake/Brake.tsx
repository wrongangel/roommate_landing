import Container from '@/components/elements/container/Container'
import styles from './Brake.module.scss'

interface Props { }
const Brake = (props: Props) => {
  return (
    <div className={styles.brake}>
      <Container className={styles.brake__container}>
        <h2 className={styles.brake__text}>Be where you <span className={styles.brake__text_accent}>want</span> to be.</h2>
      </Container>
    </div>
  )
}
export default Brake