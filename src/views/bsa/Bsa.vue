<template>
  <div id="bsa">
    <bsa-side-bar :flight-list="flightList"></bsa-side-bar>
    <bsa-content :cargo-list="cargoList"></bsa-content>
  </div>
</template>

<script>
  import BsaSideBar from "views/bsa/BsaSideBar";
  import BsaContent from "views/bsa/BsaContent";

  export default {
    name: "Bsa",
    components: {
      BsaSideBar,
      BsaContent
    },
    data(){
      return{
        flightList:['DXB','MST','FRA','LAX'],
        cargoList:[]
      }
    }
  }
</script>

<style scoped>
  #bsa {
    flex: 1;
    text-align: center;

    display: flex;
  }
</style>
