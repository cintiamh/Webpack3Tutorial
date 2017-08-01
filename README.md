# Webpack3Tutorial

A step by step guide to make a webpack setup for Isomorphic web apps with React, Redux and Express.

## Node, webpack, babel

Start a `package.json` file:
```
$ npm init
```

Create `.gitignore` file:
```
.DS_Store
.idea
node_modules/
*.iml
```

Install webpack and babel:
```
$ npm i webpack webpack-dev-server --save-dev
$ npm i babel-core babel-loader babel-preset-latest babel-preset-react --save-dev
$ touch .babelrc
$ touch webpack.config.js
```

Create `webpack.config.js` file:
```javascript
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
};
```
