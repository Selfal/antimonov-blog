const ReactRefrehWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')

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
}
