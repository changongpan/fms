<template>
  <div id="bsa-container">
    <div id="add-flight" v-if="cargoList.length==0">
      <button>新增航班</button>
    </div>
    <AddFlight></AddFlight>
  </div>
</template>

<script>
  import AddFlight from "./AddFlight";

  export default {
    name: "BsaContainer",
    components: {
      AddFlight
    },
    props: {
      cargoList: ''
    },
    created() {
      console.log(this.cargoList);
    }
  }
</script>

<style scoped>
  #bsa-list {
    flex: 1;
    background-color: #e9eef8;
    margin-left: 10px;
  }
</style>
