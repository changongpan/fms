<template>
  <div id="app">
    <site-top-bar/>
    <nav-top-bar/>
    <router-view/>
  </div>
</template>

<script>
  import SiteTopBar from "components/content/siteTopBar/SiteTopBar";
  import NavTopBar from "components/content/navTopBar/NavTopBar";

  export default {
    name: 'app',
    components: {
      NavTopBar,
      SiteTopBar
    }
  }
</script>

<style>
  /*@import "assets/css/base.css";*/
</style>
