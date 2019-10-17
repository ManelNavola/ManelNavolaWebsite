import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import Spotify from '@/router/Spotify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/spotify',
      name: 'Spotify',
      component: Spotify
    }
  ]
})
