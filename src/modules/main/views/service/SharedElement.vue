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
  mounted () {
    console.log(this.$router)
    this.getGameList()
  },
  updated () {
    /*
      추후에 고민하면 좋을 것, router.js의 scrollBehavior 정상동작을 확인하였다.
      하지만 해당 화면이 비동기적으로 그리다보니 전달받은 scrollBehavior 값을 설정하는 시점에,
      움직일 스크롤이 아직 생성이 안되어 있어 정상동작하지 않는 것이라 우선 update로 뺐으나,
      이를 컴포넌트화 시키던가, 동기적으로 바꿔서 완벽한 소스를 만드는 것을 더욱 추구하자.
    */
    if (history.state !== null && history.state.y !== undefined) {
      window.scrollTo(0, history.state.y)
    }
  },
  methods: {
    getGameList () {
      console.log('called getGameList!!!')
      // fetch('http://127.0.0.1:8080/static/data/game-list.json')
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
