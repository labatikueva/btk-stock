const merge = require('webpack-merge');
const config = require('./webpack.config')

module.exports = merge(config.common, {
  mode: 'production',
});