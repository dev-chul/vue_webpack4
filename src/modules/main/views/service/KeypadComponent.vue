<template>
  <div class="input numeric-display">
    <NumericInput placeholder="touch to input" v-model="price" @focus="focusEvent" @blur="blurEvent" ref="v"/>
    <div class="numeric-x" @click="clearData">X</div>
  </div>
</template>

<script>
  import { NumericInput } from 'numeric-keyboard'

  export default {
    components: {
      NumericInput
    },
    props: {
      data: Number,
      name: {
        type: String,
        default: null
      }
    },
    mounted () {
      console.log(this.$refs.v)
      let closeFn = this.$refs.v.closeKeyboard
      this.$refs.v.closeKeyboard = (c) => {
        if(c === true) {
          closeFn()
        }else{
          this.$refs.v.set('isClose', true)
          if(null != this.$refs.v.ks.keyboard) {
            this.$refs.v.dispatch('blur')
          }
        }
      }
      let openFn = this.$refs.v.openKeyboard
      this.$refs.v.openKeyboard = (c) => {
        if(window.onKeyboard !== undefined) {
          window.onKeyboard.closeKeyboard()
          this.adaptPageHeight()
        }
        window.onKeyboard = this.$refs.v
        openFn()
      }
      if (null !== this.name) {
        this.$parent.$refs[this.name] = this.$refs.v
        if(window.keypad === undefined) {
          window.keypad = {}
        }
        window.keypad[this.name] = this.$refs.v
      }
    },
    data() {
      return {
        price: '',
        focusYN: false,
        resetYN: false
      }
    },
    methods: {
      clickEvent () {
        alert(1)
      },
      clearData () {
        console.log('clickClearData!!!')
        this.resetYN = true
        this.price = ''
      },
      focusEvent () {
        console.log('focusEvent!!!')
        this.adaptPageHeight()
      },
      blurEvent () {
        console.log('blurEvent!!! : ' + this.focusYN)
        if(true === this.$refs.v.ks.isClose && 'numeric-x' !== event.target.className) {
          this.$refs.v.set('isClose', undefined)
          this.$refs.v.closeKeyboard(true)
          window.onKeyboard = undefined
          this.resetYN == true
          this.resetPageHeight()
        }
      },
      adaptPageHeight () {
        const keyboard = document.getElementsByClassName('numeric-keyboard')[0]
        const win = window
        const body = document.body
        let diffHeight = win.innerHeight - keyboard.clientHeight
        if (diffHeight > 0) {
          this.orgHeight = body.clientHeight
          diffHeight += 30 // 30: additional gap
          body.style.height = body.clientHeight + keyboard.clientHeight + 'px'
          // event.target.scrollIntoView(true)
          // win.scrollTo(0, diffHeight)
        }
      },
      resetPageHeight () {
        const body = document.body
        body.style.removeProperty('height')
      }
    }
  }
</script>

<style>
  .numeric-input {
    border: 1px solid black;
    float: left;
  }
</style>
