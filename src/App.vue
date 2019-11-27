<template>
  <div id="app">
    <sidebar ref="sidebarComponent"/>
    <div id="background">
    </div>
    <img id="logo" draggable="false" src="./assets/logo_128.png" alt="Manel Navola Logo" width="128px" height="128px">
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
    components: {
      Sidebar
    },
    metaInfo: {
      title: '???',
      titleTemplate: '%s | Manel Navola',
      meta: [
        {name: 'description',
         content: "Manel Navola's Official Website. Check out my Official songs!"}
      ]
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
    background-color: #101010;
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
    width: calc(100% - 264px);
  }
  #logo {
    position: absolute;
    top: 16px;
    left: calc(50% - 48px);
    transition: all 0.5s;
    width: 96px;
    height: 96px;
  }
  #logo:hover {
    transform: scale(1.1,1.1) rotate(-5deg);
    transition: all 0.5s;
  }
  #logo:active {
    filter: invert(100%);
    transition: all 0.2s;
  }
  .pageTitle {
    text-align: left;
    font-size: 48px;
    font-family: "Montserrat", sans-serif;
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
  }
</style>
