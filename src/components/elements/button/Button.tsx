import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { HTMLAttributes } from "react"
import styles from './Button.module.scss'

interface Props {
  className?: HTMLAttributes<HTMLDivElement> | string,
  children?: React.ReactElement | string
  href?: Url
  onClick? : () => void
  disabled?: boolean
  id?: string
  target?: string
}
const Button = (props: Props) => {
  return (<>
    {props.href ?
      <Link id={props.id} href={props.href} target={props.target} className={`${styles.button} ${props.className}`}>{props.children}</Link>
      :
      <button id={props.id} onClick={props.onClick} disabled={props.disabled} className={`${styles.button} ${props.className}`}>{props.children}</button>
    }
  </>
  )
}
export default Button