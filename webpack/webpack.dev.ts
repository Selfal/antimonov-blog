import ReactRefrehWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import { tsLoader, cssLoader } from './loaders'

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ReactRefrehWebpackPlugin(),
    new Dotenv({
      path: 'env/.env.development',
    }),
  ],
  module: {
    rules: [tsLoader('tsconfig.json'), cssLoader(true)],
  },
}
