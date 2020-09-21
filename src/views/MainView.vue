<template>
  <div id="main-view">
    <top-status-bar></top-status-bar>
    <content-view>
      <router-view v-if="!isLogged" @isLogin="login"></router-view>
      <div class="slot-column" v-if="isLogged">
        <content-header>
          <div id="logo_img"><a href="http://www.handa-group.com" target="window"><img id="logo"
            src="~assets/img/Logo_HDI.png"/></a></div>
          <nav-bar>
            <nav-bar-item path="/home"><span slot="item-text">首页</span></nav-bar-item>
            <nav-bar-item path="/inquiry"><span slot="item-text">询价</span></nav-bar-item>
            <nav-bar-item path="/order"><span slot="item-text">订单</span></nav-bar-item>
            <nav-bar-item path="/route"><span slot="item-text">航线</span></nav-bar-item>
            <nav-bar-item path="/opt"><span slot="item-text">操作</span></nav-bar-item>
            <nav-bar-item path="/finance"><span slot="item-text">账务</span></nav-bar-item>
            <nav-bar-item path="/partner"><span slot="item-text">合作伙伴</span></nav-bar-item>
            <nav-bar-item path="/company"><span slot="item-text">我的公司</span></nav-bar-item>
            <nav-bar-item path="/guide"><span slot="item-text">工作指南</span></nav-bar-item>
          </nav-bar>
        </content-header>
        <content-body>
          <div>
            <router-view></router-view>
          </div>
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
        isLogged: false,
      }
    },
    methods: {
      login() {
        this.isLogged = true
        this.$router.replace('/home')
      }
    },
    components: {
      TopStatusBar,
      ContentView,
      ContentHeader,
      ContentBody,
      ContentFooter,
      NavBar,
      NavBarItem,
      Login,
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
