<template>
<div class="card">
  <slot name="header">No text</slot>
  <slot>No text</slot>
  <div v-if="$slots.footer">
    <hr />
    <slot name="footer">No text</slot>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots)
  }
}
</script>

<style scoped>

</style>