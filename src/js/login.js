import FloatingLabel from 'vue-simple-floating-labels'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      pass: '',
      googleSignInParams: {
        client_id: '333417956734-6dnsm5fq55eju99flciurghktt87ngrb.apps.googleusercontent.com'
      },
      hasError: false
    }
  },
  computed: {
  },
  methods: {
    login: function (e) {
      if (this.userName === 'anjana' && this.pass === '1234') {
        this.onLoginSuccess(this, this.userName)
      } else {
        this.hasError = true;
      }
    },
    openFbLoginDialog () {
      FB.login(this.checkLoginState, { scope: 'email' })
    },
    checkLoginState: function (response) {
      var self = this;
      if (response.status === 'connected') {
        FB.api('/me', { fields: 'name,email' }, function(profile) {
          self.onLoginSuccess(self, profile.name)

        });
      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook,
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
      }
    },
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      console.log(profile)
      this.onLoginSuccess(this, profile.ig)
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    onLoginSuccess (self, name) {
      self.$store.commit('setUserName', name)
      self.$localStorage.set('userName', name)
      self.$localStorage.set('userLoggedIn', true)
      self.$store.commit('checkUser', true)
      self.$router.push('/book-list')
    }
  },
  components: {
    FloatingLabel
  }
}
