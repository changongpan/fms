<template>
  <div id="app">
    <div id="site-login" v-if="!isLogin">
      <login @isLogin="login"></login>
    </div>
    <div id="site-main-view" v-if="isLogin">
      <div id="site-header-view">
        <site-top-bar/>
        <nav-top-bar/>
      </div>
      <div id="site-body-view">
        <router-view/>
      </div>
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
        isLogin:false
      }
    },
    components: {
      Login,
      NavTopBar,
      SiteTopBar,
    },
    methods: {
      login(){
        this.isLogin=true
      }
    }
  }
</script>

<style>
  /*@import "assets/css/base.css";*/
  @import "assets/css/hdibase.css";
  #site-main-view{
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
  }
  #site-header-view{
    display: flex;
    flex-direction: column;

    flex: 0;
  }
  #site-body-view{
    display: flex;
    flex-direction: row;

    flex:1;
    width: 1200px;
    align-self: center;
  }
  #site-login{
    position: fixed;
    left: 0;
    right: 0;
    bottom:50vh;
  }
</style>
