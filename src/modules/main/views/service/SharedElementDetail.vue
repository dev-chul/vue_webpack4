<template>
  <div>
    <router-link to="/sharedElement">
      <img
        :src="$route.query.img"
        width="100%"
        v-shared-element:[`community-${$route.query.id}`]="{
        }"
      />
    </router-link>
    <div style="margin: 10px; text-align: justify; font-size: 13px;">
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharedElement',
  data () {
    return {
      msg: 'SharedElement',
      content: ''
    }
  },
  async mounted () {
    await this.getGameList()
  },
  methods: {
    getGameList () {
      fetch('http://146.56.174.154:8090/static/data/game-list.json')
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((json) => {
          let index = Number(this.$route.query.id) - 1
          this.content = json[index].content
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
