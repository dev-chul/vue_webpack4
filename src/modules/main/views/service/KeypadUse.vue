<template>
  <div>
    <div>
      <Keypad
        :data="price"
        name="keypad1"
      />
    </div>
    <div style="clear:both;"></div>
    <div>
      <Keypad
        :data="number"
        name="keypad3"
      />
    </div>
  </div>
</template>

<script>
import Keypad from './KeypadComponent'

export default {
  components: {
    Keypad
  },
  mounted () {

  },
  data () {
    return {
      price: 1,
      amount: 0,
      number: 3,
      xo: 0
    }
  },
  methods: {
    clickEvent () {
      alert(1)
    }
  }
}
</script>

<style>
  .numeric-x {
    border: 1px solid black;
    float: left;
    height: inherit;
  }
  .numeric-display {
    display: flex;
  }
</style>
