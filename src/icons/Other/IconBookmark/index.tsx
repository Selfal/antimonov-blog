import { Icon, SvgProps } from '@icons/Icon'

export const IconBookmark = ({ size = 'm', ...props }: SvgProps) => {
  return (
    <Icon size={size}>
      <svg viewBox="0 0 24 24" {...props}>
        <path
          d="M3 0C2.79281 0 2.59182 0.0172618 2.39648 0.0492188C1.02913 0.272918 0 1.23975 0 2.4V24L12 19L24 24V2.4C24 2.235 23.9786 2.07305 23.9385 1.91719C23.6988 0.97957 22.7755 0.240961 21.6035 0.0492188C21.4082 0.0172618 21.2072 0 21 0H3Z"
          fill="#CC4343"
        />
      </svg>
    </Icon>
  )
}
