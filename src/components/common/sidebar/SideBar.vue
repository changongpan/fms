<template>
  <div id="side-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
#side-bar{
  display: flex;
  background-color: #333333;
  color: b0b0b0;
  width: 49px;
  height: 800px;

  position: fixed;
  left: 0;
  top: 49px;

  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}
</style>
