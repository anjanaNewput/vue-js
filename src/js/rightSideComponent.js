
export default {
  data () {
    return {}
  },
  computed: {
    books () {
      console.log('computed----------------')
      return this.$store.state.books ? this.$store.state.books : JSON.parse(this.$localStorage.get('books'))
    }
  },
  beforeMount () {
    console.log('before mount ----------------')
  },

  beforeUpdate() {
    console.log('before update----------------------')
  },
  updated () {
    console.log('updated------------------------------')
  },
  methods: {
    showDetails (book) {
      this.$router.push({name: 'BookDetail', params: { bookId: book.ID }})
    }
  }
}
