<template>
  <div class="logoText">
    <img src="../assets/logo_256.png" alt="Manel Navola Logo" width="64" height="64">
    <p>Manel Navola</p>
  </div>
</template>

<script>
  export default {
    name: 'LogoText'
  }
</script>

<style>
  .logoText img {
    float: left;
    position: absolute;
    top: 5px;
  }
  .logoText p {
    margin-left: 70px;
    font-size: 25px;
    font-family: Arial;
    color: white;
  }
</style>