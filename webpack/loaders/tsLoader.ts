const path = require('path')

export const tsLoader = (tsconfigName = './tsconfig.json') => ({
  test: /\.ts(x?)$/,
  loader: 'ts-loader',
  options: {
    configFile: path.resolve(__dirname, '../..', tsconfigName),
  },
  exclude: /(node_modules)/,
})
