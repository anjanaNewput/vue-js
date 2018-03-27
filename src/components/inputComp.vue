<template>
  <div>
    <input type="text" :value="msg" @input="changeMessage" v-focus>
    <p>{{message | capitalize}}</p>
  </div>
</template>
<script>
var demoMixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}
export default {
  props: ['msg'],
  mixins: [demoMixin],
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    changeMessage (event) {
      this.message = event.target.value
      this.$emit('messageChanged', this.message)
    }
  },
  created: function () {
    console.log(this.$data)
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        // el.focus()
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) {
        return ''
      }
      value = value.toString()
      return (value.charAt(0).toUpperCase() + value.slice(1))
    }
  }
}
</script>
