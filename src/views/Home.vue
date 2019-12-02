<template>
  <div id="home">
    <div id="header">
      <h1>Manel Navola</h1>
      <h2>Programmer & Music Producer</h2>
    </div>
    <div id="gridList">
      <div class="item">
        <div class="text">
          <h3>Web Development</h3>
          <h4>HTML, CSS, Javascript, Vue JS, Node JS</h4>
          <p class="smallText">Responsive, simple and flexible web design using the lastest libraries and </p>
        </div>
        <img src="../assets/webDev.jpg"/>
      </div>
      
      <div class="item">
        <div class="text">
          <h3>Web Development</h3>
          <h4>HTML, CSS, Javascript, Vue JS, Node JS</h4>
          <p class="smallText">Responsive, simple and flexible web design using the lastest libraries and </p>
        </div>
        <img src="../assets/webDev.jpg"/>
      </div>
      
      <div class="item">
        <div class="text">
          <h3>Web Development</h3>
          <h4>HTML, CSS, Javascript, Vue JS, Node JS</h4>
          <p class="smallText">Responsive, simple and flexible web design using the lastest libraries and </p>
        </div>
        <img src="../assets/webDev.jpg"/>
      </div>
      
      <div class="item">
        <div class="text">
          <h3>Web Development</h3>
          <h4>HTML, CSS, Javascript, Vue JS, Node JS</h4>
          <p class="smallText">Responsive, simple and flexible web design using the lastest libraries and </p>
        </div>
        <img src="../assets/webDev.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
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
    margin-top: 15vh
  .item
    height: 50vh
    .text
      width: 55%
      display: inline-block
      h3
        font-weight: 400
        font-size: 3.5vh
        line-height: 0
      h4
        font-weight: 300
        font-size: 3vh
      p
        font-weight: 200
        font-size: 2.5vh
    img
      display: inline-block
      width: 40%
      margin-top: 1vh
      float: right
      vertical-align: middle
      border: 0.15vh solid
  
  #header
    display: inline-block
    margin-left: 10%
    width: 80%
    text-align: center
    border-bottom: 0.15vh solid
    border-radius: 0.15vh
    transition: font-size base.$screenFitTime
    h1
      font-size: 8vh
      margin-top: 2vh
      margin-bottom: 0
      @media #{base.$smallscreen}
        font-size: 10vw
      @media #{base.$widescreen}
        float: left
        font-size: 5vw
        line-height: 5vw
        margin-top: 2vw
    h2
      font-size: 4vh
      @media #{base.$smallscreen}
        font-size: 6vw
      @media #{base.$widescreen}
        font-size: 3vw
        line-height: 5vw
        float: right
      font-weight: 100
    
</style>