//Imports
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Songs from '@/views/Songs'

export default new VueRouter({
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
    }
  ]
})
