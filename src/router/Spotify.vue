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
        songs: [],
        pending: []
      };
    },
    methods: {
      getSpotifyData() {
        window.requesting.spotify = true;
        var timeNow = new Date().getTime();
        if (window.spotifySongs.lastTime < timeNow) {
          window.components.loading.show(500);
          window.spotifySongs.vm = this;
          requestSpotifyData(timeNow);
        } else {
            this.songs = [];
            window.components.loading.hide();
            for (let i = 0; i < window.spotifySongs.items.length; i++) { 
              setTimeout(() => {
                this.songs.push(window.spotifySongs.items[i]);
              }, 50*i);
            }
            window.requesting.spotify = false;
        }
      }
    },
    created () {
      if (window.requesting.spotify) {
        window.spotifySongs.vm = this;
        window.components.loading.show();
      } else {
        this.getSpotifyData();
      }
    },
    destroyed() {
      for (let i = 0; i < this.pending.length; i++) {
        clearTimeout(this.pending[i])
      }
    }
  }
  
  function requestSpotifyData(timeNow) {
    var request = require('request');
    var options = {
      url: 'https://manel-navola-website-server.herokuapp.com/spotifysongs',
      json: true
    };
    request.get(options, (error, response, body) => {
      window.requesting.spotify = false;
      if (error || response.statusCode !== 200) {
        window.components.loading.hide();
        return;
      }
      window.spotifySongs.lastTime = timeNow + 60000;
      window.spotifySongs.items = body.items;
      window.components.loading.hide();
      for (let i = 0; i < body.items.length; i++) {
        var to = setTimeout(() => {
          if (window.spotifySongs.vm != null) {
            window.spotifySongs.vm.songs.push(body.items[i]);
            if (i == body.items.length) {
              window.spotifySongs.vm.pending = []
            }
          }
        }, 50*i);
        window.spotifySongs.vm.pending.push(to)
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