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
    background-color: #333333;
    height: 49px;
    text-align: center;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
</style>
