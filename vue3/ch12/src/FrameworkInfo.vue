<template>
<div class="card">
  <p>Название: <strong>{{ name }}</strong></p>
  <p>Версия: <strong>{{ version }} ({{doubleVersion}}) </strong></p>
</div>
</template>

<script>
export default {
  props: ['name', 'version',],
  computed: {
    doubleVersion() {
      return this.version*2
    }
  }
}
</script>

<style scoped>

</style>