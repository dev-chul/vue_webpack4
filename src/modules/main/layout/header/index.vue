<template>
  <div>
    <h3
      style="text-align-last: left; margin: 15px;"
      @click="goHome"
    >Home</h3>
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
      this.$router.push('/home')
    }
  }
}
</script>
