const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

const devWebpackConfig = merge(webpackConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: webpackConfig.externals.paths.public
    },
    watchFiles: [webpackConfig.externals.paths.src],
    port: 8081,
    hot: true,
    historyApiFallback: true,
    compress: false,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
