<template>
  <div id="main-view">
    <top-status-bar></top-status-bar>
    <content-view>
      <login slot="content-view" v-if="!isLogged" @isLogin="login"></login>
      <div class="slot-column" slot="content-view" v-if="isLogged">
        <content-header>
          <div id="logo_img"><a href="http://www.handa-group.com" target="window"><img id="logo"
            src="../assets/img/Logo_HDI.png"/></a></div>
          <nav-bar class="slot-row">
            <nav-bar-item><div slot="item-text">首页</div></nav-bar-item>
            <nav-bar-item><div slot="item-text">询价</div></nav-bar-item>
            <nav-bar-item><div slot="item-text">订单</div></nav-bar-item>
            <nav-bar-item><div slot="item-text">航线</div></nav-bar-item>
            <nav-bar-item><div slot="item-text">操作</div></nav-bar-item>
            <nav-bar-item><div slot="item-text">账务</div></nav-bar-item>
            <nav-bar-item><div slot="item-text">合作伙伴</div></nav-bar-item>
            <nav-bar-item><div slot="item-text">我的公司</div></nav-bar-item>
            <nav-bar-item><div slot="item-text">工作指南</div></nav-bar-item>
          </nav-bar>
        </content-header>
        <content-body>
          <div slot="content-body">22</div>

        </content-body>
        <content-footer>
          <div slot="content-footer">33</div>
        </content-footer>
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
  import NavBar from "components/common/navbar/NavBar";
  import NavBarItem from "components/common/navbar/NavBarItem";

  export default {
    name: "MainView",
    data() {
      return {
        isLogged: false
      }
    },
    components: {
      TopStatusBar,
      ContentView,
      ContentHeader,
      ContentBody,
      ContentFooter,
      Login,
      NavBar,
      NavBarItem
    },
    methods: {
      login() {
        this.isLogged = true
      }
    }
  }
</script>

<style scoped>
  #main-view {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #logo {
    width: 140px;
  }
</style>
