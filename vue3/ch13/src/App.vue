<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>
  <app-block>
    <p>Это самый важный текст для нового блока</p>
    <template v-slot:header>
      <h3>Это заголовок</h3>
    </template>
    <template v-slot:footer>
      <p>Это Footer</p>
    </template>
  </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock'
export default {
components: {AppBlock}
}
</script>

<style>

</style>
