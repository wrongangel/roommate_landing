import { UserPreview } from '@/types/userPreview'
import Image from 'next/image'
import styles from './UserCard.module.scss'
import more from '@/assets/svg/more.svg'

interface Props {
  user: UserPreview
  id: number,
}
const UserCard = ({user, id}: Props) => {
  return (
    <div id={id.toString()} className={styles.userCard}>
      <Image src={`/avatar/${user.avatar}`} alt='Avatar' width={40} height={40} className={styles.userCard__avatar}/>
      <div className={styles.userCard__content}>
        <h3 className={styles.userCard__content_head}>{user.name}, {user.age}</h3>
        <p className={styles.userCard__content_place}>{user.place}</p>
      </div>
      <Image src={more} alt='more' className={styles.userCard__button} />
    </div>
  )
}
export default UserCard