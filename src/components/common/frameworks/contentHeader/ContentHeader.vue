<template>
<div id="content-header">
  <slot name="content-header-left"></slot>
  <slot name="content-header-right"></slot>
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
