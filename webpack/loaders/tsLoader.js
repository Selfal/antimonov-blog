const path = require('path')

module.exports = {
  test: /\.ts(x?)$/,
  loader: 'ts-loader',
  options: {
    configFile: path.resolve(__dirname, '../..', 'tsconfig.json'),
  },
  exclude: /(node_modules)/,
}
