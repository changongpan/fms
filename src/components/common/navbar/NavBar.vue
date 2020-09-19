<template>
  <div class="nav-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nav-bar{
  flex: 1;
  display: flex;
}
</style>
