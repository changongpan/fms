<template>
  <div id="bsa">
    <side-bar :flight-list="flightList"></side-bar>
    <bsa-container :cargo-list="cargoList"></bsa-container>
  </div>
</template>

<script>
  import SideBar from "components/common/sidebar/SideBar";
  import BsaContainer from "views/bsa/BasContainer";

  export default {
    name: "Bsa",
    components: {
      SideBar,
      BsaContainer
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
