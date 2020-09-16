<template>
  <div id="top-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TopBar"
  }
</script>

<style scoped>
  #top-bar {
    flex:1;
    display: flex;
    height: 49px;
    text-align: center;
  }
</style>
