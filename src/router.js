//Imports
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Songs from '@/views/Songs'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/(home|)',
      name: 'Home',
      absPath: '/home',
      component: Home
    },
    {
      path: '/songs',
      name: 'Songs',
      absPath: '/songs',
      component: Songs
    }
  ]
})
