import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import Songs from '@/router/Songs'
import Links from '@/router/Links'

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
    }
  ]
})
