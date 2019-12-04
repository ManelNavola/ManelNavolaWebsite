<template>
  <div id="app">
    
    <div id="pageBackground"/>
    
    <div id="topBar">
      <div id="logoWrapper" v-on:click="goToHome">
        <img id="logo" draggable="false" src="./assets/logo_128.png" alt="Manel Navola logo" width="128px" height="128px"/>
        <h1 id="logoText">Manel Navola</h1>
      </div>
      
      <nav id="topSidebar">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path"><button v-on:click="scrollToTop">{{ route.name }}</button></router-link>
      </nav>
      
      <img id="menuButton" draggable="false" src="./assets/menu.png" alt="Right menu icon" width="128px" height="128px" v-on:click="rightMenuOpen = !rightMenuOpen" :class="{rightMenuOpenSideways: rightMenuOpen}"/>
    </div>
    
    <transition name="sweepFromRight">
      <nav id="bottomSidebar" :class="{bottomSidebarClosed: !rightMenuOpen}">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">{{ route.name }}</router-link>
      </nav>
    </transition>
    
    <router-view id="routerView"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        rightMenuOpen: false,
        lastTimeout: null
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      goToHome() {
        this.$router.push('/');
        window.scrollTo(0, 0);
      }
    },
    metaInfo: {
      title: '...',
      titleTemplate: '%s | Manel Navola'
    },
    watch: {
      $route: function() {
        clearTimeout(this.lastTimeout);
        this.lastTimeout = setTimeout(() => {
          this.rightMenuOpen = false;
        }, 100)
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
    overflow-x: none
    user-select: none
    font-family: base.$mainFont
  
  body
    margin: 0
    
  ::-webkit-scrollbar
    width: base.$scrollbarSize
    position: fixed
    @media #{base.$mobileFit}
      display: none
    
  ::-webkit-scrollbar-track
    display: hidden
  
  ::-webkit-scrollbar-thumb
    background: lighten(base.$backgroundColor, 10%)
    border-radius: 7px
  
  #routerView
    margin-top: base.$topBarHeight
    padding: 2vh 2vw 2vh 2vw
    transition: top base.$screenFitTime
    @media #{base.$smallscreen}
      margin-top: base.$smallscreenHeight + 8px
    @media #{base.$widescreen}
      margin-top: base.$widescreenHeight + 0.8vw
    
  #topBar
    position: fixed
    top: 0
    width: 100%
    background-color: base.$topBarColor
    border-bottom: 1px solid rgba(255, 255, 255, 0.5)
    height: base.$topBarHeight
    @media #{base.$smallscreen}
      height: base.$smallscreenHeight
    @media #{base.$widescreen}
      height: base.$widescreenHeight
    z-index: 300
  
  @mixin logoWrapperHighlight
    color: black
    transform: scale(1.08, 1.08)
  
  #logoWrapper
    height: 100%
    max-height: 100%
    box-sizing: border-box
    line-height: base.$topBarHeight
    display: inline-block
    transform-origin: 0% 50%
    cursor: pointer
    transition: transform 0.25s, color 0.25s, margin 0.25s
    @media #{base.$smallscreen}
      line-height: base.$smallscreenHeight
    @media #{base.$widescreen}
      line-height: base.$widescreenHeight
    @media screen and (any-hover: hover)
      &:hover
        @include logoWrapperHighlight
    @media screen and (any-hover: none)
      &:active
        @include logoWrapperHighlight
  
  #logo
    max-height: 100%
    width: auto
    float: left
    display: inline-block
    padding: 2%
    box-sizing: border-box
    @media #{base.$smallscreen}
      width: base.$smallscreenHeight
      height: base.$smallscreenHeight
    @media #{base.$widescreen}
      width: base.$widescreenHeight
      height: base.$widescreenHeight
  
  #logoText
    font-weight: 400
    margin: 0
    font-size: 150%
    display: inline-block
    padding: 0 8px 0 0
  
  @mixin topSidebarButtonHighlight
    color: black
    cursor: pointer
  
  #topSidebar
    position: relative
    float: right
    display: inline-block
    height: 100%
    transition: filter base.$screenFitTime, transform base.$screenFitTime
    @media #{base.$mobileFit}
      filter: opacity(0%)
      transform: translate(0, -100%)
      pointer-events: none
    a
      display: inline-block
      height: 100%
      border-left: 1px solid rgba(255, 255, 255, 0.5)
      button
        color: white
        font-size: 120%
        font-family: base.$mainFont
        padding: 0 16px 0 16px
        background-color: rgba(0,0,0,0)
        width: 100%
        height: 100%
        border: none
        line-height: base.$topBarHeight
        transition: filter 0.25s
        @media #{base.$smallscreen}
          line-height: base.$smallscreenHeight
        @media #{base.$widescreen}
          line-height: base.$widescreenHeight
        @media screen and (any-hover: hover)
          &:hover
            @include topSidebarButtonHighlight
        @media screen and (any-hover: none)
          &:active
            @include topSidebarButtonHighlight
        &:focus
          outline: 0
    //a.router-link-exact-active
  
  .bottomSidebarClosed
    transform: translate(0, -110%)
          
  #bottomSidebar
    position: fixed
    left: 1%
    background-color: darken(base.$topBarColor, 10%)
    border-bottom: 0.5vh solid darken(base.$topBarColor, 10%)
    border-bottom-left-radius: 4vw
    border-bottom-right-radius: 4vw
    width: 98%
    z-index: 10
    top: base.$topBarHeight
    transition: transform 0.4s
    @media #{base.$smallscreen}
      top: base.$smallscreenHeight
    @media #{base.$widescreen}
      top: base.$widescreenHeight
    a
      text-decoration: none
      color: white
      font-size: 100%
      border-top: solid 1px black
      padding: 8px 8px 8px 5vw
      width: 100%
      display: block
    //a.router-link-exact-active
  
  .rightMenuOpenSideways
    transform: rotate(90deg) !important
    filter: invert(50%) !important
    
  @mixin menuButtonHighlight
    filter: invert(20%)
  
  #menuButton
    position: fixed
    right: 0
    top: 0
    width: auto
    height: base.$topBarHeight
    filter: opacity(0%)
    transform: translate(100%, 0)
    transition: filter base.$screenFitTime, transform base.$screenFitTime
    @media #{base.$mobileFit}
      filter: opacity(100%)
      transform: translate(0, 0)
    @media #{base.$widescreen}
      height: base.$widescreenHeight
    @media #{base.$smallscreen}
      height: base.$smallscreenHeight
    @media screen and (any-hover: hover)
      &:hover
        @include menuButtonHighlight
    @media screen and (any-hover: none)
      &:active
        @include menuButtonHighlight
</style>
