<template>
  <div id="app">
    <sidebar ref="sidebarComponent"/>
    <div id="background">
    </div>
    <img id="logo" draggable="false" src="./assets/logo_128.png" alt="Manel Navola Logo" width="128px" height="128px">
    <h1>Manel Navola</h1>
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
    margin: 0;
    padding: 0;
    top: 0px;
    left: 0px;
    right: 0px;
    color: white;
  }
  #app h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 3vw;
    margin-left: calc(7.25vw + 8px);
    margin-top: 2.25vw;
  }
  .main-page {
    margin-left: 220px;
    margin-top: 8px;
    color: white;
  }
  .view {
    position: absolute;
    margin-top: 128px;
    width: calc(100% - 264px);
  }
  #logo {
    position: absolute;
    top: 1.25vw;
    left: 1.25vw;
    transition: transform 0.5s, filter 0.5s;
    width: 6vw;
    height: 6vw;
  }
  @media (max-aspect-ratio: 1/1) {
    #app h1 {
      font-size: 3vh;
      margin-left: calc(7.25vh + 8px);
      margin-top: 2.25vh;
    }
    #logo {
      top: 1.25vh;
      left: 1.25vh;
      width: 6vh;
      height: 6vh;
    }
    
    @media (max-width: 300px) {
      #logo {
        width: 20px;
        height: 20px;
      }
    }
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
    font-size: 48px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }
</style>
