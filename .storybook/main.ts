import common from '../webpack/webpack.config'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { merge } from 'webpack-merge'

const config = {
  builder: 'webpack5',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-sass-postcss',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config: any) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]
    return merge(common, config)
  },
}
export default config
