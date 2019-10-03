const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.js');

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    index: './example/index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html'
    })
  ]
});
