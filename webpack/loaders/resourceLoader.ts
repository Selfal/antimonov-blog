export const resourceLoader = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: 'asset/resource',
  generator: {
    filename: '[path][name].[hash][ext][query]',
  },
}
