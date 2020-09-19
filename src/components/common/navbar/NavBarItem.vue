<template>
  <div class="nav-bar-item" @click="itemClick">
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NavBarItem",
      data(){
          return{
            activeStyle:''
          }
      }
    }
</script>

<style scoped>
.nav-bar-item{
  flex: 1;
  height: 50px;
  line-height: 50px;
  margin-top: 10px;
}
</style>
