const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 9000
  },
  plugins: [
    new ESLintPlugin()
  ]
});
