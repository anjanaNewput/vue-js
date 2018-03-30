<template>
  <div>
    <h1>{{message}}</h1>
    <p>MessageId:{{id}}</p>
    <input-box :msg="message" @messageChanged="message = $event"></input-box>
  </div>
</template>
<script>
/* @flow */
import InputBox from './inputComp.vue'
export default {
  data () {
    return {
      id: this.$route.params.id,
      message: 'hey how are you'
    }
  },
  components: {
    'input-box': InputBox
  }
}
</script>
