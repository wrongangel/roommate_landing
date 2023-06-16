import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { HTMLAttributes } from "react"
import styles from './Button.module.scss'

interface Props {
  className?: HTMLAttributes<HTMLDivElement> | string,
  children?: React.ReactElement | string
  href?: Url
  onClick? : () => void
}
const Button = (props: Props) => {
  return (<>
    {props.href ?
      <Link href={props.href} className={`${styles.button} ${props.className}`}>{props.children}</Link>
      :
      <button onClick={props.onClick} className={`${styles.button} ${props.className}`}>{props.children}</button>
    }
  </>
  )
}
export default Button