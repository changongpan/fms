<template>
  <div id="main-view">
    <el-container>
      <el-header height="38px" style="background-color: #231915">
        <top-status :username="username"></top-status>
      </el-header>
      <el-main style="width: 88%;margin:auto;display: flex;flex-direction: column">
        <el-header v-if="isLogged">
          <div id="logo_img"><a href="http://www.handa-group.com" target="window">
            <img id="logo" src="~assets/img/Logo_HDI.png"/></a></div>
          <nav-bar>
            <nav-bar-item path="/home"><span slot="item-text">首页</span></nav-bar-item>
            <nav-bar-item path="/route"><span slot="item-text">航线</span></nav-bar-item>
            <nav-bar-item path="/inquiry"><span slot="item-text">询价</span></nav-bar-item>
            <nav-bar-item path="/order"><span slot="item-text">订单</span></nav-bar-item>
            <nav-bar-item path="/opt"><span slot="item-text">操作</span></nav-bar-item>
            <nav-bar-item path="/finance"><span slot="item-text">财务</span></nav-bar-item>
            <nav-bar-item path="/partner"><span slot="item-text">合作伙伴</span></nav-bar-item>
            <nav-bar-item path="/administration"><span slot="item-text">行政</span></nav-bar-item>
            <nav-bar-item path="/company"><span slot="item-text">我的公司</span></nav-bar-item>
            <nav-bar-item path="/guide"><span slot="item-text">工作指南</span></nav-bar-item>
          </nav-bar>
        </el-header>
        <el-main style="background-color: azure;flex: 1">
          <router-view @isLogin="login()"></router-view>
        </el-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Login from "components/content/login/Login";
  import NavBar from "components/common/navbar/NavBar";
  import NavBarItem from "components/common/navbar/NavBarItem";
  import TopStatus from "components/content/login/TopStatus";

  export default {
    name: "MainView",
    data() {
      return {
        isLogged: false,
        username:'请登录'
      }
    },
    methods: {
      login() {
        this.isLogged = true
        this.username = this.$cookies.get('username')
        this.$router.replace('/home')
      }
    },
    components: {
      NavBar,
      NavBarItem,
      Login,
      TopStatus,
    }
  }
</script>

<style scoped>
  #main-view {
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 1000px;
  }
  #logo {
    width: 140px;
  }
  /deep/.el-header{
    display: flex;
  }
  /deep/.el-menu-item:hover{
    background-color: #e9f5fd;
    color: #5599FF;
  }
</style>
