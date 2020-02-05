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
    @media #{base.$mobileFit}
      margin-left: 5%
      margin-bottom: 2em
      width: 95%
      min-width: 95%
      max-width: 95%
      height: 40vh
      margin-bottom: 0
    @media (orientation: portrait)
      height: 20vh
    
  .songImage
    float: left
    height: 100%
    @media (orientation: portrait)
      max-width: 40vw
      max-height: 40vw
    
  .songInfo
    display: grid
    height: 100%
    grid-template-rows: auto 1fr auto
    padding: 0.1em 1em 0.1em 1em
    box-sizing: border-box
    @media #{base.$mobileFit}
      padding: 0.1em .5em 0.1em 2.5vw
    @media (orientation: portrait)
      grid-template-rows: auto auto 1fr
    
  .songTitle
    grid-row: 1
    margin: 0
    @media #{base.$mobileFit}
      font-size: 6vmin
    @media (orientation: portrait)
      font-size: 5vmin
    
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
      width: 12vw
      margin: 0
      margin-right: 2vw
    img
      height: 100%
      width: auto
    &:hover
      transform: scale(1.08, 1.08)
      @media #{base.$smallscreen}
        transform: scale(1.04, 1.04)
    
  .songButtonText
    display: block
    margin-left: 1em
    font-size: 1.15em
    @media #{base.$smallscreen}
      display: none
    
  .songButtonTextSmall
    display: none
    @media #{base.$mobileFit}
      display: block
      margin-left: 3%
      font-size: 2.3vw
    @media (orientation: portrait)
      display: none
      
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