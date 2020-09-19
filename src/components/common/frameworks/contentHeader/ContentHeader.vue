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
  flex: 0;
  display: flex;
}
</style>
