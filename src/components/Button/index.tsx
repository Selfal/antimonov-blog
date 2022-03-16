import classNames from 'classnames'
import './style.scss'

enum VIEW_CLASS {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  clear = 'clear',
}

enum SIZE_CLASS {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type Props = {
  children?: string
  onClick?: React.EventHandler<React.MouseEvent>
  view?: keyof typeof VIEW_CLASS
  size?: keyof typeof SIZE_CLASS
}

export const Button = ({
  view = 'primary',
  size = 'medium',
  children,
  onClick,
}: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event)
    }
  }

  const classes = classNames(`button button--${view} button--${size}`)

  return (
    <button className={classes} onClick={onClick ? handleClick : undefined}>
      <span>{children}</span>
    </button>
  )
}
