import './style.scss'
import React from 'react'
import classNames from 'classnames'

type variantPropType =
  | 'div'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

type displayPropType = 'block' | 'inline' | 'inlineBlock' | 'inlineFlex'

type fontStylePropType = 'italic'

type decorationPropType = 'underline' | 'through'

type sizePropType =
  | '2xs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'

type alignPropType = 'left' | 'center' | 'right'

type lineHeightPropType = '2xs' | 'xs' | 's' | 'm' | 'l'
type spacingPropType = 'xs' | 's' | 'm' | 'l'

export type Props = {
  component?: variantPropType
  display?: displayPropType
  fontStyle?: fontStylePropType
  decoration?: decorationPropType
  noWrap?: boolean
  align?: alignPropType
  transform?: 'uppercase' | 'lowercase'
  weight?: 'black' | 'bold' | 'semibold' | 'regular' | 'light' | 'thin'
  children?: React.ReactNode
  size?: sizePropType
  lineHeight?: lineHeightPropType
  spacing?: spacingPropType
  className?: string
}

export type TypographyComponent = React.FC<Props>

export const Typography: TypographyComponent = ({
  className,
  component = 'span',
  display,
  fontStyle,
  decoration,
  noWrap,
  align,
  transform,
  weight,
  children,
  size,
  lineHeight,
  spacing,
}) => {
  const classes = classNames('text', {
    [`text--display-${display}`]: display,
    [`text--font-style-${fontStyle}`]: fontStyle,
    [`text--decoration-${decoration}`]: decoration,
    'text--no-wrap': noWrap,
    [`text--align-${align}`]: align,
    [`text--transform-${transform}`]: transform,
    [`text--weight-${weight}`]: weight,
    [`text--size-${size}`]: size,
    [`text--line-height-${lineHeight}`]: lineHeight,
    [`text--spacing-${spacing}`]: spacing,
    [`${className}`]: className,
  })
  const Tag = component
  return <Tag className={classes}>{children}</Tag>
}
