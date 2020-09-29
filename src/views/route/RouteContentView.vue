<template>
  <div class="route-content-view">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "RouteContentView"
    }
</script>

<style scoped>
  .route-content-view{
    flex: 1;
    display: flex;
  }
</style>
