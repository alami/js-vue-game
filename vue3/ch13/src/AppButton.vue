<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['action'],
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'danger', 'primary'].includes(value)
      }
    }
  },
  methods: {
    btnLog() {
      console.log('Button Log')}
  }
}
</script>

<style scoped>

</style>
