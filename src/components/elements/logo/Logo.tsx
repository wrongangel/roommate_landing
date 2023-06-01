import styles from './Logo.module.scss'
import logo from '@/assets/svg/logo.svg'
import Image from 'next/image'

interface Props {}
const Logo = (props: Props) => {
  return (
    <div className={styles.logo}>
      <Image className={styles.logo__icon} src={logo} alt='Roommate Logo Icon' />
      Roommate.host
    </div>
  )
}
export default Logo