<template>
<div class="add-flight">
  <br><br>
  <label for="flightPOL">起运港：<input type="text" id="flightPOL" v-model="newFlight.flightPOL"></label><br>
  <label for="flightPOD">目的港：<input type="text" id="flightPOD" v-model="newFlight.flightPOD"></label><br>
  <label for="flightNo">航班号：<input type="text" id="flightNo" v-model="newFlight.flightNo"></label><br>
  <label for="flightDate">航班日期：<input type="text" id="flightDate" v-model="newFlight.flightDate"></label><br>
  <label for="flightType">航班型号：<input type="text" id="flightType" v-model="newFlight.flightType"></label><br>
  <label for="flightAirline">航司：<input type="text" id="flightAirline" v-model="newFlight.flightAirline"></label><br>
  <label for="flightMaxLoad">最大载量：<input type="text" id="flightMaxLoad" v-model="newFlight.flightMaxLoad"></label><br>
  <button @click="addFlight">提交</button>
</div>
</template>

<script>
  import {dataGet} from "network/request";

  export default {
        name: "AddFlight",
      data(){
          return{
            newFlight:{
              flightPOL:'',
              flightPOD:'',
              flightNo:'',
              flightDate:'',
              flightType:'',
              flightAirline:'',
              flightMaxLoad:''
            }
          }
      },
      methods:{
          addFlight(){
            dataGet(
              'home/addflight',
              this.newFlight
            ).then(res => {
              if (res.data == 'success') {

              } else {
              }
            }).catch(err => {
            })
          }
      }
    }
</script>

<style scoped>

</style>
