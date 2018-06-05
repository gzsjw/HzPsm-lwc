import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Page404 from '@/pages/Page404'
import Page500 from '@/pages/Page500'
import Login from '@/pages/Login'

// Containers
import Full from '@/containers/Full'

// Views
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/500',
      name: 'Page500',
      component: Page500
    },
    {
      path: '/',
      redirect: '/home',
      name: 'Full',
      component: Full,
      meta: {
        label: '首页'
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: {
            label: ' '
          }
        }
      ]
    },
    {
      // not found handler
      path: '*',
      component: Page404
    }
  ]
})
