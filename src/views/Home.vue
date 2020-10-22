<template>
  <div id="home">
    <Header title="Manel Navola" subtitle="Developer & Musician" bigSubtitle="true"/>
    <div id="portfolioList">
      
      <PortfolioRow
        title="Web Development"
        subtitle="HTML, CSS, Javascript, Vue js, Node js"
        text="Web design using the latest libraries"
        imgURL="webDev.jpg"
        />
      
      <PortfolioRow
        title="Music Production"
        subtitle="FL Studio"
        text="I also make music!"
        imgURL="flStudio.jpg"
        />
      
      <PortfolioRow
        title="App Development"
        subtitle="C#, Java, Eclipse, Netbeans, Scenebuilder, Visual Studio, Entity Framework"
        text="App development and design using the latest tools"
        imgURL="appDev.jpg"
        />
    </div>
  </div>
</template>

<script>
  import PortfolioRow from '@/components/PortfolioRow';
  import Header from '@/components/Header';
  
  export default {
    name: 'Home',
    components: {
      PortfolioRow, Header
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
              item.style.filter = "blur(0px) drop-shadow(15px 15px 4px #222222)";
              rows[i].style.color = "white";
              foundOne = true;
            } else {
              item.style.transform = "scale(1, 1)";
              item.style.filter = "blur(2px) drop-shadow(10px 10px 4px #222222)";
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
      title: 'Home'
    }
  }
</script>

<style lang="sass">
  @use '@/base'

  #home
    scroll-snap-type: y proximity
    h1
      @media #{base.$noMobileFit}
        scroll-snap-align: end
</style>