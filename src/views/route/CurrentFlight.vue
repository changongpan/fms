<template>
<div class="current-flight">

  <el-table
    highlight-current-row
    height=500px
    :data="currentFlights"
    style="width: 100%">
    <el-table-column type="index">
    </el-table-column>
    <el-table-column type="expand">
      <arranged-ULD></arranged-ULD>
    </el-table-column>
    <el-table-column
      label="起运港"
      prop="flight_pol"
      >
    </el-table-column>
    <el-table-column
      label="目的港"
      prop="flight_pod"
      >
    </el-table-column>
    <el-table-column
      label="航班号"
      prop="flight_no"
      >
    </el-table-column>
    <el-table-column
      label="航班日期"
      prop="flight_date"
      >
      <template v-slot="fDate">
        {{dateFormat(fDate.row.flight_date)}}
      </template>
    </el-table-column>
    <el-table-column
      label="机型"
      prop="flight_type"
      >
    </el-table-column>
    <el-table-column
      label="航司"
      prop="flight_airline"
      >
    </el-table-column>
    <el-table-column
      label="最大载量"
      prop="flight_maxload"
      >
    </el-table-column>
  </el-table>

  <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
    新增航班
  </el-button>

  <button @click="testbtn">test</button>

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
  import ArrangedULD from "./ArrangedULD";

  import {dataGet} from "network/request";

    export default {
        name: "CurrentFlight",
      components:{
        AddFlight,
        ArrangedULD
      },
        data() {
        return {
          drawer: false,
          direction: 'ltr',
          currentFlights:[]
        };
      },
      methods: {
          testbtn(){
            dataGet(
                'routemanage/getflight',
              ).then(res => {
                this.currentFlights = res
              }).catch(err => {
              })
          },
        dateFormat(originDate){
          let time = new Date(originDate * 1000);
          let year = time.getFullYear();
          let month = time.getMonth() + 1;
          let date = time.getDate();
          let hours = time.getHours();
          let minutes = time.getMinutes();
          let seconds = time.getSeconds();
          // return (year + '-' + this.add0(month) + '-' + this.add0(date) + ' ' + this.add0(hours) + ':' + this.add0(minutes) + ':' + this.add0(seconds));
          return (year + '/' + this.add0(month) + '/' + this.add0(date));
        },
        add0(m) {
          return m < 10 ? '0' + m : m
        }
      }
    }
</script>

<style scoped>

</style>
