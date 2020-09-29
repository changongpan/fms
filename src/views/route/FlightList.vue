<template>
<div class="flight-list">
  <slot></slot>
</div>
</template>

<script>
    export default {
        name: "FlightList"
    }
</script>

<style scoped>
.flight-list{
  flex:0;
  display: flex;
  flex-direction: column;
  background-color: #e4d5fc;
}
</style>
