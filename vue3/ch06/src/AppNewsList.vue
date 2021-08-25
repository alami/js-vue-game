<template>
  <hr />
  <ul>
    <li v-for="item in news">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  props: ['news'],
}
</script>

<style scoped>

</style>