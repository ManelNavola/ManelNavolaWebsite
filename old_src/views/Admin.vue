<template>
    <div class="admin" v-if="loggedIn">
      <h1>Admin Panel</h1>
      <div class="addSong">
        <h2>Add a new song</h2>
        <button class="addSongButton">Create</button>
        <div class="createSong">
          <p>Name: </p><input v-model="songData.name">
          <p style="color:red" v-if="songData.name.length == 0">Missing name!</p><br>
          <p>Image: </p><input v-model="songImage">
          <p style="color:red" v-if="!loadedImage">Missing image!</p><br>
          <p>Release: </p><input v-model="songData.release">  
          <p style="color:red" v-if="songData.release.length == 0">Missing release!</p><br>
          <p>Youtube: </p><input v-model="songData.youtube"><br>
          <p>Spotify: </p><input v-model="songData.spotify"><br>
          <p>Apple: </p><input v-model="songData.apple"><br>
        </div>
        <Song ref="editSong" :songData="songData"/>
      </div>
      <br>
    </div>
</template>

<script>
  import Song from '../components/Song'
  export default {
    name: 'Admin',
    components: {
      Song
    },
    data () {
      return {
        loggedIn: false,
        wfi: null,
        loadedImage: false,
        songImage: '',
        songData: {
          name: '',
          release: '',
          apple: '',
          youtube: '',
          spotify: ''
        }
      }
    },
    watch: {
      songImage: function(ov, nv) {
        this.songData.image = nv;
        console.log("try")
        this.editSong = this.$refs.editSong;
        clearTimeout(this.wfi);
        if (this.editSong == null) return;
        waitForImage(10, this.editSong.showMyImage(), this);
      }
    },
    created () {
      let vm = this;
      window.firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          vm.loggedIn = true;
        } else {
          window.location = '/';
        }
      }, function() {
        window.location = '/';
      });
    }
  }
  
  function waitForImage(v, img, vm) {
    console.log(v)
    if (img.complete) {
      if (img.naturalHeight === 0) {
        console.log("oof!")
        vm.loadedImage = false;
      } else {
        console.log("loaded")
        vm.loadedImage = true;
      }
      return;
    }
    v--;
    if (v == 0) return;
    vm.wfi = setTimeout(waitForImage, 200);
  }
</script>

<style>
  .admin {
    top: 0px;
  }
  .admin h1 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 32px;
    color: white;
  }
  .admin h2 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 32px;
    color: white;
  }
  .createSong p {
    display: inline;
    margin-top: 55px;
  }
  .createSong input {
    margin-bottom: 6px;
    margin-right: 4px;
  }
  .addSong {
    border: 2px #ffffff solid;
    background-color: #222222;
    height: 500px;
    padding: 10px;
  }
  .addSongButton {
    background-color: #aaffaa;
    border: 2px #ccffcc solid;
    border-radius: 1px;
    float: right;
    width: 192px;
    height: 48px;
    color: black;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 32px;
    transition: 0.2s all;
    margin-right: 32px;
  }
  .addSongButton:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
    transition: 0.2s all;
  }
</style>