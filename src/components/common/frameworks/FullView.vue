<template>
  <div id="full-view">
    <slot name="top-status-bar"></slot>
    <slot name="content-view"></slot>
  </div>
</template>

<script>

  export default {
    name: "FullView",
  }
</script>

<style scoped>
  #full-view {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  #content {
    display: flex;
  }
</style>
