/* @flow */

export default {
  data () {
    return {
      name: null,
      email: null,
      phone: null,
      address: null
    }
  },
  created() {
  },
  methods: {
    validateBeforeSubmit: function () {
      var name = this.name
      function error () {
        console.log(name)
      }
      function success () {
        console.log(name)
      }
      this.$validator.validateAll().then(error, success)
    }
  }
}
