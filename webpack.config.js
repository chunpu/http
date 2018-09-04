var webpack = require('webpack')
var path = require('path')
var pkg = require('./package.json')
var util = require('util')

var config = {
  entry: {
    'http': './',
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // libraryTarget: 'commonjs',
    libraryTarget: 'umd',
    library: '[name]'
  },
  plugins: [
    new webpack.BannerPlugin(util.format('%s@%s by %s', pkg.name, pkg.version, pkg.author)),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version)
    })
  ]
}

// if (DEBUG) {
//   config.devtool = 'source-map'
// }

// if (PRODUCTION) {
//   config.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({minimize: true})
//   )
// }

module.exports = config
