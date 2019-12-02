<template>
  <div class="portfolioRow">
    <h1>{{ title }}</h1>
    <div>
      <h2>{{ subtitle }}</h2>
      <p>{{ text }}</p>
    </div>
    <img :src="getImgUrl(imgURL)"/>
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
    margin: 10vh 0 10vh 0
    grid-template-columns: 4fr 5fr
    grid-template-rows: auto 1fr
    @media screen and (min-aspect-ratio: 2/1)
      padding: 0 20vh 0 20vh
    @media #{base.$widescreen}
      padding: 0 25vh 0 25vh
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
    div
      grid-row: 2
      grid-column: 1
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
    img
      grid-row: 1 / 3
      grid-column: 2
      width: 100%
      filter: drop-shadow(10px 10px 4px black)
      @media #{base.$smallscreen}
        width: 100%
        height: auto
        grid-row: 2
        grid-column: 1
</style>