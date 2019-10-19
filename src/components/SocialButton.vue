<template>
  <div class="socialButton">
    <a :style="{
               'background-color': background_color,
               'border': '5px solid ' + border_color
               }" :href="button_link" target="_blank">
      <img :src="getImgUrl(button_image)">
      <p class="brandName">{{ button_name }}</p>
      <p class="handle">{{ button_handle }}</p>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'SocialButton',
    props: [
      'background_color', 'border_color', 'button_name', 'button_image', 'button_handle', 'button_link'
    ],
    methods: {
      getImgUrl(pic) {
        return require('../assets/' + pic)
      }
    }
  }
</script>

<style>
  .socialButton a {
    cursor: pointer;
    text-decoration: none;
    text-shadow: 1px 1px #1a2a1d;
    border-radius: 5px;
    
    display: block;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 50px;
    height: 128px;
    transition: all 0.2s;
  }
  .socialButton a:hover {
    animation: wobble 0.2s ease-in;
    transform: scale(1.05, 1.05);
  }
  @keyframes wobble {
    0% {
      transform: rotate(0deg) scale(1, 1);
    }
    20% {
      transform: rotate(1deg) scale(1.02, 1.02);
    }
    40% {
      transform: rotate(0deg) scale(1.05, 1.05);
    }
    60% {
      transform: rotate(-1deg) scale(1.05, 1.05);
    }
    100% {
      transform: rotate(0deg) scale(1.05, 1.05);
    }
  }
  .socialButton {
    width: 480px;
  }
  .socialButton img {
    position: fixed;
    width: 96px;
    margin-top: 16px;
    margin-left: 16px;
  }
  .brandName {
    position: fixed;
    margin-top: 16px;
    margin-left: 156px;
  }
  .handle {
    position: fixed;
    margin-top: 72px;
    margin-left: 156px;
    font-size: 24px;
  }
</style>