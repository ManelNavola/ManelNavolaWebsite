<template>
  <div id="toolbar">
    <div id="topBar" ref="topBar">
      
      <nav id="topSidebar">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path"><button @click="scrollToTop">{{ route.name }}</button></router-link>
      </nav>
      
      <div class="toolbarButtons">
        <a @mouseover="showing = 'linkedin'" @mouseleave="showing = ''" class="toolbarButton anyButton" :href="linkedin" target="_blank">
          <div class="toolbarButtonBelow" v-show="showing == 'linkedin'">
            <p>Linkedin Profile</p>
          </div>
          <img draggable="false" src="@/assets/linkedin_icon.png" class="smallIcon" width="256px" height="256"/>
        </a>
        <a @mouseover="showing = 'github'" @mouseleave="showing = ''" class="toolbarButton anyButton" :href="github" target="_blank">
          <div class="toolbarButtonBelow" v-show="showing == 'github'">
            <p>GitHub Profile</p>
          </div>
          <img draggable="false" src="@/assets/github_icon.png" class="smallIcon" width="256px" height="256"/>
        </a>
        <a @mouseover="showing = 'twitter'" @mouseleave="showing = ''" class="toolbarButton anyButton" :href="twitter" target="_blank">
          <div class="toolbarButtonBelow" v-show="showing == 'twitter'">
            <p>Twitter Profile</p>
          </div>
          <img draggable="false" src="@/assets/twitter_icon.png" class="smallIcon" width="256px" height="256"/>
        </a>
      </div>
      
      <div id="menuButton" v-on:click="rightMenuOpen = !rightMenuOpen">
        <img id="menuButtonBar1" draggable="false" :class="{menuButtonBar1Open: rightMenuOpen}" src="@/assets/menuBar.png"/>
        <img id="menuButtonBar2" draggable="false" :class="{menuButtonBar2Open: rightMenuOpen}" src="@/assets/menuBar.png"/>
        <img id="menuButtonBar3" draggable="false" :class="{menuButtonBar3Open: rightMenuOpen}" src="@/assets/menuBar.png"/>
      </div>
    </div>
    
    <img id="topButton" :class="{topButtonClosed: pastTopScroll}" v-on:click="scrollToTop" src="@/assets/top.png"/>
    
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
        showing: "",
        github: "https://github.com/ManelNavola",
        linkedin: "https://www.linkedin.com/in/manelangresola/",
        twitter: "https://twitter.com/ManelNavola",
        pastTopScroll: false,
        rightMenuOpen: false
      }
    },
    methods: {
      setPastTopScrollFunc(v) {
        var topBar = this.$refs.topBar;
        if (v) {
          if (!topBar.classList.contains("topBarOpened"))
            topBar.classList.add("topBarOpened")
        } else {
          if (topBar.classList.contains("topBarOpened"))
            topBar.classList.remove("topBarOpened");
        }
        this.pastTopScroll = v;
      },
      handleScroll() {
        if (!this.$refs.topBar) return;
        
        var routerView = this.$parent.$refs.routerView.$el;
        if (routerView) {
          var header = routerView.getElementsByClassName("header");
          if (header.length > 0) {
            var rect2 = header[0].getBoundingClientRect();
            if (20 < rect2.top) {
              this.setPastTopScrollFunc(false);
            } else {
              this.setPastTopScrollFunc(true);
            }
          } else {
            this.setPastTopScrollFunc(false);
          }
        } else {
          this.setPastTopScrollFunc(false);
        }
      },
      scrollToTop() {
        this.$parent.$refs.routerView.$el.scrollTo(0, 0);
        this.setPastTopScrollFunc(false);
      },
      goToHome() {
        this.$router.push('/');
        this.scrollToTop();
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      for (var i = 0; i < 10; i++) {
        setTimeout(this.handleScroll, i*100);
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
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
  
  .topBarOpened
    @media #{base.$noMobileFit}
      background-color: rgba(base.$topBarColor, 0.975) !important
  
  #topBar
    text-align: center
    position: fixed
    top: 0
    width: 100vw
    box-sizing: border-box
    background-color: transparent
    border-bottom: none
    height: base.$topBarHeight
    z-index: 300
    transition: background-color base.$transitionTime, border-bottom base.$transitionTime
    @media #{base.$mobileFit}
      transition: none
      background-color: base.$topBarColor !important
      border-bottom: 1px solid rgba(0, 0, 0, 0.5) !important
    @media #{base.$smallscreen}
      height: base.$smallscreenHeight
    @media #{base.$widescreen}
      height: base.$widescreenHeight
  
  @mixin logoWrapperHighlight
    color: black
    transform: scale(1.08, 1.08)
  
  @mixin topSidebarButtonHighlight
    transform: scale(1.05, 1.05)
    transform-origin: 50% 60%
    color: #AFF
    cursor: pointer
  
  #topSidebar
    transition: filter base.$screenFitTime, transform base.$screenFitTime
    @media #{base.$mobileFit}
      filter: opacity(0%)
      transform: translate(0, -100%)
      pointer-events: none
    a
      margin: 0 1vw 0 1vw
    button
      background-color: transparent
      margin: 0
      padding: 0
      border: none
      font-size: base.$topBarHeight*0.3
      font-family: base.$mainFont
      font-weight: 300
      color: white
      user-select: none
      line-height: base.$topBarHeight
      transition: transform base.$transitionTime, color base.$transitionTime
      filter: drop-shadow(0px 0px 1px black)
      &:focus
        outline: 0
      @media #{base.$widescreen}
        font-size: base.$widescreenHeight*0.3
        line-height: base.$widescreenHeight
      @media screen and (any-hover: hover)
        &:hover
          @include topSidebarButtonHighlight
      @media screen and (any-hover: none)
        &:active
          @include topSidebarButtonHighlight
    a.router-link-exact-active
      button
        text-decoration: underline
  
  .bottomSidebarClosed
    transform: translate(0, -110%)
  
  #bottomSidebar
    position: fixed
    left: 2%
    background-color: lighten(base.$topBarColor, 15%)
    border-bottom: 0.5vh solid lighten(base.$topBarColor, 15%)
    border-bottom-left-radius: 4vw
    border-bottom-right-radius: 4vw
    width: 96%
    z-index: 10
    top: base.$topBarHeight
    transition: transform base.$transitionTime
    display: none
    @media #{base.$mobileFit}
      display: block
    @media #{base.$smallscreen}
      top: base.$smallscreenHeight
      display: block
    a
      text-decoration: none
      color: white
      font-size: 2.7vmax
      border-top: solid 1px rgba(128,128,128, 0.5)
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
  
  .topButtonClosed
    opacity: 1 !important
    cursor: pointer !important
    pointer-events: auto !important
    
  #topButton
    position: fixed
    top: 0
    left: 0
    width: auto
    height: base.$topBarHeight
    transform: scale(0.5, 0.5)
    z-index: 400
    transition: opacity base.$transitionTime
    opacity: 0
    pointer-events: none
    @media #{base.$widescreen}
      height: base.$widescreenHeight
    @media #{base.$smallscreen}
      height: base.$smallscreenHeight
    
  #menuButton
    position: fixed
    right: 3px
    top: 0
    box-sizing: border-box
    width: base.$topBarHeight
    height: base.$topBarHeight
    filter: opacity(0%)
    transform: translate(100%, 0)
    pointer-events: none
    @media #{base.$mobileFit}
      filter: opacity(100%)
      transform: translate(0, 0) scale(0.8, 0.8)
      cursor: pointer
      pointer-events: auto
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
      transition: transform base.$transitionTime
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
      transition: transform base.$transitionTime
    .menuButtonBar3Open
      transform: scale(0, 0)
    #menuButtonBar3
      position: absolute
      bottom: 42.5%
      right: 2%
      width: 96%
      height: auto
      transition: transform base.$transitionTime
      
  .toolbarButtons
    position: fixed
    left: base.$topBarHeight
    height: base.$topBarHeight
    @media #{base.$widescreen}
      left: base.$widescreenHeight
      height: base.$widescreenHeight
    @media #{base.$smallscreen}
      left: base.$smallscreenHeight
      height: base.$smallscreenHeight
    top: 0
    width: 30%
    display: flex
    flex-wrap: wrap
    align-items: center
    box-sizing: border-box
    
  .toolbarButton
    width: 3.5em
    height: 3.5em
    margin-right: 1.5em
    border-radius: 1em
    box-sizing: border-box
    padding: .5em
    text-decoration: none
    color: white
    transition: transform 0.2s
    transform: scale(1, 1)
    display: flex
    align-items: center
    justify-content: left
    @media #{base.$mobileFit}
      margin-right: 1.5vw
      margin-top: .2em
      margin-bottom: .2em
      width: 30vw
      max-width: 60vh
      height: 10vh
    @media (orientation: portrait)
      height: 10vw
      width: 10vw
      margin: 0
      margin-right: 2vw
    img
      height: 90%
      margin-left: 5%
      width: auto
      float: left
    &:hover
      transform: scale(1.08, 1.08)
      @media #{base.$smallscreen}
        transform: scale(1.04, 1.04)
    
  .anyButton
    background-color: #EEEEEE
    border: '5px solid #1EBA55'
    
  .toolbarButtonBelow
    width: 260%
    line-height: 40%
    margin: 0 auto 0 auto
    padding: 0
    background-color: rgba(0, 0, 0, .9)
    border-radius: 1em
    color: white
    top: 120%
    vertical-align: middle
    height: 60%
    left: -77.5%
    position: absolute
    text-align: center
    
      
</style>