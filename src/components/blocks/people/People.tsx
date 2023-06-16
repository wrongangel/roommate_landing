import Button from "@/components/elements/button/Button"
import Container from "@/components/elements/container/Container"
import Image from "next/image"
import styles from './People.module.scss'
import peopleImage from '@/assets/images/people.png'

interface Props {}
const People = (props: Props) => {
  return (
    <Container className={styles.people}>
      <div className={styles.people__content}>
        <h2 className={styles.content__header}>Find your <span className={styles.content__header_accent}>people</span></h2>
        <div className={styles.content__text}>
          <p>Find roommates who share your values and lifestyle, unite and conquer: go after desirable listings together or rent a spare room to the right person. </p>
          <p>Smart ‘human-like’ algorithm will quickly match you with roommates who fits your criteria - from age and gender to sleeping habits, smoking and pets.</p>
        </div>
        <Button href='#prices'>Get a roommate</Button>
      </div>
      <div className={styles.people__interactive}>
        <Image src={peopleImage} alt='' className={styles.interactive__image} />
      </div>
    </Container>
  )
}
export default People