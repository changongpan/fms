<template>
  <div id="content-body">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "contentBody"
    }
</script>

<style scoped>
#content-body{
  flex: 1;
  display: flex;
}
</style>
