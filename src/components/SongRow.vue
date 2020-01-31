<template>
  <div class="songRow">
    <img class="songImage" v-bind:src="image"/>
    <div class="songInfo">
      <h1 class="songTitle">{{ title }}</h1>
      <div class="songButtons">
        <a class="songButton spotifyButton" v-if="spotify" :href="spotify" target="_blank">
          <img draggable="false" src="@/assets/spotify_icon.png" class="smallIcon" width="256px" height="256"/>
          <p class="songButtonText">Listen on Spotify</p>
          <p class="songButtonTextSmall">Spotify</p>
        </a>
        <a class="songButton appleMusicButton" v-if="appleMusic" :href="appleMusic" target="_blank">
          <img draggable="false" src="@/assets/apple_music_icon.png" class="smallIcon" width="256px" height="256"/>
          <p class="songButtonText">Apple Music</p>
          <p class="songButtonTextSmall">Apple Music</p>
        </a>
        <a class="songButton youtubeButton" v-if="youtube" :href="youtube" target="_blank">
          <img draggable="false" src="@/assets/youtube_icon.png" class="smallIcon" width="256px" height="256"/>
          <p class="songButtonText">Listen on Youtube</p>
          <p class="songButtonTextSmall">Youtube</p>
        </a>
      </div>
      <p class="songRelease">{{ releaseDate }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SongRow",
    props: ['title', 'releaseDate', 'spotify', 'appleMusic', 'youtube', 'image']
  }
</script>

<style lang="sass">
  @use '@/base'
  
  .songRow
    width: 150vmin
    min-width: 60em
    max-width: 85%
    margin: 0 auto 0 auto
    height: 16em
    display: block
    box-sizing: border-box
    @media #{base.$widescreen}
      width: 100%
    @media #{base.$smallscreen}
      margin-left: 5%
      margin-bottom: 2em
      width: 95%
      min-width: 95%
      max-width: 95%
    @media #{base.$mobileFit}
      margin-left: 5%
      margin-bottom: 2em
      width: 95%
      min-width: 95%
      max-width: 95%
      height: 40vh
      margin-bottom: 0
    
  .songImage
    float: left
    height: 100%
    
  .songInfo
    display: grid
    height: 100%
    grid-template-rows: auto 1fr auto
    padding: 0.1em 1em 0.1em 1em
    box-sizing: border-box
    @media #{base.$mobileFit}
      padding: 0.1em .5em 0.1em 2.5vw
    
  .songTitle
    grid-row: 1
    margin: 0
    @media #{base.$mobileFit}
      font-size: 6vmin
    
  .songRelease
    grid-row: 3
    margin: 0
    @media #{base.$mobileFit}
      font-size: 4vmin
    
  .songButtons
    grid-row: 2
    display: flex
    flex-wrap: wrap
    align-items: center
    padding: 0.7em 0.5em 0.7em 0.5em
    box-sizing: border-box
    @media #{base.$smallscreen}
      padding: .5em .3em .5em .3em
    
  .songButton
    width: 18em
    height: 3.6em
    margin-right: 1.5em
    border-radius: 1.5em
    box-sizing: border-box
    padding: 0.7em
    text-decoration: none
    color: white
    padding-left: 1em
    transition: transform 0.2s
    transform: scale(1, 1)
    @media #{base.$smallscreen}
      margin-bottom: .5em
      width: 16em
      height: 3.2em
    @media #{base.$mobileFit}
      margin-right: 1.5vw
      padding: .35em
      width: 30vw
      height: 10vh
      font-size: 2.9vw
    img
      float: left
      height: 100%
      width: auto
    &:hover
      transform: scale(1.08, 1.08)
      @media #{base.$smallscreen}
        transform: scale(1.04, 1.04)
    
  .songButtonText
    display: block
    margin-left: 3em
    line-height: 0.3em
    @media #{base.$smallscreen}
      display: none
    
  .songButtonTextSmall
    display: none
    @media #{base.$smallscreen}
      display: inline
      margin-left: .5em
      line-height: 1.75em
    @media #{base.$mobileFit}
      display: inline
      margin-left: 1vw
      line-height: 5vh
      
  .spotifyButton
    background-color: #1DB954
    border: '5px solid #1EBA55'
    
  .appleMusicButton
    background-color: #DD6892
    border: '5px solid #DE6993'
    
  .youtubeButton
    background-color: #FE0000
    border: '5px solid #FF0101'
</style>