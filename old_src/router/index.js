import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Songs from '@/views/Songs'
import Links from '@/views/Links'
import Admin from '@/views/Admin'

Vue.use(Router)

export default new Router({
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
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
