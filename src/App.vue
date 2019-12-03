<template>
  <div id="app">
    
    <div id="pageBackground"/>
    
    <div id="topBar">
      <div id="logoWrapper" v-on:click="$router.push('/')">
        <img id="logo" draggable="false" src="./assets/logo_128.png" alt="Manel Navola logo" width="128px" height="128px"/>
        <h1 id="logoText">Manel Navola</h1>
      </div>
      
      <nav id="topSidebar">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">{{ route.name }}</router-link>
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
    user-select: none
    color: white
    overflow-x: none
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
    margin-top: base.$topBarHeight*1.4
    @media #{base.$smallscreen}
      margin-top: base.$smallscreenHeight*1.4
    @media #{base.$widescreen}
      margin-top: base.$widescreenHeight*1.4
  
  ::-webkit-scrollbar-thumb
    background: rgba(100, 150, 255, 0.2)
    border-radius: 7px
  
  #routerView
    margin-top: base.$topBarHeight + 2vmin
    padding: 2vh 2vw 2vh 2vw
    transition: top base.$screenFitTime
    @media #{base.$smallscreen}
      margin-top: base.$smallscreenHeight + 8px
    @media #{base.$widescreen}
      margin-top: base.$widescreenHeight + 0.8vw
  
  #topBar
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: base.$topBarHeight + 2vmin
    background-color: base.$topBarColor
    border-right: base.$scrollbarSize solid base.$topBarColor
    border-top-right-radius: base.$topBarHeight*0.2
    z-index: 100
    @media #{base.$smallscreen}
      height: base.$smallscreenHeight + 8px
    @media #{base.$widescreen}
      height: base.$widescreenHeight + 0.8vw
  
  @mixin logoWrapperHighlight
    color: base.$linkHighlightColor
    transform: scale(1.08, 1.08)
  
  #logoWrapper
    height: base.$topBarHeight
    line-height: base.$topBarHeight
    display: inline-block
    margin: 1vmin 1vmin 1vmin 1vmin
    transform-origin: 0% 50%
    background-color: base.$cdb
    cursor: pointer
    transition: transform 0.25s, color 0.25s, margin 0.25s
    @media #{base.$smallscreen}
      height: base.$smallscreenHeight
      line-height: base.$smallscreenHeight
    @media #{base.$widescreen}
      height: base.$widescreenHeight
      line-height: base.$widescreenHeight
      margin: base.$widescreenHeight/6 base.$widescreenHeight/6 base.$widescreenHeight/6 base.$widescreenHeight/6
    @media screen and (any-hover: hover)
      &:hover
        @include logoWrapperHighlight
    @media screen and (any-hover: none)
      &:active
        @include logoWrapperHighlight
  
  #logo
    width: base.$topBarHeight
    height: base.$topBarHeight
    float: left
    display: block
    padding: 0 8px 0 0
    @media #{base.$smallscreen}
      width: base.$smallscreenHeight
      height: base.$smallscreenHeight
    @media #{base.$widescreen}
      width: base.$widescreenHeight
      height: base.$widescreenHeight
  
  #logoText
    font-weight: 400
    padding: 0
    margin: 0
    font-size: 150%
    display: inline-block
    padding: 0 8px 0 0
    @media #{base.$smallscreen}
      font-size: 150%
    @media #{base.$widescreen}
      font-size: 250%
  
  @mixin topSidebarButtonHighlight
    background-color: lighten(base.$topBarColor, 6%)
    
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
      vertical-align: top
      text-decoration: none
      color: white
      padding: 0 16px 0 16px
      margin: 0 0 0 0
      display: inline-block
      text-align: center
      height: 100%
      font-size: 2.4vh
      border-left: 1px solid rgba(255, 255, 255, 0.5)
      line-height: base.$topBarHeight*1.35
      background-color: lighten(base.$topBarColor, 3%)
      transition: background-color 0.25
      @media #{base.$smallscreen}
        line-height: base.$smallscreenHeight*1.35
      @media #{base.$widescreen}
        line-height: base.$widescreenHeight*1.35
      @media screen and (any-hover: hover)
        &:hover
          @include topSidebarButtonHighlight
      @media screen and (any-hover: none)
        &:active
          @include topSidebarButtonHighlight
    a.router-link-exact-active
      color: base.$linkHighlightColor
      background-color: lighten(base.$topBarColor, 8%)
  
  .bottomSidebarClosed
    transform: translate(0, -100%)
          
  #bottomSidebar
    position: fixed
    left: 1%
    background-color: darken(base.$topBarColor, 15%)
    border-bottom: 0.5vh solid darken(base.$topBarColor, 15%)
    border-bottom-left-radius: 4vw
    border-bottom-right-radius: 4vw
    width: 98%
    margin: 2vmin 0 0 0
    z-index: 0
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
    a.router-link-exact-active
      color: base.$linkHighlightColor
  
  @mixin menuButtonHighlight
    filter: invert(20%)
  
  .rightMenuOpenSideways
    transform: rotate(90deg) !important
    filter: invert(50%) !important
    
  #menuButton
    position: absolute
    display: block
    right: 2vmin
    top: -0.25vmin
    z-index: 999
    width: base.$topBarHeight*base.$menuButtonScale
    height: base.$topBarHeight*base.$menuButtonScale
    transition: filter base.$screenFitTime, transform base.$screenFitTime
    filter: opacity(0%)
    transform: translate(100%, 0)
    @media #{base.$mobileFit}
        filter: opacity(100%)
        transform: translate(0, 0)
    @media #{base.$smallscreen}
      width: base.$smallscreenHeight*base.$menuButtonScale
      height: base.$smallscreenHeight*base.$menuButtonScale
    @media screen and (min-aspect-ratio: 5/2)
      width: base.$widescreenHeight*base.$menuButtonScale
      height: base.$widescreenHeight*base.$menuButtonScale
    @media screen and (any-hover: hover)
      &:hover
        @include menuButtonHighlight
    @media screen and (any-hover: none)
      &:active
        @include menuButtonHighlight
    
  #pageBackground
    position: fixed
    background-image: url("./assets/scrabble.png")
    background-size: 20vw 20vw
    @media screen and (max-aspect-ratio: 1/1)
        background-size: 20vh 20vh
    z-index: -9999
    left: -25%
    right: -25%
    top: -25%
    bottom: -25%
    transform: rotate(5deg)
    animation: animatedBackground linear infinite
    animation-duration: 125s
    @media screen and (max-width: 800px), screen and (max-height: 800px)
      animation-duration: 200s
    @media screen and (max-width: 400px), screen and (max-height: 400px)
      animation-duration: 400s
    @media screen and (orientation: portrait)
      filter: brightness(110%)
  
  @keyframes animatedBackground
    from
      background-position: 0 0
    to
      background-position: 2560px 1792px
</style>
