/* @flow */
import facebookLogin from 'facebook-login-vuejs'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      pass: '',
      fbSignInParams: {
        scope: 'email,user_likes'
      },
      isConnected: false,
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
    getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()
    },
    onLogout() {
      this.isConnected = false;
    }
  },
  components: {
        facebookLogin
  }
}
