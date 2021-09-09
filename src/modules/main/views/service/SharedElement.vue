<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li  v-for="item in gameList" v-bind:key="item.id">
        <router-link :to="{path: '/sharedElementDetail', query: {id: item.id, img: item.img1}}">
          <img
            :src=item.img1
            width="220px"
            v-shared-element:[`community-${item.id}`]="{
            }"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SharedElement',
  data () {
    return {
      // msg: 'SharedElement',
      msg: 'Game List',
      gameList: null
    }
  },
  async mounted () {
    await this.getGameList()
  },
  methods: {
    getGameList () {
      console.log('called getGameList!!!')
      fetch('http://146.56.174.154:8090/static/data/game-list.json')
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((json) => {
          console.log(json)
          this.gameList = json
        })
        .catch((error) => {
          console.log(error)
        })
    },
    routeMatchesSharedId (to, _, id) {
      console.log('called routeMatchesSharedId!!! ' + id)
      return id.includes(to.params.id)
    }
  }
}
</script>
