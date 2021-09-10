<template>
  <div>
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
  name: 'SharedElementList',
  data () {
    return {
      gameList: null
    }
  },
  mounted () {
    this.getGameList()
  },
  updated () {
    if (history.state !== null && history.state.y !== undefined) {
      window.scrollTo(0, history.state.y)
    }
  },
  methods: {
    getGameList () {
      fetch(process.env.VUE_APP_BASE + '/static/data/game-list.json')
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((json) => {
          this.gameList = json
        })
        .catch((error) => {
          console.log(error)
        })
    },
    routeMatchesSharedId (to, _, id) {
      return id.includes(to.params.id)
    }
  }
}
</script>
