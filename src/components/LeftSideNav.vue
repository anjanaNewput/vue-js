<template>
  <div class=left-nav>
    <h3>Subject</h3>
    <ul class="nav nav-pills nav-stacked">
      <li v-for="(subject, index) in subjects" class="subj" :class="{ active: isActive == index}" v-bind:key="subject"><a @click="getBooks(subject, index)">{{subject | capitalize}}</a></li>
    </ul>
    <button class="btn btn-success chart-btn" @click="showChart">show chart</button>
  </div>
</template>
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
