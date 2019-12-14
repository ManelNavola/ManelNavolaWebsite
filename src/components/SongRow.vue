<template>
  <div id="songRow">
    <img v-bind:src="image"/>
    <h1>{{ title }}</h1>
    <a class="button spotifyButton" v-if="spotify" :href="spotify" target="_blank">
      <img draggable="false" src="@/assets/spotify_icon.png" class="smallIcon" width="256px" height="256"/>
      <div>
        <p>Listen on Apple Music</p>
      </div>
    </a>
    <p>{{ releaseDate }}</p>
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
  
  #songRow
    width: 100%
    height: 25em
    background-color: rgba(pink, 0.5)
    box-sizing: border-box
    img
      float: left
      height: 100%
    
  .button
    display: inline-block
    width: 25%
    box-sizing: border-box
    border-radius: 2vmin
    text-decoration: none
    img
      box-sizing: border-box
      padding: 4%
      width: 25%
      height: auto
      margin-right: 5px
    div
      vertical-align: middle
      line-height: 300%
      font-size: 100%
      color: white
      
  .spotifyButton
    background-color: #1DB954
    border: '5px solid #1EBA55'
</style>