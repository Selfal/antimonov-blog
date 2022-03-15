import Dotenv from 'dotenv-webpack'
import { tsLoader, cssLoader } from './loaders'

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: 'env/.env.production',
    }),
  ],
  module: {
    rules: [tsLoader('tsconfig.prod.json'), cssLoader(false)],
  },
}
