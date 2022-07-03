import './style.scss'
import IMG from '../public/logo512.png'
import { Button, Typography } from '@components'
import { IconJs, IconApple } from './icons'
import {
  Theme,
  ThemePreset,
  presetDark,
  presetDefault,
} from '@/components/Theme'
import { useState } from 'react'

export const App = () => {
  type ThemeName = 'default' | 'dark'

  function getPreset(themeName: ThemeName): ThemePreset {
    const obj = {
      default: presetDefault,
      dark: presetDark,
    }
    return obj[themeName] || presetDefault
  }

  const [theme, setTheme] = useState<ThemeName>('default')

  return (
    <Theme preset={getPreset(theme)}>
      <h1>Hello world</h1>
      <img src={IMG} alt="logo" />
      <h2>{process.env.NODE_ENV}</h2>
      <h2>{process.env.name}</h2>
      <h3>Test .env: {process.env.REACT_APP_ENV}</h3>
      <h3>Test .env.*: {process.env.REACT_APP_MODE}</h3>

      <div style={{ display: 'flex' }}>
        <Button
          size="m"
          iconLeft={IconJs}
          iconRight={IconApple}
          label="Hello"
          onClick={() =>
            setTheme((prev) => (prev === 'dark' ? 'default' : 'dark'))
          }
        />
      </div>
      <Typography component="h1" className="test-test" noWrap lineHeight="s">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        commodo vel nunc vitae placerat. Phasellus id urna porttitor, egestas
        nibh sed, eleifend turpis. Donec in volutpat risus. Vivamus congue non
        est non aliquam. Vivamus tincidunt molestie lorem, in suscipit mi
        iaculis eu.
      </Typography>
    </Theme>
  )
}
