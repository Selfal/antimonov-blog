export const cssLoader = (sourceMap = false) => ({
  test: /\.(sa|sc|c)ss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: sourceMap,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: sourceMap,
      },
    },
  ],
})
