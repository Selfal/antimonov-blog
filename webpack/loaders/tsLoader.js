const path = require('path')

module.exports = (tsconfigName = './tsconfig.json') => {
  return {
    test: /\.ts(x?)$/,
    loader: 'ts-loader',
    options: {
      configFile: path.resolve(__dirname, '../..', tsconfigName),
    },
    exclude: /(node_modules)/,
  }
}
