<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>
    <app-list>
      <template #default="slotProps">
        <span style="color: #c25205;">{{slotProps.iter}}</span>
      </template>
    </app-list>
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
import AppList from './AppList'
export default {
components: {AppBlock, AppList}
}
</script>

<style>

</style>
