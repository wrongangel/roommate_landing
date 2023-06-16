import { HTMLAttributes } from 'react'
import styles from './Container.module.scss'

interface Props {
  children: React.ReactNode,
  className?: HTMLAttributes<HTMLDivElement> | string,
  id?: string
}
const Container = ({
  children,
  className,
  id
}: Props) => {
  return (
    <div id={id} className={`${styles.container} ${className}`}>{children}</div>
  )
}
export default Container