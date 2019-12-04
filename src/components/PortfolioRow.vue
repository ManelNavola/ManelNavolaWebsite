<template>
  <div class="portfolioRow">
    <h1>{{ title }}</h1>
    <div class="portfolioText">
      <h2>{{ subtitle }}</h2>
      <p>{{ text }}</p>
    </div>
    <div class="portfolioImage">
      <img :src="getImgUrl(imgURL)"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PortfolioRow',
    props: ['title', 'subtitle', 'text', 'imgURL'],
    methods: {
      getImgUrl(pic) {
        return require('../assets/' + pic)
      },
      handleScroll() {
        var images = this.$el.getElementsByClassName("portfolioImage");
        var mid = window.innerHeight/2.0;
        var midSide = window.innerHeight/2.0;
        if (images.length == 1) {
          var item = images.item(images[0]);
          var rect = item.getBoundingClientRect();
          var itemY = rect.y + rect.height/2.0;
          if (rect.height != 0) {
            if (itemY > mid - midSide*0.5 && itemY < mid + midSide*0.5) {
              item.style.transform = "scale(1.05, 1.05)";
              this.$el.style.color = "white";
            } else {
              item.style.transform = "scale(1, 1)";
              this.$el.style.color = "#999";
            }
          }
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="sass">
  @use '@/base'

  .portfolioRow
    display: grid
    margin: 10vh 0 10vh 0
    grid-template-columns: 4fr 5fr
    grid-template-rows: auto 1fr
    padding: 0 5vw 0 5vw
    transition: color 0.25s
    @media #{base.$mobileFit}
      color: white !important
    @media #{base.$smallscreen}
      grid-template-columns: 1fr
      grid-template-rows: auto auto 1fr
    h1
      font-size: 200%
      grid-row: 1
      grid-column: 1
      @media #{base.$smallscreen}
        font-size: 120%
        grid-row: 1
        grid-column: 1
      @media #{base.$widescreen}
        font-size: 300%
    .portfolioText
      grid-row: 2
      grid-column: 1
      margin-right: 10%
      @media #{base.$smallscreen}
        grid-row: 3
        grid-column: 1
      h2
        font-size: 150%
        font-weight: 300
        @media #{base.$smallscreen}
          font-size: 100%
        @media #{base.$widescreen}
          font-size: 200%
      p
        font-size: 100%
        font-weight: 200
        @media #{base.$smallscreen}
          font-size: 80%
        @media #{base.$widescreen}
          font-size: 140%
        
    .portfolioImage
      margin: auto
      grid-row: 1 / 3
      grid-column: 2
      @media #{base.$smallscreen}
        width: 100%
        height: auto
        grid-row: 2
        grid-column: 1
      transform-origin: 100% 100%
      transition: all 0.25s
      filter: drop-shadow(10px 10px 4px black)
      @media #{base.$mobileFit}
        transform: scale(1, 1) !important
      img
        width: 100%
</style>