<template>
  <div id="app">
    <sidebar ref="sidebarComponent"/>
    <div id="background">
    </div>
    <img id="logo" src="./assets/logo_128.png" alt="Manel Navola Logo" width="96" height="96">
    <div class="main-page">
      <transition name="down">
        <router-view class="view"/>
      </transition>
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
  .down-enter-active {
    animation: down-out 0.2s ease-in;
  }
  .down-leave-active {
    animation: down-in 0.2s ease-in;
  }
  @keyframes down-out {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes down-in {
    0% {
      opacity: 1;
    }
    100% {
      transform: translate(0px, 50%);
      opacity: 0;
    }
  }
  @keyframes animatedBackground {
      from { background-position: 0 0; }
      to { background-position: 256px 256px; }
  }
  #background {
    position: fixed;
    left: -50%;
    right: -50%;
    top: -50%;
    bottom: -50%;
    z-index: -9999;
    transform: rotate(5deg);
    background-image: url("assets/scrabble.png");
    filter: blur(2px);
    animation: animatedBackground 10s linear infinite;
  }
  html {
    background-color: #050505;
    overflow-y: hidden;
    user-select: none;
  }
  #app {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
  }
  #app p {
    color: white;
  }
  .main-page {
    margin-left: 256px;
    margin-top: 8px;
  }
  .view {
    position: absolute;
    margin-top: 128px;
    width: calc(100% - 256px);
  }
  #logo {
    position: absolute;
    top: 16px;
    left: calc(50% - 48px);
    transition: transform 0.5s;
  }
  #logo:hover {
    transform: scale(1.1,1.1) rotate(-5deg);
    transition: transform 0.5s;
  }
</style>
