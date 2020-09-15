<template>
  <div id="site-top-bar">
  </div>
</template>

<script>
  import TopBar from "components/common/topbar/TopBar";

  export default {
    name: "SiteTopBar",
    components: {
      TopBar
    }
  }
</script>

<style scoped>
#site-top-bar{
  color: #b0b0a4;
  background-color: #333333;
  display: flex;
  height: 38px;
  text-align: center;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}


</style>
