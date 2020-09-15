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
    display: flex;
    height: 49px;
    text-align: center;

    position: fixed;
    left: 0;
    right: 0;
  }
</style>
