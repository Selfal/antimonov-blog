import {StorybookThemeDecorator} from '../src/components/StorybookThemeDecorator'
import './style.scss'
import { withA11y } from '@storybook/addon-a11y'
import { addDecorator, addParameters } from '@storybook/react'
import { withThemes } from 'storybook-addon-themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

const themes = [
  {
    name: 'default',
    color: '#fff',
  },
  {
    name: 'dark',
    default: true,
    color: '#0E1217',
  },
];

addParameters({
  themes: {
    list: themes,
    Decorator: StorybookThemeDecorator,
  },
});

addDecorator(withThemes);
addDecorator(withA11y as any)