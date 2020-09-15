<template>
  <div id="app">
    <div id="login" v-if="!isLogin">
      <login :is-login="isLogin"></login>
    </div>
    <div id="site-body" v-if="isLogin">
      <site-top-bar/>
      <nav-top-bar/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Login from "components/content/login/Login";
  import SiteTopBar from "components/content/siteTopBar/SiteTopBar";
  import NavTopBar from "components/content/navTopBar/NavTopBar";

  export default {
    name: 'app',
    data: function(){
      return {
        isLogin:true
      }
    },
    components: {
      Login,
      NavTopBar,
      SiteTopBar
    }
  }
</script>

<style>
  /*@import "assets/css/base.css";*/
  @import "assets/css/hdibase.css";
  #site-body{
    width: 1200px;
  }
</style>
