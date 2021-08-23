<template>
  <div id="app">
    <transition
      enter-active-class="animated bounceInLeft"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'

import { getComponents } from '@/utils/utils'

getComponents((componentName, componentConfig) => {
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

export default {
  name: 'App',
  mounted () {
    window.goHistBack = this.goHistBack
  },
  methods: {
    goHistBack () {
      if (undefined !== this.$route.meta['close'] && window.opener !== null) {
        window.close()
      } else {
        history.back()
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
/* @import url('http://cdn.server.com/app.css'); */
</style>
