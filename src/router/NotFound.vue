<template>
    <div class="notFound">
      <h1>Error 404</h1>
      <h2>Page could not be found</h2>
      <br><br>
      <h1>:(</h1>
    </div>
</template>

<script>
  export default {
    name: 'NotFound',
    metaInfo: {
      title: '404'
    }
  }
</script>

<style>
  .notFound h1 {
    text-align: center;
    padding-right: 256px;
    font-size: 64px;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 0px;
  }
  .notFound h2 {
    font-size: 24px;
    padding-right: 256px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
  }
  .notFound * {
    color: white;
  }
  .notFound {
    margin-top: 96px;
  }
</style>