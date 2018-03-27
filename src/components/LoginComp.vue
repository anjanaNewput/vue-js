<template>
  <div class="login-page">
    <div class="form">
      <form class="login-form">
        <input type="text" placeholder="username" v-model="userName"/>
        <input type="password" placeholder="password" v-model="pass"/>
        <button @click.prevent="login">login</button>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      pass: ''
    }
  },
  computed: {

  },
  methods: {
    login: function (e) {
      if (this.userName === 'anjana' && this.pass === '1234') {
        this.$store.commit('setUserName', this.userName)
        this.$localStorage.set('userName', this.userName)
        this.$localStorage.set('userLoggedIn', true)
        this.$store.commit('checkUser', true)
        this.$router.push('/book-list')
      }
    }
  }
}
</script>

<style lang="sass">
  @import './src/assets/scss/login.scss'
</style>
