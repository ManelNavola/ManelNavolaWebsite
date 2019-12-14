<template>
  <div id="app">
    
    <toolbar ref="toolbar"/>
    
    <transition :name="transitionName">
      <router-view class="routerView" ref="routerView"/>
    </transition>
    
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar'
  export default {
    name: 'App',
    components: {
      Toolbar
    },
    data() {
      return {
        transitionName: "fadeRight"
      }
    },
    metaInfo: {
      title: '...',
      titleTemplate: '%s | Manel Navola'
    },
    watch: {
      $route (to, from) {
        var routes = this.$router.options.routes;
        var doLeft = true;
        for (var i=0; i < routes.length; i++) {
          if (routes[i].name == from.name) {
            doLeft = false; break;
          }
          if (routes[i].name == to.name) {
            break;
          }
        }
        
        if (doLeft)
          this.transitionName = "fadeLeft";
        else
          this.transitionName = "fadeRight";
      }
    }
  }
</script>

<style lang="sass">
  @use '@/base'

  html
    background-color: base.$backgroundColor
    @media screen and (orientation: portrait)
      background-color: darken(base.$backgroundColor, 2%)
    color: white
    overflow-x: hidden
    user-select: none
    font-family: base.$mainFont
    image-scaling: smooth
    -webkit-tap-highlight-color: transparent
    overflow-y: hidden
  
  body
    margin: 0
    
  ::-webkit-scrollbar
    width: base.$scrollbarSize
    position: fixed
    @media #{base.$mobileFit}
      display: none
    
  ::-webkit-scrollbar-track
    display: always
  
  ::-webkit-scrollbar-thumb
    background: lighten(base.$backgroundColor, 10%)
    border-radius: 7px
  
  .routerView
    position: absolute
    width: 100%
    max-height: 100vh - base.$topBarHeight
    padding-top: base.$topBarHeight
    margin-bottom: base.$topBarHeight
    overflow-x: hidden
    overflow-y: scroll
    transition: top base.$screenFitTime
    scroll-behavior: smooth
    @media #{base.$smallscreen}
      padding-top: base.$smallscreenHeight
      margin-bottom: base.$smallscreenHeight
    @media #{base.$widescreen}
      padding-top: base.$widescreenHeight
      margin-bottom: base.$widescreenHeight
    transform: translateZ(0)
  
  .fadeRight-enter-active, .fadeLeft-enter-active
    transition: transform 0.15s, opacity 0.25s
    
  .fadeRight-leave-active, .fadeLeft-leave-active
    transition: transform 0.1s, opacity 0.15s
    
  .fadeRight-enter
    opacity: 0
    transform: translate(100%, 0)
    
  .fadeRight-leave-to
    opacity: 0
    transform: translate(-100%, 0)
    
  .fadeLeft-enter
    opacity: 0
    transform: translate(-100%, 0)
    
  .fadeLeft-leave-to
    opacity: 0
    transform: translate(100%, 0)
</style>
