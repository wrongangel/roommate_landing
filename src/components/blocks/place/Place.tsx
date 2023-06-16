import Container from '@/components/elements/container/Container'
import Image from 'next/image'
import styles from './Place.module.scss'
import placeImage from '@/assets/images/place.png'
import Button from '@/components/elements/button/Button'

interface Props {}
const Place = (props: Props) => {
  return (
    <Container className={styles.place__container}>
      <div className={styles.place__interactive}>
        <Image src={placeImage} alt='' className={styles.place__interactive_image} />
      </div>
      <div className={styles.place__content}>
        <h2 className={styles.place__content_header}>Find your <span className={styles.place__content_accent}>place</span></h2>
        <div className={styles.place__content_text}>
          <p>Name your budget and location and choose the right offer.</p>
          <p>Get a match with perfect room or join forces with others and rent a whole flat together.</p>
        </div>
        <Button href='#prices'>Find a room</Button>
      </div>
    </Container>
  )
}
export default Place