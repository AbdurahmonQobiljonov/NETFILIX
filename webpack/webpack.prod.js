const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('production'),
    }),
  ],
}
