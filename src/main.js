// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import {store} from './store'

import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'

Vue.use(VueLocalStorage)
Vue.use(VueResource)

var isUserLoggedIn = Vue.localStorage.get('userLoggedIn')
router.beforeEach((to, from, next) => {
  // Look at all routes
  console.log(to)
  console.log(from)
  router.options.routes.forEach((route) => {
    // If this is the current route and it's secure
    if (to.matched[0].path === route.path && route.meta.authRequired) {
      if (!isUserLoggedIn) {
        return next('/')
      } else {
        return next()
      }
    }
    if ((to.name === 'Login' || to.name === 'Register') && isUserLoggedIn) {
      return next('/book-list')
    }
  })
  next()
})

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
