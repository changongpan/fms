<template>
  <top-bar>
    <top-bar-item path="/bsa">
      <div slot="item-text" class="topbar-content">舱位计划</div>
    </top-bar-item>
  </top-bar>
</template>

<script>
  import TopBar from "../../common/topbar/TopBar";
  import TopBarItem from "../../common/topbar/TopBarItem";

  export default {
    name: "NavTopBar",
    components: {
      TopBar,
      TopBarItem
    }
  }
</script>

<style scoped>

</style>
