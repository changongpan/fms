<template>
  <div id="content-view">
    <slot name="content-view-items"></slot>
  </div>
</template>

<script>
  export default {
    name: "ContentView"
  }
</script>

<style scoped>
  #content-view {
    flex: 1;
    width: 1200px;
    align-self: center;
    background-color: #e2d5f3;

    display: flex;
    flex-direction: column;
  }
</style>
