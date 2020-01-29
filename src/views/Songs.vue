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
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 3, 2019",
            spotify: "a"
          },
          {
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 4, 2019",
            spotify: "a"
          },
          {
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 5, 2019",
            spotify: "a"
          },
          {
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 6, 2019",
            spotify: "a"
          },
          {
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 7, 2019",
            spotify: "a"
          },
          {
            title: "Statement",
            image: "https://f4.bcbits.com/img/a0350892904_16.jpg",
            releaseDate: "September 8, 2019",
            spotify: "a"
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
        var rows = this.$el.getElementsByClassName("portfolioRow");
        var mid = window.innerHeight/2.0;
        var midSide = window.innerHeight/2.0;
        var foundOne = false;
        for (var i = 0; i < rows.length; i++) {
          var items = rows[i].getElementsByClassName("portfolioImage");
          if (items.length == 0) continue;
          var item = items[0];
          var rect = item.getBoundingClientRect();
          var itemY = rect.y + rect.height/2.0;
          if (rect.height != 0) {
            if (!foundOne && itemY > mid - midSide*0.5) {
              item.style.transform = "scale(1.05, 1.05) translate(-5px, -5px)";
              item.style.filter = "blur(0px) drop-shadow(15px 15px 4px black)";
              rows[i].style.color = "white";
              foundOne = true;
            } else {
              item.style.transform = "scale(1, 1)";
              item.style.filter = "blur(2px) drop-shadow(10px 10px 4px black)";
              rows[i].style.color = "#999";
            }
          }
        }
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
    grid-gap: 4vmin
    margin-left: 7.5%
    margin-top: 6vmin
    margin-bottom: 6vmin
    width: 85%
    @media #{base.$widescreen}
      grid-template-columns: 1fr 1fr
    div
      
</style>