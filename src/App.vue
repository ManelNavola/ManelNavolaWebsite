<template>
  <div id="app">
    <sidebar/>
    <div id="main-page">
      <h1>Single Page Application</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  export default {
    name: 'App',
    components: {
      Sidebar
    }
  }
</script>

<style>
  #app {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  #main-page {
    margin-left: 240px;
  }
</style>
