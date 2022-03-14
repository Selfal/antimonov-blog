const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const {
  cssLoader,
  babelLoader,
  fontsLoader,
  resourceLoader,
  tsLoader,
} = require('./loaders')

module.exports = {
  entry: path.resolve(__dirname, '../src', 'index.tsx'),
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [babelLoader, cssLoader, resourceLoader, fontsLoader, tsLoader],
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
      path: '.env',
    }),
  ],
  stats: 'errors-only',
}
