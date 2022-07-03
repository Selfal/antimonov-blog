import './style.scss'
import React from 'react'
import {
  Theme,
  ThemePreset,
  presetDark,
  presetDefault,
} from '@/components/Theme'

type ThemeName = 'default' | 'dark'

type StoryBookProps = {
  themeName: ThemeName
  className: string
}

function getPreset(themeName: ThemeName): ThemePreset {
  const obj = {
    default: presetDefault,
    dark: presetDark,
  }
  return obj[themeName] || presetDefault
}

export const StorybookThemeDecorator: React.FC<StoryBookProps> = (props) => {
  const { children, themeName } = props
  const content = (
    <Theme preset={getPreset(themeName)} className="storybook-decorator">
      {children}
    </Theme>
  )

  return content
}
