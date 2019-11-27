<template>
    <div class="songs">
      <br><br><br>
      <h1 class="pageTitle">Official Songs</h1>
      <transition-group name="bounce">
        <li v-for="song in songs" :key="song.name">
            <Song :songData="song"/>
        </li>
      </transition-group>
      <br>
    </div>
</template>

<script>
  import Song from '../components/Song'
  export default {
    name: 'Songs',
    components: {
      Song
    },
    data () {
      return {
        songs: [],
        pending: []
      }
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
    },
    metaInfo: {
      title: 'Songs'
    }
  }
  
  function requestSpotifyData(timeNow) {
    var request = require('request');
    var options = {
      url: 'https://us-central1-manelnavolacom.cloudfunctions.net/readSongs',
      json: true
    };
    request.get(options, (error, response, body) => {
      window.requesting.spotify = false;
      var bodyData = body.data;
      bodyData.sort(function(a, b) {
        var ad = a.release.split('-');
        var bd = b.release.split('-');
        if (ad[2] < bd[2]) { return 1; } else if (ad[2] > bd[2]) { return -1; }
        else {
          if (ad[1] < bd[1]) { return 1; } else if (ad[1] > bd[1]) { return -1; }
          else {
            if (ad[0] < bd[0]) { return 1; } else if (ad[0] > bd[0]) { return -1; }
            else {
              return 0;
            }
          }
        }
      });
      if (error || response.statusCode !== 200) {
        window.components.loading.hide();
        return;
      }
      window.spotifySongs.lastTime = timeNow + 60 * 1000;
      window.spotifySongs.items = bodyData;
      window.components.loading.hide();
      for (let i = 0; i < bodyData.length; i++) {
        var to = setTimeout(() => {
          if (window.spotifySongs.vm != null) {
            window.spotifySongs.vm.songs.push(bodyData[i]);
            if (i == bodyData.length) {
              window.spotifySongs.vm.pending = [];
            }
          }
        }, 50*i);
        window.spotifySongs.vm.pending.push(to);
      }
    });
  }
</script>

<style>
  .songs {
    margin-top: 72px;
  }
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
</style>