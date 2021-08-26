<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и Асинхронные компоненты</h2>
      <app-button
          :color="active==='one'?'primary':''"
          @action="active='one'"
      >One</app-button>
      <app-button
          :color="active==='two'?'primary':''"
          @action="active='two'"
      >Two</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton"

export default {
  data() {
    return {
      active: 'one' //two
    }
  },
 components: {AppButton},
}
</script>

<style>

</style>
