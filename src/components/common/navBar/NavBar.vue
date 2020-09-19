<template>
  <div class="nav-bar">
    <slot name="nav-bar-items"></slot>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nav-bar{
  flex:1;
  display: flex;
}
</style>
