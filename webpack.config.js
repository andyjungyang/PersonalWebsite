const path = require('path');

module.exports = {
  entry: ['./src/components/Index.jsx', 'babel-polyfill'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
};
