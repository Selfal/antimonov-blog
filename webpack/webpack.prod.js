const Dotenv = require('dotenv-webpack')
const { tsLoader, cssLoader } = require('./loaders')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: '.env.production',
    }),
  ],
  module: {
    rules: [tsLoader('tsconfig.prod.json'), cssLoader(false)],
  },
}
