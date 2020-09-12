<template>
  <tab-bar>
    <tab-bar-item path="/home">
<!--      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">-->
<!--      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">-->
      <div slot="item-text" class="tabbar-content">舱位计划</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/topbar/TabBar'
  import TabBarItem from 'components/common/topbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
.tabbar-content {
  line-height: 49px;
}
</style>
