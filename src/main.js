// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

window.spotifySongs = {
  lastTime: 0,
  items: [],
  vm: null
}

window.components = {
  loading: null
}

window.requesting = {
  spotify: false
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})