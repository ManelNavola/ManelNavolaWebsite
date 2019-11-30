<template>
    <div class="home">
      <h1>Manel Navola</h1>
      <h2>Programmer & Music Producer</h2>
      <br><br>
      <list></list>
      <div class="panel left">
        <h3>Web Development</h3>
        <p>HTML, CSS, Javascript, Vue JS, Node JS</p>
        <img src="../assets/webDev.jpg"/>
      </div>
      <div class="panel right">
        <h3>Music Production</h3>
        <p>FL Studio</p>
        <img src="../assets/webDev.jpg"/>
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

<style>
  .panel {
    border-style: solid;
    border-width: 1px;
    border-color: white;
    border-radius: 5px;
    padding: 10px;
    display: block;
  }
  .panel.left {
    float: left;
    margin-bottom: 256px;
  }
  .panel.right {
    float: right;
    margin-top: 256px;
  }
  .home h1 {
    text-align: center;
    padding-right: 172px;
    font-size: 3.5vw;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 0px;
  }
  .home h2 {
    font-size: 1.5vw;
    padding-right: 172px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
  }
  .home h3 {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    margin-top: 0px;
  }
  .home p {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 200;
  }
  .home {
    margin-top: 96px;
  }
</style>