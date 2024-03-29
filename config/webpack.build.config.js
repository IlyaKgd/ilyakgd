const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

const buildWebpackConfig = merge(webpackConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        './assets/*',
        './image/*',
        './*.html',
        './*.json'
      ]
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
