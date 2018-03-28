<template src="../views/books-list.html"></template>

<script>
import LeftSideNav from './LeftSideNav'
import RightSideComp from './RightSideComp'
export default {
  name: 'BookList',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  components: {
    'left-side-nav': LeftSideNav,
    'right-side-comp': RightSideComp
  }
}
</script>

<style lang="sass"></style>
