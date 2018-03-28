<template src="../views/right-side-block.html"></template>

<script>

export default {
  data () {
    return {}
  },
  computed: {

    books () {
      return this.$store.state.books ? this.$store.state.books : JSON.parse(this.$localStorage.get('books'))
    }
  },
  methods: {
    showDetails (book) {
      this.$router.push({name: 'BookDetail', params: { bookId: book.ID }})
    }
  }
}

</script>
