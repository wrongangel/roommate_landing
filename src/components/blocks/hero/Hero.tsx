import Button from '@/components/elements/button/Button'
import Container from '@/components/elements/container/Container'
import styles from './Hero.module.scss'

interface Props {}
const Hero = (props: Props) => {
  return (
    <Container className={styles.hero__container}>
      <h1 className={styles.hero__header}>Find people with right <span className={styles.hero__header_accent}>vibe & accommodation</span> that suits you</h1>
      <p className={styles.hero__text}>Making your dream-housing possible with fewer compromises.</p>
      <Button />
    </Container>
  )
}
export default Hero