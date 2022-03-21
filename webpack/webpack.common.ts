import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import miniCss from 'mini-css-extract-plugin'
import Dotenv from 'dotenv-webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { babelLoader, fontsLoader, resourceLoader } from './loaders'

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src', 'index.tsx'),
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
      }),
    ],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [babelLoader, resourceLoader, fontsLoader],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new miniCss({
      filename: 'style.css',
    }),
    new Dotenv({
      silent: true,
    }),
  ],
  stats: 'errors-only',
}

export default config
