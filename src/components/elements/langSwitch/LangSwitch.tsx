import language from '@/assets/svg/language.svg'
import Image from 'next/image'
import styles from './LangSwitch.module.scss'

interface Props { }
const LangSwitch = (props: Props) => {
  return (
    <div className={styles.langSwitch}>
      <Image src={language} alt='language icon' />
      Eng
    </div>
  )
}
export default LangSwitch