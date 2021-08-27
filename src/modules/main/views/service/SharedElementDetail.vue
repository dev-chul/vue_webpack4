<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/sharedElement">
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
