let path = require('path')
let webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: './src/index.js',
  output: {
    publicPath: '/site/',
    path: path.join(__dirname, './site'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, 
        use: [        
          { loader: "style-loader" },
          { loader: "css-loader" }
        ] 
        
        // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      }

    ]
  }
}