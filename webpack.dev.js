const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000
  },
  plugins: [
    new ESLintPlugin(),
    new BundleAnalyzerPlugin()
  ]
});
