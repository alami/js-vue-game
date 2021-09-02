<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ framework.name }}</strong></p>
      <p>Версия: <strong>{{ framework.version }}</strong></p>

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    const name    = ref('VueJS')
    const version = ref('3')

    const framework = ref({name:'VueJS', version: 3})

    function changeInfo() {
      framework.value.name = 'Vue JS!'
      framework.value.version = 4
    }

    return {
      framework,
      changeInfo,
    }
  },
}
</script>