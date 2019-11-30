<template>
  <div class="sidebar">
    <loading ref="loadingComponent"/>
    <transition-group name="sidebarList">
      <li v-for="rl in routerLinks" :key="rl.name">
        <router-link :to="rl.link">{{ rl.name }}</router-link>
      </li>
    </transition-group>
  </div>
</template>

<script>
  import Loading from '../components/Loading.vue'
  
  export default {
    name: 'Sidebar',
    components: {
      Loading
    },
    data () {
      return {
        routerLinks: [],
        currentLink: '/',
        addRouterLinks: [
          { link: "/", name: "Home" },
          { link: "/songs", name: "Official Songs" },
          { link: "/links", name: "Media Links" }]
      }
    },
    created () {
      var vm = this;
      function checkLoaded() {
        var hl = true;
        for (var key in window.components) {
          if (!window.components.hasOwnProperty(key) || window.components[key] == null) {           
            hl = false;
            break;
          }
        }
        if (hl) {
          for (let i=0; i < vm.addRouterLinks.length; i++) {
            setTimeout(() => {
              vm.routerLinks.push(vm.addRouterLinks[i])
            }, i*150)
          }
        } else {
          setTimeout(() => {
            checkLoaded()
          }, 10)
        }
      }
      setTimeout(() => {
        checkLoaded()
      }, 10)
    },
    watch: {
      $route(from, to) {
        this.currentLink = to.path
      }
    }
  }
</script>

<style>
  .sidebarList-enter-active {
    animation: sidebarListEnter 0.2s ease-in;
  }
  @keyframes sidebarListEnter {
    0% {
      opacity: 0;
      transform: translate(-120px, 0)
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0)
    }
  }
  .sidebar {
    top: 136px;
    width: 240px;
    height: 100%;
    position: fixed;
    z-index: 999999;
  }
  .sidebar li {
    list-style-type: none;
  }
  .sidebar a {
    box-shadow: inset 0px 34px 0px -15px #172d1c;
    background-color: #19211f;
    border: 1px solid #161f15;
    display: inline-block;
    cursor: pointer;
    color: #afafbf;
    font-family: "Montserrat";
    font-size: 18px;
    padding: 9px 16px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #1a2a1d;
    display: block;
    margin-right: 44px;
    transition: all 0.15s;
  }
  .sidebar a:hover {
    box-shadow: inset 0px 34px 0px -15px #223b2a;
    background-color: #203828;
    padding-left: 24px;
    margin-right: 28px;
    color: #ffffff;
    transition: all 0.15s;
  }
  .sidebar a:active {
    position: relative;
    transform: skewY(-1deg);
    transition: all 0.15s;
  }
  
  .sidebar a.router-link-exact-active {
    box-shadow: inset 0px 34px 0px -15px #174d1c;
    background-color: #19411f;
    border: 1px solid #163f15;
    color: #ffffff;
    font-weight: bold;
  }
</style>
