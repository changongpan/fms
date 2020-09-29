<template>
  <div id="route">
    <flight-list>
      <flight-list-item></flight-list-item>
    </flight-list>
    <route-content></route-content>
  </div>
</template>

<script>
  import FlightList from "./FlightList";
  import FlightListItem from "./FlightListItem";
  import RouteContent from "./RouteContent";

  export default {
    name: "Route",
    components: {
      FlightList,
      FlightListItem,
      RouteContent
    }
  }
</script>

<style scoped>
  #route {
    flex:1;
    display: flex;
  }
</style>
