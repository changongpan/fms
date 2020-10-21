<template>
  <div id="add-route">
    <h2 style="margin-left: 6%">新增航线</h2>
    <el-form :model="newRoute" ref="newRoute" label-width="0px" class="demo-dynamic"
             size="mini" style="border:1px solid darkgray;padding: 18px 0 0 6%;margin: 0 6% 0 6%">
      <el-form-item :disabled="true">
        <span>航司</span>
        <span>起运港</span>
        <span>目的港</span>
        <span>航期</span>
        <span>起运时间</span>
        <span>到港时间</span>
        <span>运价</span>
        <span>有效期</span>
        <el-button @click="addRoute()" type="primary" plain style="width: 10%;margin-left: 2%">增加航线</el-button>
      </el-form-item>
      <el-form-item v-for="(value,index) in newRoute.newRoutes">
        <el-input v-model="value.airline"></el-input>
        <el-input v-model="value.POL"></el-input>
        <el-input v-model="value.POD"></el-input>
        <el-input v-model="value.schedule"></el-input>
        <el-input v-model="value.ETD"></el-input>
        <el-input v-model="value.ETA"></el-input>
        <el-input v-model="value.rate"></el-input>
        <el-input v-model="value.validDate"></el-input>
        <el-button @click.prevent="removeRoute(value)"
                   type="danger" plain style="width: 10%;margin-left: 2%">删除
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "AddRoute",
    data() {
      return {
        newRoute: {
          newRoutes: [{
            airline: '',
            POL: '',
            POD: '',
            schedule: [],
            ETD: '',
            ETA: '',
            rate: 0,
            validDate: ''
          }]
        }
      }
    },
    methods: {
      addRoute() {
        this.newRoute.newRoutes.push({});
      },
      removeRoute(item) {
        console.log(item);
        console.log(this.newRoute.newRoutes.indexOf(item));
        let index = this.newRoute.newRoutes.indexOf(item)
        if (index !== -1) {
          this.newRoute.newRoutes.splice(index, 1)
        }
      }
    }
  }
</script>

<style scoped>
  .el-form {
    height: 800px;
    overflow: auto;
  }

  .el-input {
    width: 10%;
  }

  span {
    display: inline-block;
    width: 10%;
    text-align: center;
  }
</style>
