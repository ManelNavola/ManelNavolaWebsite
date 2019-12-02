<template>
  <div id="home">
    <div id="header">
      <h1>Manel Navola</h1>
      <h2>Programmer & Music Producer</h2>
    </div>
    <div id="gridList">
      
      <portfolioRow title="Web Development" subtitle="HTML, CSS, Javascript, Vue js, Node js" text="hola wapos" imgURL="webDev.jpg"/>
      
    </div>
  </div>
</template>

<script>
  import PortfolioRow from '@/components/PortfolioRow'
  export default {
    name: 'Home',
    components: {
      PortfolioRow
    },
    metaInfo: {
      title: 'Home'
    }
  }
</script>

<style lang="sass">
  @use '@/base'
  
  .smallText
    font-size: 2vh
  
  #gridList
    margin: 15vh 8vw 0 8vw
    @media #{base.$smallscreen}
      margin-top: 2vh
  
  #header
    display: inline-block
    margin-left: 10%
    width: 80%
    text-align: center
    border-bottom: 0.15vh solid
    border-radius: 0.15vh
    transition: font-size base.$screenFitTime
    h1
      font-size: 400%
      margin-top: 2vh
      margin-bottom: 0
      @media #{base.$smallscreen}
        font-size: 10vw
      @media #{base.$widescreen}
        float: left
        font-size: 800%
        line-height: 5vw
        margin-top: 2vw
    h2
      font-size: 200%
      @media #{base.$smallscreen}
        font-size: 6vw
      @media #{base.$widescreen}
        font-size: 400%
        line-height: 5vw
        float: right
      font-weight: 100
    
</style>