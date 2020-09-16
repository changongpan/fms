<template>
  <div id="nav-top-bar">
    <top-bar >
      <div id="logo">
        <a href="http://www.handa-group.com" target="view_window"><img src="~assets/img/Logo_HDI.png" alt="瀚达国际" /></a>
      </div>
      <top-bar-item path="/bsa">
        <div slot="item-text" class="topbar-content">舱位计划</div>
      </top-bar-item>
    </top-bar>
  </div>

</template>

<script>
  import TopBar from "components/common/topbar/TopBar";
  import TopBarItem from "components/common/topbar/TopBarItem";

  export default {
    name: "NavTopBar",
    components: {
      TopBar,
      TopBarItem
    }
  }
</script>

<style scoped>
  #nav-top-bar{
    margin-top: 16px;
    margin-bottom: 10px;
    font-size: 18px;
    width: 1200px;
    height: 49px;
    align-self: center;

    display: flex;
    flex-direction: row;
  }
  #logo{
    width: 180px;
    text-align: left;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

</style>
