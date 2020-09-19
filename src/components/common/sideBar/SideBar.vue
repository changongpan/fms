<template>
<div class="side-bar">
<slot name="side-bar-items"></slot>
</div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
.side-bar{
  flex: 0;
  width: 140px;

  display: flex;
  flex-direction: column;
}
</style>
