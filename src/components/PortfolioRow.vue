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
    display: grid
    margin: 12vh 0 12vh 0
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
      transform: translate3d(0,0,0)
      transform: translateZ(0)
      transform-origin: 100% 100%
      transition: transform 0.25s, filter 0.25s
      @media #{base.$mobileFit}
        transform: scale(1, 1) !important
      img
        width: 100%
</style>