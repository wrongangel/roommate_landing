import Button from "@/components/elements/button/Button"
import Container from "@/components/elements/container/Container"
import styles from './Household.module.scss'
import shekel from '@/assets/svg/shekel.svg'
import vacuum_cleaner from '@/assets/svg/vacuum_cleaner.svg'
import cutlery from '@/assets/svg/cutlery.svg'
import agreement from '@/assets/svg/agreement.svg'
import other from '@/assets/svg/other.svg'
import householdImage from '@/assets/images/household.png'
import Image from "next/image"

interface Props {}
const Household = (props: Props) => {
  return (
    <Container className={styles.household__container}>
      <div className={styles.household__content}>
        <h2 className={styles.household__header}>Keep track on your <span className={styles.household__header_accent}>tenants</span> in one place</h2>
        <p className={styles.household__text}>Enjoy your roommates and leave unpleasant staff to the App - payment reminders, duty schedule, household planning etc.</p>
        <ul className={styles.household__pointsList}>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={shekel} alt='Shekel Icon' />
            <p className={styles.household__point_text}>Control payments</p>
          </li>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={vacuum_cleaner} alt='Cleaning Icon' />
            <p className={styles.household__point_text}>Scedule cleaning</p>
          </li>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={cutlery} alt='Cooking Icon' />
            <p className={styles.household__point_text}>Manage cooking queue</p>
          </li>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={agreement} alt='Agreement Icon' />
            <p className={styles.household__point_text}>Fixate agreements</p>
          </li>
          <li className={styles.household__point}>
            <Image className={styles.household__point_icon} src={other} alt='Others Icon' />
            <p className={styles.household__point_text}>Manage other things</p>
          </li>
        </ul>
        <Button href='#prices'>Setup household</Button>
      </div>
      <div className={styles.household__interactive}>
        <Image className={styles.household__image} src={householdImage} alt='Appartment image' />
      </div>
    </Container>
  )
}
export default Household