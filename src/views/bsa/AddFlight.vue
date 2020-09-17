<template>
  <div id="add-flight">
    <p><span>目的港:</span><input type="text" v-model="newFlight.flightDestination" name="flight-destination" placeholder="请填写三字码"></p>
    <p><span>航班号:</span><input type="text" v-model="newFlight.flightNo" name="flight-no" placeholder="请填写航班号"></p>
    <p><span>航班日期:</span><input type="text" v-model="newFlight.flightDate" name="flight-date" placeholder="请填写航班日期"></p>
    <p><span>机型:</span><input type="text" v-model="newFlight.flightType" name="flight-type" placeholder="请填写飞机机型"></p>
    <p><span>最大载量:</span><input type="text" v-model="newFlight.flightMaxVolume" name="flight-max-volume" placeholder="请填写最大装载体积"></p>
    <p><span>航司:</span><input type="text" v-model="newFlight.flightAirline" name="flight-airline" placeholder="请填写航司代码"></p>
    <p><button @click="addFlight">提交</button></p>
  </div>
</template>

<script>
    export default {
        name: "AddFlight",
      data(){
          return{
            newFlight:{
              flightDestination:'',
              flightNo:'',
              flightDate:'',
              flightType:'',
              flightMaxVolume:'',
              flightAirline:'',
            }
          }
      },
      methods:{
        addFlight(){
          console.log(this.newFlight);
        }
      }
    }
</script>

<style scoped>


</style>
