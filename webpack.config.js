var webpack = require('webpack')
var path = require('path')
var pkg = require('./package.json')
var util = require('util')
var now = new Date().toISOString()

var banner = `
${pkg.name}@${pkg.version} by ${pkg.author}
${now}
`.trim()

var config = {
  entry: {
    'http': './',
  },
  mode: 'production',
  // devtool: false,
  // mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]'
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version)
    }),
    new webpack.ProvidePlugin({
      Promise: 'min-promise'
    })
  ]
}

module.exports = config
