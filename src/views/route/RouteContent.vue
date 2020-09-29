<template>
  <div class="route-content">
    <nav-bar class="route-content-nav">
      <nav-bar-item path="/route/currentflight"><span slot="item-text">当前航班</span></nav-bar-item>
      <nav-bar-item path="/route/historyflight"><span slot="item-text">历史航班</span></nav-bar-item>
      <nav-bar-item path="/route/addflight"><span slot="item-text">新增航班</span></nav-bar-item>
      <nav-bar-item path="/route/awbmanage"><span slot="item-text">运单管理</span></nav-bar-item>
      <nav-bar-item path="/route/airRate"><span slot="item-text">航线运价</span></nav-bar-item>
    </nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import NavBarItem from "../../components/common/navbar/NavBarItem";

  export default {
    name: "RouteContent",
    components: {
      NavBar,
      NavBarItem
    }
  }
</script>

<style scoped>
  .route-content{
    flex:1;
    display: flex;
    flex-direction: column;
  }
  .route-content-nav {
    flex:0;
    display: flex;
    background-color: #f3f3f1;
    padding-top: 0px;
  }
  .nav-bar-item{
    padding: 8px;
  }
</style>
