'use strict'
const { merge } = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // VUE_APP_BASE_API: '"http://158.247.220.52:9100"'
  VUE_APP_BASE_API: '"http://127.0.0.1:8090"'
})
