/* @flow */
import facebookLogin from 'facebook-login-vuejs'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      pass: '',
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
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
    },
    getUserData: function (data) {
      console.log(data)
    },
    onLogout: function () {
      console.log('logout')
    }
  },
  components: {
        facebookLogin
  }
}
