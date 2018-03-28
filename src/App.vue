<template src="./views/app.html"></template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    userName: function () {
      return this.$store.state.userName
    },
    userLoggedIn: function () {
      return this.$store.state.isUserLogged
    }
  },
  mounted: function () {
    this.$store.commit('checkUser', this.$localStorage.get('userLoggedIn') != null ? this.$localStorage.get('userLoggedIn') : false)
    this.$store.commit('setUserName', this.$localStorage.get('userName') != null ? this.$localStorage.get('userName') : '')
  },
  methods: {
    logout: function () {
      this.$localStorage.remove('userLoggedIn')
      this.$localStorage.remove('userName')
      this.$store.commit('setUserName', '')
      this.$store.commit('checkUser', false)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass">
@import './assets/scss/app.scss'
</style>
