<template>
<div class="modal-backdrop" @click="$emit('close')"></div>
<div class="modal">
  <h3>This modal title</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, tempora!</p>
</div>
</template>

<script>
export default {
  emits: ['close'],
}
</script>

<style scoped>

</style>