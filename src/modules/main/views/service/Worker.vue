<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { helloWorld } from '@/utils/utils.worker'

export default {
  name: 'HelloWorker',
  data: () => ({
    msg: 'Hello'
  }),
  async mounted () {
    await helloWorld()
  }
}
</script>
