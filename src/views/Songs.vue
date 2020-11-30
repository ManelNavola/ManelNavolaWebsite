<template>
  <div id="songs">
    <Header title="Original Music" subtitle=""/>
    <div id="songList">
      <div v-for="song in songs" :key="song.releaseDate">
        <SongRow
                 :title="song.title"
                 :image="song.image"
                 :releaseDate="song.releaseDate"
                 :spotify="song.spotify"
                 :appleMusic="song.appleMusic"
                 :youtube="song.youtube"
                 :bandcamp="song.bandcamp"
                 :bandcampbig="song.bandcampbig"
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
            bandcampbig: "https://bandcamp.com/EmbeddedPlayer/album=2753908528/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            releaseDate: "October 17, 2020",
            spotify: "https://open.spotify.com/album/4U28P52jpvmanqEqDv9z2N?si=frqf-aiaTzCBjEMyZBKLDQ",
            appleMusic: "https://music.apple.com/us/album/static-ep/1532336523?uo=4",
            youtube: "https://www.youtube.com/watch?v=p61t-4SjGyU&list=PL0LkLyIcBERYgtQQL_s7xCPkmqqwkDNXN"
          },
          {
            title: "Statement",
            bandcamp: "https://bandcamp.com/EmbeddedPlayer/track=652969858/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            releaseDate: "September 3, 2019",
            spotify: "https://open.spotify.com/album/0DqkbdB8GlzNKD4QQ3UahT",
            appleMusic: "https://music.apple.com/us/album/statement-single/1478782826?uo=4",
            youtube: "https://www.youtube.com/watch?v=hhMMiiH55UQ"
          },
          {
            title: "Ready Now (ft. stepak)",
            bandcamp: "https://bandcamp.com/EmbeddedPlayer/track=3373458318/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            releaseDate: "November 19, 2018",
            youtube: "www.youtube.com/watch?v=KAGy4ja4TXY"
          },
          {
            title: "Waiting for You (EP)",
            bandcampbig: "https://bandcamp.com/EmbeddedPlayer/album=4248045383/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
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
    grid-gap: 6em
    width: 75%
    margin: 0 auto 5em auto
    @media #{base.$widescreen}
      grid-template-columns: 1fr 1fr
    div
      
</style>