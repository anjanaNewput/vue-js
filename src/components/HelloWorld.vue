<template>
  <div class="hello-world">
    <h1>{{ msg | capitalize}}</h1>
    <ul>
      <li>First Name: {{firstName | capitalize}}</li>
      <li>Second Name: {{lastName | capitalize}}</li>
      <li> Full Name: {{fullname | capitalize}} </li>
    </ul>
    <form class="form-horizontal">
      <div class="row">
        <div class="form-group">
          <label for="firstName" class="control-label col-sm-2">First Name</label>
          <div class="col-sm-6"><input type="text" id="firstName" class="form-control" v-model="firstName"/></div>
        </div>
        <div class="form-group">
          <label for="fullName" class="control-label col-sm-2">Full Name</label>
          <div class="col-sm-6"><input type="text" id="fullName" class="form-control" v-model="fullname"/></div>
        </div>
        <div class="form-group">
          <label for="lastName" class="control-label col-sm-2">Last Name</label>
          <div class="col-sm-6"><input type="text" id="lastName" class="form-control" v-model="lastName"/></div>
        </div>
        <button class="btn btn-primary">close</button>
      </div>
    </form>
    <message></message>
  </div>

</template>

<script>
import Message from './message.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (value) {
        var name = value.split(' ')
        this.firstName = name[0]
        this.lastName = name[name.length - 1]
      }
    }
  },
  methods: {
  },
  components: {
    'message': Message
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
