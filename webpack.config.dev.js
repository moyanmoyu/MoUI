const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.js');

module.exports = Object.assign({}, base, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    })
  ]
});
