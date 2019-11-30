//Imports
import VueRouter from 'vue-router'
import App from './App'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      Component: App
    },
    {
      path: '/home',
      name: 'Home',
      Component: App
    },
    {
      path: '/home',
      name: 'Home',
      Component: App
    }
  ]
})
