<template>
  <div class="song">
    <img ref="songImage" v-bind:src="songData.image" class="image" width="192px" height="192px">
    <p class="name">{{ songData.name }}</p>
    <a class="button spotifyButton" v-if="songData.spotify" v-bind:href="songData.spotify" target="_blank">
      <img src="../assets/spotify_icon.png" width="32px" height="32px"/>
      <p>Listen on Spotify</p>
    </a>
    <a class="button appleButton" v-if="songData.apple" v-bind:href="songData.apple" target="_blank">
      <img src="../assets/apple_music_icon.png" width="32px" height="32px"/>
      <p>Listen on Apple Music</p>
    </a>
    <a class="button youtubeButton" v-if="songData.youtube" v-bind:href="songData.youtube" target="_blank">
      <img src="../assets/youtube_icon.png" width="32px" height="32px"/>
      <p>Listen on Youtube</p>
    </a>
    <p class="release">{{ songData.release }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Song',
    props: [
      'songData'
    ],
    methods: {
      showMyImage() {
        return this.$refs.songImage;
      }
    }
  }
</script>

<style>
  .image {
    float: left;
  }
  .name {
    font-family: Arial;
    font-size: 40px;
    margin-left: 224px;
    margin-bottom: 32px;
  }
  .release {
    font-family: Arial;
    font-size: 16px;
    margin-left: 224px;
  }
  .button:hover {
    animation: wobble 0.2s ease-in;
    transform: scale(1.05, 1.05);
  }
  @keyframes wobble {
    0% {
      transform: rotate(0deg) scale(1, 1);
    }
    20% {
      transform: rotate(1deg) scale(1.02, 1.02);
    }
    40% {
      transform: rotate(0deg) scale(1.05, 1.05);
    }
    60% {
      transform: rotate(-1deg) scale(1.05, 1.05);
    }
    100% {
      transform: rotate(0deg) scale(1.05, 1.05);
    }
  }
  .button {
    margin-left: 32px;
    cursor: pointer;
    text-decoration: none;
    text-shadow: 1px 1px #1a2a1d;
    border-radius: 5px;
    width: 266px;
    height: 58px;
    display: inline-block;
    
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    margin-bottom: 16px;
    transition: all 0.2s;
  }
  .button img {
    float: left;
    margin-left: 14px;
    margin-top: 14px;
  }
  .button p {
    text-decoration: none;
    color: white;
    margin-left: 58px;
    margin-top: 18px;
  }
  .appleButton {
    background-color: #DD6892;
    border: '5px solid #DE6993';
  }
  .youtubeButton {
    background-color: #fe0000;
    border: '5px solid #ff0000';
  }
  .spotifyButton {
    background-color: #1DB954;
    border: '5px solid #1EBA55';
  }
</style>