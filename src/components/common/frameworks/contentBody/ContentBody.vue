<template>
  <div id="content-body">
    <slot name="content-body"></slot>
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
}
</style>
