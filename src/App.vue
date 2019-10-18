<template>
  <div id="app">
    <sidebar/>
    <div id="main-page">
      <h1>Manel Navola Official Website lol</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  export default {
    name: 'App',
    methods: {
      ping() {
        var request = require('request');
        var options = {
          url: 'https://manel-navola-website-server.herokuapp.com/ping'
        };
        request.post(options);
      }
    },
    components: {
      Sidebar
    },
    created () {
      this.ping()
    }
  }
</script>

<style>
  #app {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
  }
  #main-page {
    margin-left: 240px;
  }
</style>
