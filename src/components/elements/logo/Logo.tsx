import styles from './Logo.module.scss'
import logo from '@/assets/svg/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  white?: boolean
}
const Logo = (props: Props) => {
  return (
    <Link href='/' className={`${styles.logo} ${props.white && styles.logo__white}`}>
      <Image className={styles.logo__icon} src={logo} alt='Roommate Logo Icon' />
      Roommate.host
    </Link>
  )
}
export default Logo