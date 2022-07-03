import React, { createContext, useContext, useEffect } from 'react'
import { deepMapValues } from '@/helpers'
import { presetDark } from './presets/dark'
import './style.scss'

export type ThemePreset = {
  color: {
    primary: string
    accent: string
  }
  control: string
  font: string
  size: string
  space: string
  shadow: string
}

type Props = {
  children?: React.ReactNode
  className?: string
  preset: ThemePreset
}

type ThemeComponent = React.FC<Props>

const generateClassNames = (preset: ThemePreset) => {
  const { color, control, font, size, space, shadow } = preset
  return {
    color: {
      primary: `theme__color-primary--${color.primary}`,
      accent: `theme__color-accent--${color.accent}`,
    },
    control: `theme__control--${control}`,
    font: `theme__font--${font}`,
    size: `theme__size--${size}`,
    space: `theme__space--${space}`,
    shadow: `theme__shadow--${shadow}`,
  }
}

const defaultContextValue = {
  theme: presetDark,
  themeClassNames: generateClassNames(presetDark),
}

export const ThemeContext = createContext<{
  theme: ThemePreset
  themeClassNames: ThemePreset
}>(defaultContextValue)

export const Theme: ThemeComponent = ({ preset, children, className }) => {
  const themeClassNames = generateClassNames(preset)

  useEffect(() => {
    const body = document.body
    body.className = ''
    if (className) {
      body.classList.add(className)
    }
    body.classList.add(...deepMapValues(themeClassNames))
  }, [themeClassNames, className])

  return (
    <ThemeContext.Provider value={{ theme: preset, themeClassNames }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export { presetDark } from './presets/dark'
export { presetDefault } from './presets/default'
