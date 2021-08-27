// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'

import store from './store'

import 'es6-promise/auto'

import router from '@/router'
import '@/permission'

import '@/assets/css/style.css'

import { SharedElementDirective } from 'v-shared-element'

Vue.config.productionTip = false

let vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
Vue.use(vue)
Vue.use(SharedElementDirective)
