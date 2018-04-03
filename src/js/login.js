
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
    },
    openFbLoginDialog () {
      FB.login(function(response) {
          console.log(response)
       }, { scope: 'email' })
    }
  },
  components: {
  }
}
