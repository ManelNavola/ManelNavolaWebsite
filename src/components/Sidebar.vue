<template>
  <div class="sidebar">
    <router-link to="/">Home</router-link>
    <router-link to="/spotify">Spotify Songs</router-link>
    <router-link to="/links">Links</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar'
  }
</script>

<style>
  .sidebar {
    top: 136px;
    width: 240px;
    height: 100%;
    position: fixed;
  }
  .sidebar a {
    box-shadow: inset 0px 34px 0px -15px #172d1c;
    background-color: #19211f;
    border: 1px solid #161f15;
    display: inline-block;
    cursor: pointer;
    color: #afafbf;
    font-family: Arial;
    font-size: 20px;
    padding: 9px 23px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #1a2a1d;
    display: block;
    margin-right: 10px;
    transition: all 0.15s;
  }
  .sidebar a:hover {
    box-shadow: inset 0px 34px 0px -15px #223b2a;
    background-color: #203828;
    padding-left: 35px;
    margin-right: 0px;
    color: #ffffff;
    transition: all 0.15s;
  }
  .sidebar a:active {
    position: relative;
    transform: skewY(-1deg);
    transition: all 0.15s;
  }
</style>
