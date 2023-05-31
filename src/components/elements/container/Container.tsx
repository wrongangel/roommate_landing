import { HTMLAttributes } from 'react'
import styles from './Container.module.scss'

interface Props {
  children: React.ReactNode,
  className?: HTMLAttributes<HTMLDivElement> | string
}
const Container = ({
  children,
  className
}: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>{children}</div>
  )
}
export default Container