<template>
<div class="current-flight">
  <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
    新增航班
  </el-button>

  <el-drawer
    size=550px
    :visible.sync="drawer"
    :direction="direction">
    <el-container>
      <el-header><h2>新增航班</h2></el-header>
      <el-main><add-flight></add-flight></el-main>
    </el-container>
  </el-drawer>

</div>
</template>

<script>
  import AddFlight from "./AddFlight";

    export default {
        name: "CurrentFlight",
      components:{
        AddFlight
      },
        data() {
        return {
          drawer: false,
          direction: 'ltr',
        };
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
