import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import Songs from '@/router/Songs'
import Links from '@/router/Links'
import NotFound from '@/router/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/links',
      name: 'Links',
      component: Links
    },
    {
      path: '/*',
      name: '404',
      component: NotFound
    }
  ]
})
