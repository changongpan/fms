<template>
<div id="content-view">
<slot name="content-view"></slot>
</div>
</template>

<script>
    export default {
        name: "ContentView"
    }
</script>

<style scoped>
#content-view{
  flex:1;
  background-color: #e2d5f3;

  display: flex;
}
</style>
