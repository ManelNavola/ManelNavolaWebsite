<template>
  <div id="app">
    
    <toolbar/>
    
    <transition name="fade">
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
    metaInfo: {
      title: '...',
      titleTemplate: '%s | Manel Navola'
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
    overflow-x: none
    user-select: none
    font-family: base.$mainFont
    scroll-behavior: smooth
    image-scaling: smooth
    -webkit-tap-highlight-color: transparent
    overflow-x: hidden
  
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
    position: relative
    top: base.$topBarHeight
    transition: top base.$screenFitTime
    @media #{base.$smallscreen}
      margin-top: base.$smallscreenHeight
    @media #{base.$widescreen}
      margin-top: base.$widescreenHeight
</style>
