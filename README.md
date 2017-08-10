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
$ npm i babel-core babel-preset-es2015 babel-preset-react --save-dev
$ npm i babel-loader style-loader css-loader file-loader --save-dev
$ npm i html-webpack-plugin clean-webpack-plugin --save-dev
$ touch .babelrc
$ touch webpack.config.js
```

Install React and Redux related packages:
```
$ npm i react react-dom redux --save
```

Create `webpack.config.js` file:
```javascript
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Test app'
    })
  ],
  output: {
    path: path.resolve(__dirname + 'dist'),
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
};
```

## Express

Install express:
```
$ npm i express --save
```

Setting up the Server entry point (src/server.js):
```javascript
const express = require('express');

const app = express();
app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
```

## Routing with Express

Adding a `/test` path:
```javascript
const express = require('express');
const app = express();
app.get('/test', (req, res) => {
  res.send('Test route success!');
});
app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
```

and run:
```
$ node src/app.js
```

### Regular expression in routes

Express supports regular expressions as routes.

You can use `*` to handle any route that is not expected, for example:
```javascript
const express = require('express');
const app = express();
app.get('/test', (req, res) => {
  res.send('Test route success!');
});
app.get('/*', (req, res) => {
  res.send(`${req.url} route success!`);
});
app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
```

## Adding middleware for view rendering
