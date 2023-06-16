import Button from '@/components/elements/button/Button'
import Container from '@/components/elements/container/Container'
import styles from './Prices.module.scss'

interface Props {
 }
const Prices = (props: Props) => {
  return (
    <Container className={styles.prices__container}>
      <div id='prices' className={styles.prices__basic}></div>
      <div className={styles.prices__premium}></div>

      <div className={`${styles.c1} ${styles.r1}`}></div>
      <h3 className={`${styles.c2} ${styles.r1} ${styles.prices__tarif}`}>Basic</h3>
      <h3 className={`${styles.c3} ${styles.r1} ${styles.prices__tarif}`}>Nice and easy</h3>

      <h2 className={`${styles.c1} ${styles.r2} ${styles.prices__header}`}>Pricing</h2>
      <h2 className={`${styles.c2} ${styles.r2} ${styles.prices__price}`}>Free</h2>
      <h2 className={`${styles.c3} ${styles.r2} ${styles.prices__price}`}>
        55 ₪
        <p className={styles.prices__price_comment}>Per week <br />then 99 ₪  per month</p>
      </h2>

      <h3 className={`${styles.c1} ${styles.r3} ${styles.prices__subHeader}`}>Results</h3>
      <div className={`${styles.c2} ${styles.r3}`}>View best matches after "Quick & easy" plan user</div>
      <div className={`${styles.c3} ${styles.r3}`}>View best matches first on top of the feed</div>

      <h3 className={`${styles.c1} ${styles.r4} ${styles.prices__subHeader}`}>Filters</h3>
      <div className={`${styles.c2} ${styles.r4}`}>
        <ul className={styles.filters__list}>
          <li>Gender</li>
          <li>Age</li>
          <li>Location</li>
        </ul>
      </div>
      <div className={`${styles.c3} ${styles.r4}`}>
        <ul className={styles.filters__list}>
          <li>Gender</li>
          <li>Age</li>
          <li>Location</li>
          <li>Smoking habits</li>
          <li>Pets</li>
          <li>Kids</li>
        </ul>
        <p className={styles.filters__more}>and many more</p>
      </div>

      <h3 className={`${styles.c1} ${styles.r5} ${styles.prices__subHeader}`}>Super-like</h3>
      <div className={`${styles.c2} ${styles.r5}`}>Dialogue only after mutual match</div>
      <div className={`${styles.c3} ${styles.r5}`}>Don't wait for mutual match - connect right away</div>

      <h3 className={`${styles.c1} ${styles.r6} ${styles.prices__subHeader}`}>Dialogues</h3>
      <div className={`${styles.c2} ${styles.r6}`}>Up to 5 active dialogues with roommates, other tenants & landlords</div>
      <div className={`${styles.c3} ${styles.r6}`}>Unlimited active dialogues with roommates, other tenants & landlords</div>

      <div className={`${styles.c1} ${styles.r7}`}></div>
      <div  className={`${styles.c2} ${styles.r7}`}><Button>Get app</Button></div>
      <div className={`${styles.c3} ${styles.r7}`}><Button>Get app</Button></div>
    </Container>
  )
}
export default Prices