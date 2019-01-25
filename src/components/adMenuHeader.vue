<template>
<div>
  <div class="menu-header">
    <h2><slot></slot></h2>
    <slot name="control"></slot>
  </div>
  <hr>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
