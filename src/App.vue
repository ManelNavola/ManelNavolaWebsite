<template>
  <div id="app">
    
    <div id="pageBackground"/>
    
    <div id="topBar">
      <div id="logoWrapper">
        <img id="logo" draggable="false" src="./assets/logo_128.png" alt="Manel Navola logo" width="128px" height="128px"/>
        <h1 id="logoText">Manel Navola</h1>
      </div>
      
      <nav id="topSidebar">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">{{ route.name }}</router-link>
      </nav>
      
      <img id="menuButton" draggable="false" src="./assets/menu.png" alt="Right menu icon" width="128px" height="128px"/>
      
      <nav id="bottomSidebar" style="display: none">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">{{ route.name }}</router-link>
      </nav>
    </div>
    <p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br><p>okkk</p><br><br><br>
  </div>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      title: '...',
      titleTemplate: '%s | Manel Navola'
    }
  }
</script>

<style lang="sass">
  $mainFont: "Montserrat", sans-serif
  $topBarHeight: 5vmin
  $cdb: rgba(255, 255, 255, 0)
  $widescreenTrigger: "7/3"
  $widescreenHeight: 2.4vw
  $smallscreenTrigger: 640px
  $smallscreenHeight: 32px
  $screenFitTime: 0.2s
  $menuButtonScale: 1.3
  
  html
    background-color: #111111
    user-select: none
    color: white
  
  ::-webkit-scrollbar
    width: 14px
    position: fixed
    
  ::-webkit-scrollbar-track
    display: hidden
    margin-top: $topBarHeight*1.4
    @media screen and (max-width: $smallscreenTrigger)
      margin-top: $smallscreenHeight*1.4
    @media screen and (min-aspect-ratio: $widescreenTrigger)
      margin-top: $widescreenHeight*1.4
  
  ::-webkit-scrollbar-thumb
    background: rgba(150, 200, 255, 0.2)
    border-radius: 7px
  
  #topBar
    position: fixed
    top: 0
    left: -1vmin
    width: 100%
    height: $topBarHeight
    padding: 1vmin 1vmin 1vmin 2vmin
    background-color: #AABBCC
    z-index: 99
    transition: height $screenFitTime
    @media screen and (max-width: $smallscreenTrigger)
      height: $smallscreenHeight
    @media screen and (min-aspect-ratio: 7/3)
      height: $widescreenHeight
  
  @mixin logoWrapperHighlight
    color: #CFFFFF
    transform: scale(1.08, 1.08)
  
  #logoWrapper
    height: $topBarHeight
    line-height: $topBarHeight
    display: inline-block
    transform-origin: 0% 50%
    background-color: $cdb
    transition: height $screenFitTime, line-height $screenFitTime, transform 0.25s, color 0.25s
    @media screen and (max-width: $smallscreenTrigger)
      height: $smallscreenHeight
      line-height: $smallscreenHeight
    @media screen and (min-aspect-ratio: 7/3)
      height: $widescreenHeight
      line-height: $widescreenHeight
    @media screen and (any-hover: hover)
      &:hover
        @include logoWrapperHighlight
    @media screen and (any-hover: none)
      &:active
        @include logoWrapperHighlight
  
  #logo
    width: $topBarHeight
    height: $topBarHeight
    float: left
    display: block
    padding: 0 8px 0 0
    transition: width 0.2s, height 0.2s
    @media screen and (max-width: $smallscreenTrigger)
      width: $smallscreenHeight
      height: $smallscreenHeight
    @media screen and (min-aspect-ratio: 5/2)
      width: $widescreenHeight
      height: $widescreenHeight
  
  #logoText
    font-family: $mainFont
    font-weight: 400
    padding: 0
    margin: 0
    font-size: 140%
    display: inline-block
    padding: 0 8px 0 0
    transition: font-size $screenFitTime
    @media screen and (max-width: $smallscreenTrigger*0.67)
      font-size: $smallscreenHeight/2.3
    @media screen and (min-aspect-ratio: 2/1)
      font-size: 120%
    
  #topSidebar
    float: right
    display: inline-block
    height: 100%
    background-color: $cdb
    transition: filter $screenFitTime, transform $screenFitTime
    @media screen and (orientation: portrait)
      filter: opacity(0%)
      transform: translate(0, -100%)
    a
      text-decoration: none
      color: white
      padding: 0 2vmin 0 2vmin
      display: inline
      text-align: center
      width: 100%
      margin: 0 0 0 0
      font-family: $mainFont
      font-size: 120%
      background-color: $cdb
      line-height: $topBarHeight
      @media screen and (max-width: $smallscreenTrigger)
        line-height: $smallscreenHeight
      @media screen and (min-aspect-ratio: $widescreenTrigger)
        line-height: $widescreenHeight
  
  #menuButton
    position: absolute
    display: block
    right: 2vmin
    top: -0.25vmin
    z-index: 999
    width: $topBarHeight*$menuButtonScale
    height: $topBarHeight*$menuButtonScale
    transition: filter $screenFitTime, transform $screenFitTime
    @media screen and (orientation: landscape)
        filter: opacity(0%)
        transform: translate(100%, 0)
    @media screen and (max-width: $smallscreenTrigger)
      width: $smallscreenHeight*$menuButtonScale
      height: $smallscreenHeight*$menuButtonScale
    @media screen and (min-aspect-ratio: 5/2)
      width: $widescreenHeight*$menuButtonScale
      height: $widescreenHeight*$menuButtonScale
    
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
  
  @keyframes animatedBackground
    from
      background-position: 0 0
    to
      background-position: 2560px 1792px
    
</style>
