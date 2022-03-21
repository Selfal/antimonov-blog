import './style.scss'
import classNames from 'classnames'

export type IconPropSize = 'xs' | 's' | 'm' | 'l' | 'xl'

export type IconProps = {
  size: IconPropSize
  className?: string
  children: JSX.Element
}

export type SvgProps = Omit<IconProps, 'children'> &
  React.SVGProps<SVGSVGElement>

export type IconComponent = React.FC<SvgProps>

export const Icon = ({ size, children, className }: IconProps) => {
  const classes = classNames(`icon icon--size-${size}`, {
    className: className,
  })

  return <span className={classes}>{children}</span>
}
