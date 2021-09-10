<template>
  <div id="app">
    <transition
      enter-active-class="animated bounceInLeft"
    >
      <router-view/>
    </transition>
    <!-- Custom Alert을 띄우기 위한 Vuetify component -->
    <v-dialog/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from '@/plugins/vuetify'
import VModal from 'vue-js-modal'

import { getComponents } from '@/utils/utils'

Vue.use(Vuetify)
Vue.use(VModal, { dialog: true })

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
    Vue.prototype.$customConfirm = this.customConfirm
  },
  methods: {
    goHistBack () {
      if (undefined !== this.$route.meta['close'] && window.opener !== null) {
        window.close()
      } else {
        history.back()
      }
    },
    customConfirm () {
      this.$modal.show('dialog', {
        title: 'The standard Lorem Ipsum passage',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttons: [
          {
            title: 'Cancel',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Like',
            default: true,
            handler: () => {
              alert('Like action')
            }
          },
          {
            title: 'Repost',
            handler: () => {
              alert('Repost action')
            }
          }
        ]
      })
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
