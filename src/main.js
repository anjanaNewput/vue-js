// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router/index'
import {store} from './store'
import FBSignInButton from 'vue-facebook-signin-button'
import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

/* @flow */
Vue.use(FBSignInButton)
Vue.use(VueLocalStorage)
Vue.use(VueResource)
Vue.use(VeeValidate)

router.beforeEach((to, from, next) => {
  var isUserLoggedIn = Vue.localStorage.get('userLoggedIn')
  // Look at all routes
  router.options.routes.forEach((route) => {
    // If this is the current route and it's secure
    if (to.matched[0].path === route.path && to.meta.authRequired) {
      if (!isUserLoggedIn) {
        return next('/login')
      } else {
        return next()
      }
    }
  })
  if ((to.name === 'Login' && from.name === null) && isUserLoggedIn) {
    return next('/book-list')
  }
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
