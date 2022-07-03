import { IconComponent } from '@/icons/Icon'
import classNames from 'classnames'
import './style.scss'

enum VIEW_CLASS {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  clear = 'clear',
}

enum SIZE_CLASS {
  s = 's',
  m = 'm',
  l = 'l',
}

enum SIZE_ICON {
  xs = 'xs',
  s = 'xs',
  m = 's',
  l = 'm',
}

enum SIZE_ONLY_ICON {
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'm',
}

export type Props = {
  label?: string
  view?: keyof typeof VIEW_CLASS
  size?: keyof typeof SIZE_CLASS
  disabled?: boolean
  width?: 'default' | 'full'
  iconLeft?: IconComponent
  iconRight?: IconComponent
  onlyIcon?: boolean
  onClick?: React.EventHandler<React.MouseEvent>
  className?: string
}

export type ButtonComponent = React.FC<Props>

export const Button: ButtonComponent = ({
  label,
  view = 'primary',
  size = 'm',
  disabled,
  width = 'default',
  iconLeft,
  iconRight,
  onlyIcon,
  onClick,
  className,
}) => {
  const withIcon = !!iconLeft || !!iconRight
  const IconLeft = iconLeft
  const IconRight = iconRight
  const IconOnly = onlyIcon && (IconLeft || IconRight)
  const IconSize = onlyIcon ? SIZE_ONLY_ICON[size] : SIZE_ICON[size]

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event)
    }
  }

  const classes = classNames(
    `button--size-${size} button button--view-${view}`,
    {
      'button--width-full': width === 'full',
      'button--with-icon': withIcon,
      'button--only-icon': IconOnly,
      'button--disabled': disabled,
      [`${className}`]: className,
    },
  )

  return (
    <button className={classes} onClick={onClick ? handleClick : undefined}>
      {IconOnly ? (
        <IconOnly size={IconSize} className="button__icon" />
      ) : (
        <>
          {IconLeft && <IconLeft size={IconSize} className="button__icon" />}
          <span className="button__text">{label}</span>
          {IconRight && <IconRight size={IconSize} className="button__icon" />}
        </>
      )}
    </button>
  )
}
