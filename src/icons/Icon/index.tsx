import './style.scss'
import classNames from 'classnames'

export type IconPropSize = 'xs' | 's' | 'm' | 'l' | 'xl'

export type IconProps = {
  size: IconPropSize
  children: JSX.Element
}

export type SvgProps = Omit<IconProps, 'children'> &
  React.SVGProps<SVGSVGElement>

export const Icon = ({ size, children }: IconProps) => {
  const classes = classNames(`icon icon--size_${size}`)

  return <span className={classes}>{children}</span>
}
