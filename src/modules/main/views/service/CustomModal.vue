<template>
  <div>
    <h1>{{ msg }}</h1>
    <br/>
    <button class="btn" @click="showConfirm">확인/취소</button>
  </div>
</template>

<script>

export default {
  name: 'CustomModal',
  data () {
    return {
      msg: 'Welcome to CustomModal..!'
    }
  },
  mounted () {

  },
  methods: {
    showConfirm () {
      console.log('CustomModal.vue showConfirm ()')
      this.$customConfirm()
    }
  }
}
</script>
