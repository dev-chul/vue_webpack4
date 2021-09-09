'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const { merge } = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const JsDocPlugin = require("jsdoc-webpack-plugin")

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.local.productionSourceMap,
      usePostCSS: true
    })
  },
  devtool: config.local.devtool,
  // output: { },

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.local.assetsPublicPath, 'index.html') }
      ]
    },
    hot: true,
    open: true,
    contentBase: false,
    compress: true,
    host: HOST || config.local.host,
    port: PORT || config.local.port,
    open: config.local.autoOpenBrowser,
    overlay: config.local.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.local.assetsPublicPath,
    proxy: config.local.proxyTable,
    quiet: true,
    watchOptions: {
      poll: config.local.poll
    }
  },
  plugins: [
    // new JsDocPlugin({
    //   conf: "jsdoc.config.json",
    //   cwd: ".",
    //   preserveTmpFile: false
    // }),
    new webpack.DefinePlugin({
      'process.env': require('../config/local.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.local.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ].concat(
    Object.keys(baseWebpackConfig.entry).map(function(entryName) {
      console.log('entryName : '  + entryName)
      return new HtmlWebpackPlugin({
        filename: entryName + '/index.html',
        template: './src/modules/' + entryName + '/index.html',
        chunks: [entryName],
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'manual'
      })
    })
  )
})

if (config.local.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  devWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.local.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
        },
        onErrors: config.local.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
