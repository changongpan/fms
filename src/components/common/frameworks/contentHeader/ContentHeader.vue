<template>
<div id="content-header">
  <slot></slot>
</div>
</template>

<script>
    export default {
        name: "contentHeader"
    }
</script>

<style scoped>
#content-header{
  margin-top: 10px;
  margin-bottom: 6px;
  flex: 0;
  display: flex;
}
</style>
