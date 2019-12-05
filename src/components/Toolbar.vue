<template>
  <div id="toolbar">
    <div id="topBar">
      <div id="logoWrapper" v-on:click="goToHome">
        <img id="logo" draggable="false" src="@/assets/logo_128.png" alt="Manel Navola logo" width="128px" height="128px"/>
        <h1 id="logoText">Manel Navola</h1>
      </div>
      
      <nav id="topSidebar">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path"><button v-on:click="scrollToTop">{{ route.name }}</button></router-link>
      </nav>
      
      <div id="menuButton" v-on:click="rightMenuOpen = !rightMenuOpen">
        <img id="menuButtonBar1" draggable="false" :class="{menuButtonBar1Open: rightMenuOpen}" src="@/assets/menuBar.png"/>
        <img id="menuButtonBar2" draggable="false" :class="{menuButtonBar2Open: rightMenuOpen}" src="@/assets/menuBar.png"/>
        <img id="menuButtonBar3" draggable="false" :class="{menuButtonBar3Open: rightMenuOpen}" src="@/assets/menuBar.png"/>
      </div>
      <!--<img id="menuButton" draggable="false" src="@/assets/menu.png" alt="Right menu icon" width="128px" height="128px" v-on:click="rightMenuOpen = !rightMenuOpen" :class="{rightMenuOpenSideways: rightMenuOpen}"/>-->
    </div>
    
    <transition name="sweepFromRight">
      <nav id="bottomSidebar" :class="{bottomSidebarClosed: !rightMenuOpen}">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">{{ route.name }}</router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
    data() {
      return {
        rightMenuOpen: false
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      goToHome() {
        this.$router.push('/');
        this.scrollToTop();
      }
    },
    watch: {
      $route: function() {
        this.rightMenuOpen = false;
      }
    }
  }
</script>

<style lang="sass">
  @use '@/base'

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
    font-size: 3vmax
    display: inline-block
    padding: 0 8px 0 0
    @media #{base.$widescreen}
      font-size: 200%
  
  @mixin topSidebarButtonHighlight
    color: black
    cursor: pointer
    font-size: 130%
  
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
        transition: color 0.25s, cursor 0.25s, font-size 0.25s
        @media #{base.$smallscreen}
          line-height: base.$smallscreenHeight
        @media #{base.$widescreen}
          line-height: base.$widescreenHeight
          font-size: 150%
        @media screen and (any-hover: hover)
          &:hover
            @include topSidebarButtonHighlight
        @media screen and (any-hover: none)
          &:active
            @include topSidebarButtonHighlight
        &:focus
          outline: 0
    a.router-link-exact-active
      background-color: rgba(255, 255, 255, 0.2)
  
  .bottomSidebarClosed
    transform: translate(0, -110%)
  
  #bottomSidebar
    position: fixed
    left: 2%
    background-color: darken(base.$topBarColor, 10%)
    border-bottom: 0.5vh solid darken(base.$topBarColor, 10%)
    border-bottom-left-radius: 4vw
    border-bottom-right-radius: 4vw
    width: 96%
    z-index: 10
    top: base.$topBarHeight
    transition: transform 0.4s
    display: none
    @media #{base.$mobileFit}
      display: block
    @media #{base.$smallscreen}
      top: base.$smallscreenHeight
      display: block
    a
      text-decoration: none
      color: white
      font-size: 2vmax
      border-top: solid 1px rgba(255, 255, 255, 0.5)
      padding: 8px 8px 8px 5vw
      max-width: 100%
      display: block
      font-weight: 300
    a.router-link-exact-active
      font-weight: bold
  
  .rightMenuOpenSideways
    transform: rotate(90deg) !important
    filter: invert(50%) !important
    
  @mixin menuButtonHighlight
    filter: invert(20%)
  
  #menuButton
    position: fixed
    right: 3px
    top: 0
    box-sizing: border-box
    cursor: pointer
    width: base.$topBarHeight
    height: base.$topBarHeight
    filter: opacity(0%)
    transform: translate(100%, 0)
    @media #{base.$mobileFit}
      filter: opacity(100%)
      transform: translate(0, 0) scale(0.9, 0.9)
    @media #{base.$widescreen}
      width: base.$widescreenHeight
      height: base.$widescreenHeight
    @media #{base.$smallscreen}
      width: base.$smallscreenHeight
      height: base.$smallscreenHeight
    @media screen and (any-hover: hover)
      &:hover
        @include menuButtonHighlight
    @media screen and (any-hover: none)
      &:active
        @include menuButtonHighlight
    .menuButtonBar1Open
      transform: translate(0%, base.$topBarHeight*0.27) rotate(45deg)
      @media #{base.$widescreen}
        transform: translate(0%, base.$widescreenHeight*0.27) rotate(45deg)
      @media #{base.$smallscreen}
        transform: translate(0%, base.$smallscreenHeight*0.27) rotate(45deg)
    #menuButtonBar1
      position: absolute
      top: 15%
      right: 2%
      width: 96%
      height: auto
      transition: transform 0.25s
    .menuButtonBar2Open
      transform: translate(0%, base.$topBarHeight*-0.27) rotate(-45deg)
      @media #{base.$widescreen}
        transform: translate(0%, base.$widescreenHeight*-0.27) rotate(-45deg)
      @media #{base.$smallscreen}
        transform: translate(0%, base.$smallscreenHeight*-0.27) rotate(-45deg)
    #menuButtonBar2
      position: absolute
      bottom: 15%
      right: 2%
      width: 96%
      height: auto
      transition: transform 0.25s
    .menuButtonBar3Open
      transform: scale(0, 0)
    #menuButtonBar3
      position: absolute
      bottom: 42.5%
      right: 2%
      width: 96%
      height: auto
      transition: transform 0.25s
</style>