import Container from '@/components/elements/container/Container'
import styles from './Brake.module.scss'

interface Props {
  second?: boolean
}
const Brake = (props: Props) => {
  return (
    <div className={styles.brake}>
      <Container className={styles.brake__container}>
        {!props.second ?
          <h2 className={styles.brake__text}>Be where you <span className={styles.brake__text_accent}>want</span> to be</h2>
          :
          <h2 className={styles.brake__text}>Co-living made <span className={styles.brake__text_accent}>easy</span></h2>
        }
      </Container>
    </div>
  )
}
export default Brake