// Import System requirements
import 'es6-promise/auto'

import Vue from 'vue'
import store from './store'
import router from './router'

import BootstrapVue from 'bootstrap-vue'

import Antd from 'vue-antd-ui'

// Import Views - Top level
import App from './App.vue'

// Check local storage to handle refreshes
if (window.localStorage) {
  // var localUserString = window.localStorage.getItem('user') || 'null'
  // var localUser = JSON.parse(localUserString)
  // if (localUser && store.state.user !== localUser) {
  //   store.commit('SET_USER', localUser)
  // store.commit('SET_USER', window.localStorage.getItem('user'))
  // }
}

router.beforeEach((to, from, next) => {
  // window.console.log('Transition', transition)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isauthority) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.use(BootstrapVue)
Vue.use(Antd)

Vue.config.productionTip = false

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: {
    App
  }
})
