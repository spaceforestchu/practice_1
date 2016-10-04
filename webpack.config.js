var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: './public/src/app.js'
  },

  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        test: '.jsx?$',
        loader: 'babel',
        query: {
          presets: ['react', 'es205']
        }
      }
    ]
  }

}
