<template>
  <div class="songRow">
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
    width: 120vmin
    max-width: 95%
    margin: 0 auto 0 auto
    height: 16em
    display: block
    box-sizing: border-box
    
  .songImage
    float: left
    height: 100%
    
  .songInfo
    display: grid
    height: 100%
    grid-template-rows: auto 1fr auto
    padding: 0.1em 1em 0.1em 1em
    box-sizing: border-box
    
  .songTitle
    grid-row: 1
    margin: 0
    
  .songRelease
    grid-row: 3
    margin: 0
    
  .songButtons
    grid-row: 2
    display: flex
    flex-wrap: wrap
    align-items: center
    padding: 0.7em 0.5em 0.7em 0.5em
    box-sizing: border-box
    
  .songButton
    width: 18em
    height: 3.6em
    margin-right: 1.5em
    margin-bottom: 1em
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
      line-height: 0.3em
    &:hover
      transform: scale(1.08, 1.08)
      
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