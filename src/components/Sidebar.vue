<template>
  <div class="sidebar">
    <logoText/>
    <router-link to="/">Home</router-link>
    <router-link to="/profile">My Profile</router-link>
  </div>
</template>

<script>
  import LogoText from './LogoText.vue'
  export default {
    name: 'Sidebar',
    components: {
      LogoText
    }
  }
</script>

<style>
  .sidebar {
    background-color: #e7afad;
    width: 240px;
    height: 100%;
    position: fixed;
  }
  .sidebar a {
    box-shadow: inset 0px 34px 0px -15px #b54b3a;
    background-color: #a73f2d;
    border: 1px solid #241d13;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 20px;
    padding: 9px 23px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #7a2a1d;
    display: block;
  }
  .sidebar a:hover {
    background-color: #b34332;
  }
  .sidebar a:active {
    position: relative;
    top: 1px;
  }
</style>
