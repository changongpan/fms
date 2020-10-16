<template>
  <div id="content-view">
    <slot></slot>
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
    width: 88%;
    align-self: center;

    display: flex;
    flex-direction: column;
  }
</style>
