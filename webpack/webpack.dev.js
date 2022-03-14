const ReactRefrehWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { tsLoader, cssLoader } = require('./loaders')

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
      path: '.env.development',
    }),
  ],
  module: {
    rules: [tsLoader('tsconfig.json'), cssLoader(true)],
  },
}
