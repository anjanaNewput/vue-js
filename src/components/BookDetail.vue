<template>
  <div>
    <div class="row book-detail">
      <div class="col-md-4">
        <img :src="book.Image" />
      </div>
      <div class="col-md-8">
        <h1>{{book.Title}}</h1>
        <p>{{book.Description}}</p>
      </div>
      <router-link :to="{name: 'BookList'}">Go to all Books</router-link>
    </div>

  </div>
</template>
<script>
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
</script>
<style lang='scss'>
@import './src/assets/scss/booklist.scss'
</style>
