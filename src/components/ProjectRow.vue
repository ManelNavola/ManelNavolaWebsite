<template>
  <div class="projectRow">
    <h1>{{ title }}</h1>
    <div class="projectText">
      <!--<h2>{{ subtitle }}</h2>-->
      <p>{{ description }}</p>
      <a class="projectButton githubButton" v-if="github" :href="github" target="_blank">
        <img draggable="false" src="@/assets/github_icon.png" class="smallIcon" width="256px" height="256"/>
        <p class="projectButtonText">GitHub Repository</p>
        <p class="projectButtonTextSmall">GitHub</p>
      </a>
    </div>
    <div class="projectImage">
      <img v-bind:src="getImgUrl(image)" draggable="false"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectRow',
    props: ['title', 'description', 'github', 'image'],
    methods: {
      getImgUrl(pic) {
        return require('../assets/' + pic)
      }
    }
  }
</script>

<style lang="sass">
  @use '@/base'

  .projectRow
    @media #{base.$noMobileFit}
      scroll-snap-align: center
    display: grid
    margin: 0vh 4vw 6vh 9vw
    grid-template-columns: 4fr 5fr
    grid-template-rows: auto 1fr
    padding: 0 5vw 0 5vw
    transition: color 0.25s
    @media #{base.$mobileFit}
      color: white !important
      margin: 0vh 4vw 10vh 4vw
    @media #{base.$smallscreen}
      grid-template-columns: 1fr
      grid-template-rows: auto auto 1fr
    h1
      font-size: 200%
      grid-row: 1
      grid-column: 1
      @media #{base.$smallscreen}
        font-size: 130%
        grid-row: 1
        grid-column: 1
      @media #{base.$widescreen}
        font-size: 300%
    .projectText
      grid-row: 2
      grid-column: 1
      margin-right: 10%
      @media #{base.$smallscreen}
        grid-row: 3
        grid-column: 1
      h2
        font-size: 150%
        font-weight: 400
        @media #{base.$smallscreen}
          font-size: 120%
        @media #{base.$widescreen}
          font-size: 200%
      p
        font-size: 110%
        font-weight: 300
        @media #{base.$smallscreen}
          font-size: 110%
        @media #{base.$widescreen}
          font-size: 160%
        
    .projectImage
      margin: auto
      margin-left: 1em
      min-width: 100%
      grid-row: 1 / 3
      grid-column: 2
      transform-origin: 100% 100%
      transition: transform 0.25s, filter 0.25s
      box-sizing: border-box
      max-width: 100%
      @media #{base.$smallscreen}
        width: 100vw
        margin-left: 0
        height: auto
        grid-row: 2
        grid-column: 1
      img
        transform: translateZ(0)
        @media #{base.$smallscreen}
          margin: 1vmax 0 1vmax 0
          width: 60%
          min-width: 0%
        min-width: 80%
        width: 1em

    .projectButton
      width: 18em
      height: 3.6em
      margin-right: 1.5em
      border-radius: 1.5em
      box-sizing: border-box
      padding: .5em
      padding-left: .7em
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
        padding: .5em
        width: 30vw
        max-width: 60vh
        height: 10vh
        align-items: center
      @media (orientation: portrait)
        height: 12vw
        width: 36vw
        margin: 0
        margin-right: 2vw
      img
        height: 100%
        width: auto
      &:hover
        transform: scale(1.08, 1.08)
        @media #{base.$smallscreen}
          transform: scale(1.04, 1.04)

    .projectButtonText
      display: block
      margin-left: 1em
      font-size: 1.2em !important
      @media #{base.$smallscreen}
        display: none
    
    .projectButtonTextSmall
      display: none
      @media #{base.$mobileFit}
        display: block
        margin-left: 3%
        font-size: 2.3vw
      @media (orientation: portrait)
        margin-left: 6%
        font-size: 2.3vw
        display: block

    .githubButton
      color: black
      background-color: #EEEEEE
      border: '5px solid #1EBA55'
</style>