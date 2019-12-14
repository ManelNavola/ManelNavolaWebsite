<template>
  <div class="portfolioRow">
    <h1>{{ title }}</h1>
    <div class="portfolioText">
      <h2>{{ subtitle }}</h2>
      <p>{{ text }}</p>
    </div>
    <div class="portfolioImage">
      <img :src="getImgUrl(imgURL)" draggable="false"/>
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
      }
    }
  }
</script>

<style lang="sass">
  @use '@/base'

  .portfolioRow
    @media #{base.$noMobileFit}
      scroll-snap-align: center
    display: grid
    margin: 20vh 4vw 20vh 4vw
    grid-template-columns: 4fr 5fr
    grid-template-rows: auto 1fr
    padding: 0 5vw 0 5vw
    transition: color 0.25s
    color: gray
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
        font-size: 130%
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
        font-weight: 400
        @media #{base.$smallscreen}
          font-size: 120%
        @media #{base.$widescreen}
          font-size: 200%
      p
        font-size: 110%
        font-weight: 300
        @media #{base.$smallscreen}
          font-size: 110%
        @media #{base.$widescreen}
          font-size: 160%
        
    .portfolioImage
      margin: auto
      min-width: 100%
      grid-row: 1 / 3
      grid-column: 2
      transform-origin: 100% 100%
      transition: transform 0.25s, filter 0.25s
      box-sizing: border-box
      max-width: 100%
      overflow: hidden
      @media #{base.$smallscreen}
        width: 100%
        height: auto
        grid-row: 2
        grid-column: 1
      @media #{base.$mobileFit}
        transform: scale(1, 1) !important
        filter: drop-shadow(10px 10px 4px black) !important
      img
        transform: translateZ(0)
        @media #{base.$smallscreen}
          margin: 1vmax 0 1vmax 0
          width: 60%
          min-width: 0%
        min-width: 100%
        width: 40em
</style>