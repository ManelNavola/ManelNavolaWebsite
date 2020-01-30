<template>
  <div class="songRow">
    <div class="songRowWide">
      <img class="songImage" v-bind:src="image"/>
      <div class="songInfo">
        <h1 class="songTitle">{{ title }}</h1>
        <div class="songButtons">
          <a class="songButton spotifyButton" v-if="spotify" :href="spotify" target="_blank">
            <img draggable="false" src="@/assets/spotify_icon.png" class="smallIcon" width="256px" height="256"/>
            <p>Listen on Spotify</p>
          </a>
          <a class="songButton appleMusicButton" v-if="appleMusic" :href="appleMusic" target="_blank">
            <img draggable="false" src="@/assets/apple_music_icon.png" class="smallIcon" width="256px" height="256"/>
            <p>Listen on Apple Music</p>
          </a>
          <a class="songButton youtubeButton" v-if="youtube" :href="youtube" target="_blank">
            <img draggable="false" src="@/assets/youtube_icon.png" class="smallIcon" width="256px" height="256"/>
            <p>Listen on Youtube</p>
          </a>
        </div>
        <p class="songRelease">{{ releaseDate }}</p>
      </div>
    </div>
    <div class="songRowCompact">
      <h1 class="songTitleCompact">{{ title }}</h1>
      <img class="songImageCompact" src="@/assets/spotify_icon.png"/>
      <p class="songReleaseCompact">{{ releaseDate }}</p>
    </div>
    <!--<div class="songImage"></div>
    
    <div class="songButtons">
      <div>
        <a class="button spotifyButton" v-if="spotify" :href="spotify" target="_blank">
          <img draggable="false" src="@/assets/spotify_icon.png" class="smallIcon" width="256px" height="256"/>
          <div>
            <p>Listen on Apple Music</p>
          </div>
        </a>
      </div>
    </div>-->
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
    width: 100%
    height: 16em
    display: block
    box-sizing: border-box
  
  .songRowWide
    width: 100%
    height: 16em
    display: block
    box-sizing: border-box
    @media #{base.$mobileFit}
      display: none
    
  .songRowCompact
    width: 100%
    height: 10vmin
    display: none
    @media #{base.$mobileFit}
      display: grid
      grid-template-columns: auto 1fr
      grid-template-rows: 1fr auto 1fr
    
  .songImage
    float: left
    height: 100%
    
  .songImageCompact
    grid-row: 2
    grid-column: 1
    
  .songInfo
    display: grid
    height: 100%
    grid-template-rows: auto 1fr auto
    padding: 1em
    box-sizing: border-box
    
  .songTitle
    grid-row: 1
    margin: 0
    
  .songTitleCompact
    grid-row: 1
    
  .songRelease
    grid-row: 3
    margin: 0
    
  .songReleaseCompact
    grid-row: 3
  .songButtons
    grid-row: 2
    display: flex
    flex-wrap: wrap
    align-items: center
    padding: 0.7em 0.5em 0.7em 0.5em
    box-sizing: border-box
    
  .songButton
    width: 18em
    height: 3.8em
    margin-right: 1.5em
    border-radius: 1.5em
    box-sizing: border-box
    padding: 0.7em
    text-decoration: none
    color: white
    padding-left: 1em
    transition: transform 0.2s
    transform: scale(1, 1)
    img
      float: left
      height: 100%
      width: auto
    p
      margin-left: 3em
      line-height: 0.5em
    &:hover
      transform: scale(1.1, 1.1)
      
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