<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} ({{doubleVersion}}) </strong></p>

      <div class="form-control">
        <input type="text" ref="textInput">
      </div>

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, isRef, isReactive, computed, watch } from 'vue'
export default {
  setup() {
    const name    = ref('VueJS')
    const version = ref('3')
    const textInput = ref(null)

    const framework = reactive({name:'VueJS', version: 3})

    function changeInfo() {
      name.value = 'Vue JS!'
      version.value = 4
      console.log(textInput.value.value)
    }

    const doubleVersion = computed(()=>version.value*2)

    watch([name, doubleVersion], (newValue, oldValue)=> {
      // console.log(oldValue, newValue)
    })

    return {
      name,
      version,
      changeInfo,
      doubleVersion,
      textInput,
    }
  },
}
</script>