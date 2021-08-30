<template>
  <div>
    <h3
      style="text-align-last: left; margin: 15px;"
      @click="goHome"
    >Back</h3>
    <div>
       <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goHome () {
      if (window.history.length === 1) {
        this.$router.push('/home')
      } else {
        window.history.back()
      }
    }
  }
}
</script>
