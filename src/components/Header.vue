<template>
  <div class="header">
    <h1 :class="{ headerNoSub: (subtitle.length == 0) }">{{ title }}</h1>
    <h2 v-if="bigSubtitle">{{ subtitle }}</h2>
    <h3 v-if="!bigSubtitle">{{ subtitle }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title', 'subtitle', 'bigSubtitle']
  }
</script>

<style lang="sass">
  @use '@/base'

  .header
    padding: 2vmax 4vw 0 4vw
    box-sizing: border-box
    display: inline-block
    margin-left: 10%
    margin-bottom: 15vmin
    width: 80%
    text-align: center
    border-bottom: 0.17vh solid
    border-radius: 0.17vh
    transition: font-size base.$screenFitTime
    transform: translateZ(0)
    h1
      font-size: 5.4em
      margin-top: 0
      margin-bottom: 0
      @media #{base.$smallscreen}
        font-size: 10vmin
      @media #{base.$widescreen}
        float: left
        font-size: 700%
        line-height: 5vw
        margin-top: 2vw
    h2
      font-size: 250%
      margin-top: 0.5em
      margin-bottom: 1em
      @media #{base.$smallscreen}
        font-size: 6vmin
      @media #{base.$widescreen}
        font-size: 400%
        line-height: 5vw
        float: right
      font-weight: 100
    h3
      font-size: 150%
      margin-top: 0.5em
      margin-bottom: 1em
      @media #{base.$smallscreen}
        font-size: 6vmin
      @media #{base.$widescreen}
        font-size: 400%
        line-height: 5vw
        float: right
      font-weight: 100
      
  .headerNoSub
    @media #{base.$widescreen}
      float: none !important
    
</style>