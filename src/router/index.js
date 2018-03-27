import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/LoginComp'
import Message from '@/components/message'
import Register from '@/components/RegisterComp'
import BookList from '@/components/BookListComp'
import ChartComp from '@/components/ChartComp'
import BookDetail from '@/components/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: ChartComp,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/message/:id',
      name: 'Message',
      component: Message,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/book-list',
      name: 'BookList',
      meta: {
        authRequired: true
      },
      component: BookList
    },
    {
      path: '/book-list/:bookId',
      name: 'BookDetail',
      component: BookDetail,
      meta: {
        authRequired: true
      }
    }
  ],
  mode: 'history'
})
