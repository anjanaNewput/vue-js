/* @flow */
export default {
  data () {
    return {
      book: ''
    }
  },
  mounted () {
    this.getBookDetail()
  },
  methods: {
    getBookDetail () {
      var books = JSON.parse(this.$localStorage.get('books'))
      var bookId = this.$route.params.bookId
      for (var i = 0; i < books.length; i++) {
        if (bookId === books[i].ID) {
          this.book = books[i]
        }
      }
    }
  }
}
