<template>
  <div id="songs">
    <Header title="Official Music" subtitle=""/>
    
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
            title: "Static (Album)",
            image: "https://f4.bcbits.com/img/a2784371020_16.jpg",
            releaseDate: "October 17, 2020",
            spotify: "https://open.spotify.com/album/4U28P52jpvmanqEqDv9z2N?si=frqf-aiaTzCBjEMyZBKLDQ",
            appleMusic: "https://music.apple.com/us/album/static-ep/1532336523?uo=4",
            youtube: "https://www.youtube.com/watch?v=p61t-4SjGyU&list=PL0LkLyIcBERYgtQQL_s7xCPkmqqwkDNXN"
          },
          {
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 3, 2019",
            spotify: "https://open.spotify.com/album/0DqkbdB8GlzNKD4QQ3UahT",
            appleMusic: "https://music.apple.com/us/album/statement-single/1478782826?uo=4",
            youtube: "https://www.youtube.com/watch?v=hhMMiiH55UQ"
          },
          {
            title: "Ready Now (ft. stepak)",
            image: "https://f4.bcbits.com/img/a2018584721_16.jpg",
            releaseDate: "November 19, 2018",
            youtube: "www.youtube.com/watch?v=KAGy4ja4TXY"
          },
          {
            title: "Waiting for You (EP)",
            image: "https://f4.bcbits.com/img/a0757260688_16.jpg",
            releaseDate: "August 9, 2018",
            youtube: "https://www.youtube.com/watch?v=yiLdHvNpLkU&list=PL0LkLyIcBERZ7Ac5cBzAKld29fv5ZXxTg"
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
      title: 'Music'
    }
  }
</script>

<style lang="sass">
  @use '@/base'

  #songList
    display: grid
    grid-template-columns: 1fr
    grid-gap: 5em
    margin-left: 5%
    margin-bottom: 6vmin
    width: 100%
    @media #{base.$widescreen}
      grid-template-columns: 1fr 1fr
    div
      
</style>