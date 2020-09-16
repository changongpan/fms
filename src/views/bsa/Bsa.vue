<template>
  <div id="bsa">
    <side-bar :flight-list="flightList"></side-bar>
    <bsa-list :cargo-list="cargoList"></bsa-list>
  </div>
</template>

<script>
  import SideBar from "components/common/sidebar/SideBar";
  import BsaList from "views/bsa/BsaList";

  export default {
    name: "Bsa",
    components: {
      SideBar,
      BsaList
    },
    data(){
      return{
        flightList:{},
        cargoList:{}
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
