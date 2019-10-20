<template>
    <div class="spotify">
      <transition-group name="bounce">
        <li v-for="song in songs" :key="song.name">
            <div>
              <img v-bind:src="song.image" width="128px" height="128px">
              <p class="title">{{ song.name }}</p>
              <p class="release">{{ song.release_date }}</p>
            </div>
        </li>
      </transition-group>
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
        if (window.spotifySongs.lastTime < timeNow) {
          window.components.loading.show(500);
          requestSpotifyData(timeNow, this);
        } else {
            this.songs = [];
            window.components.loading.hide();
            for (let i = 0; i < window.spotifySongs.items.length; i++) { 
              setTimeout(() => {
                this.songs.push(window.spotifySongs.items[i]);
              }, 50*i);
            }
        }
      }
    },
    created () {
      this.getSpotifyData();
    }
  }
  
  function requestSpotifyData(timeNow, vm) {
    var request = require('request');
    var options = {
      url: 'https://manel-navola-website-server.herokuapp.com/spotifysongs',
      json: true
    };
    request.get(options, function(error, response, body) {
      window.spotifySongs.lastTime = timeNow + 60000*5;
      window.spotifySongs.items = body.items;
      window.components.loading.hide();
      for (let i = 0; i < body.items.length; i++) { 
        setTimeout(() => {
          vm.songs.push(body.items[i]);
        }, 50*i);
      }
    });
  }
</script>

<style>
  .bounce-enter-active {
    animation: bounce-in 0.2s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .spotify div {
    margin-left: 64px;
    height: 150px;
  }
  .spotify li {
    list-style: none;
    display: block;
  }
  .spotify li img {
    float: left;
  }
  .title {
    padding-top: 0px;
    margin-left: 192px;
    font-family: Arial;
    font-size: 40px;
  }
  .release {
    padding-top: -5px;
    margin-left: 192px;
    font-family: Arial;
    font-size: 20px;
  }
</style>