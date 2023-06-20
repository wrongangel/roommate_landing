import { HTMLAttributes } from 'react'
import styles from './Container.module.scss'

interface Props {
  children: React.ReactNode,
  className?: HTMLAttributes<HTMLDivElement> | string,
  id?: string,
  onClick? : (e: any) => void
}
const Container = ({
  children,
  className,
  id,
  onClick
}: Props) => {
  return (
    <div id={id} className={`${styles.container} ${className}`} onClick={onClick}>{children}</div>
  )
}
export default Container