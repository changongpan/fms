<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="top-bar-item" @click="itemClick">
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
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
  .top-bar-item {
    flex: 1;
    text-align: center;
    background-color: white;
    line-height: 49px;
  }
</style>
