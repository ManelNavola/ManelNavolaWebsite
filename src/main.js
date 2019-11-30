// Imports
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import VueMeta from 'vue-meta'

// Vue settings
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.config.productionTip = false

// Create Vue instance
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})