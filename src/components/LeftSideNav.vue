<template src="../views/left-side-nav.html"></template>

<script>
export default {
  data () {
    return {
      subjects: ['php', 'java', 'bootstrap', 'css3', 'jquery', 'javascript', 'node', 'angular', 'python'],
      isActive: this.$localStorage.get('subjectIndex') ? this.$localStorage.get('subjectIndex') : 0
    }
  },
  methods: {
    getBooks: function (subject, index) {
      this.isActive = index
      this.$store.dispatch({
        type: 'getBooks',
        subject: subject
      })
      this.$router.push({name: 'Book', params: {sub: subject}})
      this.$localStorage.set('subjectIndex', index)
    },
    showChart: function () {
      this.$router.push('/chart')
    }
  }
}
</script>

<style lang='sass'>
@import './src/assets/scss/booklist.scss'
</style>
