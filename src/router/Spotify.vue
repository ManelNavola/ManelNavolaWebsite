<template>
    <div class="spotify">
      <h1>My spotify songs</h1>
      <li v-for="song in songs" :key="song.name">
        <div>
          <img v-bind:src="song.image" width="128px" height="128px"><p>{{ song.name }}</p>
        </div>
      </li>
    </div>
</template>

<script>
  export default {
    name: 'Spotify',
    data () {
      return {
        songs: []
      };
    },
    methods: {
      getSpotifyData() {
        var timeNow = new Date().getTime();
        if (window.spotifySongs === undefined || window.spotifySongs.lastTime < timeNow) {
          requestSpotifyData(timeNow, this);
        } else {
          this.songs = spotifySongs.items;
        }
      }
    },
    created () {
      this.getSpotifyData()
    }
  }
  
  function requestSpotifyData(timeNow, vm) {
    var request = require('request');
    var options = {
      url: 'https://manel-navola-website-server.herokuapp.com/spotifysongs',
      json: true
    };
    request.get(options, function(error, response, body) {
      window.spotifySongs.lastTime = timeNow + 60000;
      window.spotifySongs.items = body.items;
      vm.songs = body.items;
    });
  }
</script>

<style>
  .spotify div {
    width: 100%;
    height: 150px;
  }
  .spotify li {
    list-style: none;
    display: block;
  }
  .spotify li img {
    float: left;
  }
  .spotify li p {
    padding-top: 25px;
    margin-left: 192px;
    font: Arial;
    font-size: 50px;
  }
</style>