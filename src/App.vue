<template>
  <div id="app" class="wrapper">
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
  @import "assets/css/base.css";
</style>
