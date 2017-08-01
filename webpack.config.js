var path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/main.js'),
  debug: true,
  output: {
    path.resolve(__dirname + '/dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
