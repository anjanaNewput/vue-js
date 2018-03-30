/* @flow */
function doSomethingStupid (stringArg) {
  // Flow should show an error here, "The operand of an arithmetic operation must be a number."
  return stringArg * 3109;
}

console.log(doSomethingStupid('string'))

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
