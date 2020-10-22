//Imports
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Songs from '@/views/Songs'
import Projects from '@/views/Projects'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/music',
      name: 'Music',
      component: Songs
    }
  ]
})
