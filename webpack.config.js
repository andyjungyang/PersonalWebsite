const path = require('path');

module.exports = {
  entry: ['./src/renderer/dom.js', '@babel/polyfill'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
};
