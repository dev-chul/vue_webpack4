<template>
  <div>
    <h1>{{ msg }}</h1>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <router-link to="/sharedElementDetail">
      <img
        src="/static/cute_dog.jpg"
        width="220px"
        v-shared-element:community-img="{
        }"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SharedElement',
  data () {
    return {
      msg: 'SharedElement'
    }
  },
  methods: {
  }
}
</script>
