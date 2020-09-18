<template>
  <div id="full-view">
    <top-status-bar></top-status-bar>
    <content-view>
      <login slot="content-view" v-if="!isLogged" @isLogin="login"></login>
      <div id="content" slot="content-view" v-if="isLogged">
        <content-header></content-header>
        <content-body></content-body>
        <content-footer></content-footer>
      </div>
    </content-view>
  </div>
</template>

<script>
  import TopStatusBar from "components/common/frameworks/TopStatusBar";
  import ContentView from "components/common/frameworks/ContentView";
  import ContentHeader from "components/common/frameworks/contentHeader/ContentHeader";
  import ContentBody from "components/common/frameworks/contentBody/ContentBody";
  import ContentFooter from "components/common/frameworks/contentFooter/ContentFooter";
  import Login from "components/content/login/Login";

  export default {
    name: "FullView",
    data() {
      return {
        isLogged: false
      }
    },
    methods:{
      login(){
        this.isLogged=true
      }
    },
    components: {
      TopStatusBar,
      ContentView,
      ContentHeader,
      ContentBody,
      ContentFooter,
      Login
    }
  }
</script>

<style scoped>
  #full-view {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #content{
    display: flex;
  }
</style>
