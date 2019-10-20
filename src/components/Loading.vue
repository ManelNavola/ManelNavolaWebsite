<template>
  <div class="loading">
    <transition name="loadingtrans">
      <div v-if="display">
        <img class="real" src="../assets/loading.png" width="96px" height="96px">
        <img class="shadow" src="../assets/loading_shadow.png" width="78px">
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    data () {
      return {
        display: false,
        lastId: null
      }
    },
    methods: {
      show(v) {
        if (this.lastId !== null) {
          clearTimeout(this.lastId);
        }
        this.lastId = setTimeout(() => {
          this.display = true;
        }, v);
      },
      hide() {
        if (this.lastId !== null) {
          clearTimeout(this.lastId);
        }
      }
    },
    created () {
      window.components.loading = this
    },
    watch: {
      $route() {
        this.display = false;
      }
    }
  }
</script>

<style>
  .loadingtrans-enter-active {
    animation: lt-out 2s ease-in;
  }
  .loadingtrans-leave-active {
    animation: lt-in 0.1s ease-in;
  }
  @keyframes lt-out {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes lt-in {
    0% {
      position: fixed;
      top: 0px;
      left: 0px;
      transform: translate(0px, 0px)
    }
    100% {
      position: fixed;
      top: 0px;
      left: 0px;
      transform: translate(-320px, 0px)
    }
  }
  .real {
    animation: spin 4s linear infinite;
    position: fixed;
    top: 16px;
    left: 16px;
  }
  .shadow {
    animation: spin2 8s linear infinite;
    position: fixed;
    z-index: -20;
    top: 24px;
    left: 24px;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin2 {
    0% {
      transform: rotate(0deg) scale(1, 1);
    }
    50% {
      transform: rotate(360deg) scale(0.8, 0.8);
    }
    100% {
      transform: rotate(720deg) scale(1, 1);
    }
  }
</style>