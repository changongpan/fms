<template>
  <div class="add-flight">
    <div class="block"><span class="demonstration" validate-event="true">起运港：</span>
      <el-input v-model="newFlight.flightPOL" placeholder="起运港" clearable></el-input>
    </div>
    <div class="block"><span class="demonstration">目的港：</span>
      <el-input v-model="newFlight.flightPOD" placeholder="目的港" clearable></el-input>
    </div>
    <div class="block"><span class="demonstration">航班号：</span>
      <el-input v-model="newFlight.flightNo" placeholder="航班号" clearable></el-input>
    </div>
    <div class="block"><span class="demonstration">航班型号：</span>
      <el-input v-model="newFlight.flightType" placeholder="航班型号" clearable></el-input>
    </div>
    <div class="block"><span class="demonstration">航司：</span>
      <el-input v-model="newFlight.flightAirline" placeholder="航司" clearable></el-input>
    </div>
    <div class="block"><span class="demonstration">最大载量：</span>
      <el-input v-model="newFlight.flightMaxLoad" placeholder="最大载量" clearable></el-input>
    </div>
    <div class="block">
      <span class="demonstration">航班日期：</span>
      <el-date-picker
        v-model="originDate"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="flight_input">
      <el-button type="primary" @click="addFlight">提交</el-button>
    </div>
  </div>
</template>

<script>
  import {dataPost} from "network/request";

  export default {
    name: "AddFlight",
    data() {
      return {
        newFlight: {
          flightPOL: '',
          flightPOD: '',
          flightNo: '',
          flightDate: '',
          flightType: '',
          flightAirline: '',
          flightMaxLoad: ''
        },
        originDate: ''
      }
    },
    methods: {
      addFlight() {
        this.newFlight.flightDate = Date.parse(this.originDate) / 1000;
        console.log(this.newFlight.flightDate);
        var time = new Date(this.newFlight.flightDate * 1000);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        console.log(year + '-' + add0(month) + '-' + add0(date) + ' ' + add0(hours) + ':' + add0(minutes) + ':' + add0(seconds));
        dataPost(
          'routemanage/addflight',
          this.newFlight
        ).then(res => {
          if (res.data == 'success') {
            console.log('added');
          } else {
          }
        }).catch(err => {
        })
      }
    }
  }

  function add0(m) {
    return m < 10 ? '0' + m : m
  }
</script>

<style scoped>
  .el-input{
    width: 400px;
  }
  .demonstration{
    display: inline-block;
    text-align: right;
    width: 400px;
  }
</style>
