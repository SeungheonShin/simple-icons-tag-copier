const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const path = require('path');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: [
      path.posix.resolve(__dirname, 'node_modules'),
      path.posix.resolve(__dirname, 'dist'),
    ],
  },
});
