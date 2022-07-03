export const cssLoader = (sourceMap = false) => ({
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: "style-loader",
      options: { injectType: "singletonStyleTag" },
    },
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
