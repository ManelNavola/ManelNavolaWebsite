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
    height: 40vh
    grid-template-columns: 1fr auto
    grid-template-rows: auto 1fr
    @media #{base.$smallscreen}
      grid-template-columns: 1
      grid-template-rows: 1fr auto 1fr
    h1
      font-size: 200%
      grid-row: 1
      grid-column: 1
      @media #{base.$smallscreen}
        grid-row: 1
        grid-column: 1
    div
      grid-row: 2
      grid-column: 1
      @media #{base.$smallscreen}
        grid-row: 3
        grid-column: 1
      h2
        font-size: 150%
        font-weight: 300¡
      p
        font-size: 100%
        font-weight: 200
    img
      grid-row: 1 / 3
      grid-column: 2
      height: 100%
      @media #{base.$smallscreen}
        width: 100%
        height: auto
        grid-row: 2
        grid-column: 1
</style>