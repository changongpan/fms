<template>
  <div id="app">
    <nav-top-bar/>
    <router-view/>
  </div>
</template>

<script>
  import NavTopBar from "components/content/navTopBar/NavTopBar";

  export default {
    name: 'app',
    components: {
      NavTopBar
    }
  }
</script>

<style>
  /*@import "assets/css/base.css";*/
  #app{
    text-align: center;
  }
</style>
