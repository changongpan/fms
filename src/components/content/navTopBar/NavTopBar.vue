<template>
  <div id="nav-top-bar">
    <top-bar >
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
    font-size: 18px;
    display: flex;
    height: 49px;
    text-align: center;

    position: fixed;
    left: 0;
    right: 0;
    top: 38px;
  }
  .topbar-content{
    background-color: #f5f5f5;
  }

</style>
