<template>
  <div>
    <h1>{{ msg }}</h1>
    <shared-element-list></shared-element-list>
  </div>
</template>

<script>
import SharedElementList from './SharedElementList'

export default {
  name: 'SharedElement',
  components: {
    SharedElementList
  },
  data () {
    return {
      msg: 'Game List'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
