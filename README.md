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
$ touch webpack.config.json
```

Create `webpack.config.json` file:
