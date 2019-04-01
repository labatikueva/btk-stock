const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcFolder = path.resolve(__dirname, '..', 'src');
const outFolder = path.resolve(__dirname, '..', 'build');

module.exports = {
  srcFolder: srcFolder,
  outFolder: outFolder,
  common: {
    entry: {
      batikueva: `${srcFolder}/index.js`
    },
    output: {
      path: outFolder,
      filename: 'javascripts/[name].[hash].js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: `${srcFolder}/index.html` }),
      new MiniCssExtractPlugin({ filename: 'stylesheets/[name].[contenthash].css', chunkFilename: 'stylesheets/[id].css' }),
      new CopyPlugin([{ from: `${srcFolder}/images`,  to: `${outFolder}/images` }])
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(pn|jp|jpe)g$/,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                disable: true
              }
            }
          ]
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[=a-zA-Z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: { name: '[name].[ext]', outputPath: 'fonts/', publicPath: '../fonts' }
            }
          ]
        },
        {
          test: /domain.*\.html$/,
          use: [
            {
              loader: 'file-loader',
              options: { name: '[name].[ext]' }
            }
          ]
        }
      ]
    }
  }
};
