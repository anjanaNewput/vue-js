<template>
  <div>
    <h3>Books</h3>
    <div class="book-list-div" v-if="books != null">
      <div class="col-md-4" v-for="book in books" v-bind:key="book.ID">
        <div class="tile">
          <div class="tile-content">
            <img v-bind:src="book.Image" class="img"/>
            <h4 class="title">{{book.Title}}</h4>
            <p class="desc">{{book.Description}}</p>
            <div class="text-center"><button class="btn" @click="showDetails(book)">See Detail</button></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="books == null"><h2>Please select the subject</h2></div>
  </div>
</template>
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
