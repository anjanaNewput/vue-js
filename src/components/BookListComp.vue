<template>
  <div class="container">
    <div class="col-md-3 left-block"><left-side-nav></left-side-nav></div>
    <div class="col-md-9 right-block"><right-side-comp></right-side-comp></div>
  </div>
</template>

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

<style lang="sass">
</style>
