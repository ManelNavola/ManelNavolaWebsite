<template>
  <div id="songs">
    <Header title="Official Songs" subtitle=""/>
    
    <li v-for="song in songs" :key="song.image">
      <SongRow
               :title="song.title"
               :image="song.image"
               :releaseDate="song.releaseDate"
               :spotify="song.spotify"
               />
    </li>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import SongRow from '@/components/SongRow';
  export default {
    name: "Songs",
    data() {
      return {
        songs: [
          {
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 3, 2019",
            spotify: "a"
          }
        ]
      }
    },
    components: {
      Header, SongRow
    },
    metaInfo: {
      title: 'Songs'
    }
  }
</script>

<style lang="sass">
  #songs
    li
      list-style: none
</style>