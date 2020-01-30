<template>
  <div id="songs">
    <Header title="Official Songs" subtitle=""/>
    
    <div id="songList">
      <div v-for="song in songs" :key="song.releaseDate">
        <SongRow
                 :title="song.title"
                 :image="song.image"
                 :releaseDate="song.releaseDate"
                 :spotify="song.spotify"
                 :appleMusic="song.appleMusic"
                 :youtube="song.youtube"
                 />
      </div>
    </div>
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
            title: "The sins of our binoculars",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 3, 2019",
            spotify: "a",
            appleMusic: "b",
            youtube: "c"
          },
          {
            title: "The criticalestest name",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 3, 2019",
            spotify: "a",
            appleMusic: "b",
            youtube: "c"
          },
          {
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 3, 2019",
            spotify: "a",
            appleMusic: "b",
            youtube: "c"
          },
          {
            title: "Ready Now",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 3, 2019",
            spotify: "a",
            appleMusic: "b",
            youtube: "c"
          }
        ]
      }
    },
    components: {
      Header, SongRow
    },
    methods: {
      handleScroll() {
        this.$parent.$refs.toolbar.handleScroll();
      }
    },
    mounted() {
      this.$el.addEventListener('scroll', this.handleScroll);
      for (var i = 1; i < 10; i++) {
        setTimeout(this.handleScroll, i*100);
      }
      this.handleScroll();
    },
    destroyed() {
      this.$el.removeEventListener('scroll', this.handleScroll);
    },
    metaInfo: {
      title: 'Songs'
    }
  }
</script>

<style lang="sass">
  @use '@/base'

  #songList
    display: grid
    grid-template-columns: 1fr
    grid-gap: 4em
    margin-bottom: 6vmin
    width: 100%
    @media #{base.$widescreen}
      grid-template-columns: 1fr 1fr
    div
      
</style>