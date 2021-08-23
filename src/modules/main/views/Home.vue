<template>
  <div>
    <h1>{{ msg }}</h1>
    <sample></sample>
    <router-link to="/transit">TransitionSample</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home by Main entry..!'
    }
  },
  methods: {
  }
}
</script>
