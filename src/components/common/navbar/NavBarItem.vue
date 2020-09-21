<template>
  <div class="nav-bar-item" :class="activeItem" @click="itemClick">
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name: "NavBarItem",
    props: {
      path: String
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeItem(){
         return this.isActive ? 'activeItemClass' : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .nav-bar-item {
    flex: 1;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding-top: 22px;
  }
  .nav-bar-item:hover {
    color: #5599FF;
  }
  .activeItemClass{
    color: #5599FF;
  }
  .activeItemClass span{
    padding-bottom: 2px;
    border-bottom: #5599FF solid 3px ;
  }
</style>
