<template>
  <div>
    <h1>{{ msg }}</h1>
    <form name="loginForm">
      username : <input type="text" name="username" v-model="username" />
      <br><br>
      password : <input type="password" name="password" v-model="password" />
      <br><br>
      <input type="button" value="로그인" @click="handleLogin"/>
      <input type="button" value="클릭" @click="handleClick"/>
    </form>
    <div class="area01">
    </div>
    <div class="area02">
    </div>
    <div class="area03">
    </div>
    <div class="area04">
    </div>
    <sample></sample>
  </div>
</template>

<script>
export default {
  components: { },
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Login Try...',
      username: 'admin',
      password: 'pass'
    }
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('user/login', {'username': this.username, 'password': this.password})
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    handleClick () {
      console.log(this.username)
      console.log(this.password)
    }
  }
}
</script>

<style>
/* @import url('http://cdn.server.com/login.css'); */
</style>
