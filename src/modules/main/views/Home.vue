<template>
  <div>
    <h1>{{ msg }}</h1>
    <sample></sample>
    <router-link to="/worker">Worker</router-link>
    <br/>
    <router-link to="/transit">TransitionSample</router-link>
    <br/>
    <router-link to="/keypad">CustomKeypad</router-link>
    <br/>
    <router-link to="/modal">Modal</router-link>
    <br/>
    <router-link to="/customModal">CustomModal</router-link>
    <br/>
    <router-link to="/sharedElement">SharedElement</router-link>
    <br/>
    <img
      src="/static/cute_dog.jpg"
      width="220px"
      v-shared-element:community-img="{
      }"
    />
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
