<template>
  <div id="route">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="航班舱位" name="FlightList">
        <el-drawer size="60%"
          :visible.sync="drawerFlight"
                   :with-header="false"
          direction="ltr">
          <add-flight></add-flight>
        </el-drawer>
        <el-button @click="drawerFlight = true" type="primary" style="margin-left: 16px;">
          新增航班
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="航线运价" name="RouteList">
        <el-drawer size="80%"
                   :visible.sync="drawerRoute"
                   :with-header="false"
                   direction="ltr">
          <add-route></add-route>
        </el-drawer>
        <el-button @click="drawerRoute = true" type="primary" style="margin-left: 16px;">
          新增航线
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="运单管理" name="AWBList">
        <el-drawer size="60%"
                   :visible.sync="drawerAWB"
                   :with-header="false"
                   direction="ltr">
          <AddAWB></AddAWB>
        </el-drawer>
        <el-button @click="drawerAWB = true" type="primary" style="margin-left: 16px;">
          新增运单
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="货物安排" name="CargoList">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import FlightList from "./flightList/FlightList";
import AddFlight from "./flightList/AddFlight";
import AddAWB from "./waybillList/AddAWB";
import AddRoute from "./routeList/AddRoute";
  export default {
    name: "Route",
    data() {
      return {
        activeName: 'first',
        drawerFlight:false,
        drawerAWB:false,
        drawerRoute:false
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      FlightList,
      AddFlight,
      AddAWB,
      AddRoute
    }
  }
</script>

<style scoped>
  #route {
    flex:1;
    display: flex;
  }
</style>
