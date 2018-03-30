import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// @flow
const store = new Vuex.Store({
  state: {
    userName: '',
    isUserLogged: false,
    books: null
  },
  mutations: {
    setUserName (state, data) {
      state.userName = data
    },
    checkUser (state, data) {
      state.isUserLogged = data
    },
    booklist (state, data) {
      state.books = data
    }
  },
  actions: {
    getBooks (context, payload) {
      Vue.http.get('https://it-ebooks-api.info/v1/search/' + payload.subject).then(function (data) {
        Vue.localStorage.set('books', JSON.stringify(data.body.Books))
        context.commit('booklist', data.body.Books)
      })
    }
  }
})

export {store}
