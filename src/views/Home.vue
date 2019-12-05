<template>
  <div id="home">
    <div id="header">
      <h1>Manel Navola</h1>
      <h2>Programmer & Music Producer</h2>
    </div>
    <div id="gridList">
      
      <portfolioRow title="Web Development" subtitle="HTML, CSS, Javascript, Vue js, Node js" text="Web design using the latest libraries" imgURL="webDev.jpg"/>
      
      <portfolioRow title="Music Production" subtitle="FL Studio" text="I also make music!" imgURL="flStudio.jpg"/>
      
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
    methods: {
      handleScroll() {
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
            if (!foundOne && itemY > mid - midSide*0.45) {
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
    created() {
      window.addEventListener('scroll', this.handleScroll);
      for (var i = 0; i < 10; i++) {
        setTimeout(this.handleScroll, i*100);
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
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
    margin: 0 4vw 0 4vw
  
  #header
    display: inline-block
    margin-left: 10%
    width: 80%
    text-align: center
    border-bottom: 0.17vh solid
    border-radius: 0.17vh
    transition: font-size base.$screenFitTime
    h1
      font-size: 400%
      margin-top: 2vh
      margin-bottom: 0
      @media #{base.$smallscreen}
        font-size: 10vmin
      @media #{base.$widescreen}
        float: left
        font-size: 600%
        line-height: 5vw
        margin-top: 2vw
    h2
      font-size: 200%
      @media #{base.$smallscreen}
        font-size: 6vmin
      @media #{base.$widescreen}
        font-size: 300%
        line-height: 5vw
        float: right
      font-weight: 100
    
</style>