<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title', 'subtitle']
  }
</script>

<style lang="sass">
  @use '@/base'

  .header
    padding: 2vmax 4vw 1vmax 4vw
    box-sizing: border-box
    display: inline-block
    margin-left: 10%
    width: 80%
    text-align: center
    border-bottom: 0.17vh solid
    border-radius: 0.17vh
    transition: font-size base.$screenFitTime
    transform: translateZ(0)
    h1
      font-size: 600%
      margin-top: 2vh
      margin-bottom: 0
      @media #{base.$smallscreen}
        font-size: 10vmin
      @media #{base.$widescreen}
        float: left
        font-size: 700%
        line-height: 5vw
        margin-top: 2vw
    h2
      font-size: 300%
      @media #{base.$smallscreen}
        font-size: 6vmin
      @media #{base.$widescreen}
        font-size: 400%
        line-height: 5vw
        float: right
      font-weight: 100
    
</style>