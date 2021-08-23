<template>
  <div class="input">
    <!-- <table>
      <tr>
        <td><label>Price: </label></td>
        <td><NumericInput placeholder="touch to input" v-model="price" v-on:focus="focusEvent" @blur="blurEvent"/><br/></td>
      </tr>
    </table>
    Line 0<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 2<br/>
    <table>
      <tr>
        <td><label>Number: </label></td>
        <td><NumericInput placeholder="touch to input" v-model="number" v-on:focus="focusEvent" @blur="blurEvent"/><br/></td>
      </tr>
    </table>
    <table>
      <tr>
        <td><label>Xo: </label></td>
        <td><NumericInput placeholder="touch to input" v-model="xo" v-on:focus="focusEvent" @blur="blurEvent"/><br/></td>
      </tr>
    </table>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 1<br/>
    Line 3<br/>
    <table>
      <tr>
        <td><label>Amount: </label></td>
        <td><NumericInput placeholder="touch to input" v-model="amount" @focus="focusEvent" @blur="blurEvent"/></td>
      </tr>
    </table>
    <button @click="clickEvent">다음으로...</button> -->
  </div>
</template>

<script>
  // import { NumericInput } from 'numeric-keyboard'

  // export default {
  //   components: {
  //     NumericInput
  //   },
  //   data() {
  //     return {
  //       price: 0,
  //       amount: 0,
  //       number: 0,
  //       xo: 0
  //     }
  //   },
  //   methods: {
  //     clickEvent () {
  //       alert(1)
  //     },
  //     focusEvent () {
  //       console.log('focusEvent!!!')
  //       this.adaptPageHeight()
  //     },
  //     blurEvent () {
  //       console.log('blurEvent!!!')
  //       this.resetPageHeight()
  //     },
  //     adaptPageHeight () {
  //       const keyboard = document.getElementsByClassName('numeric-keyboard')[0]
  //       const win = window
  //       const body = document.body
  //       let diffHeight = win.innerHeight - keyboard.clientHeight
  //       if (diffHeight > 0) {
  //         this.orgHeight = body.clientHeight
  //         diffHeight += 30 // 30: additional gap
  //         body.style.height = body.clientHeight + keyboard.clientHeight + 'px'
  //         event.target.scrollIntoView(true)
  //         // win.scrollTo(0, diffHeight);
  //       }
  //     },
  //   resetPageHeight () {
  //     const body = document.body
  //     body.style.removeProperty('height')
  //   }
  //   }
  // }
</script>
