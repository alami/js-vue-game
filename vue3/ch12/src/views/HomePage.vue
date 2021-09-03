<template>
  <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="danger"
      @click="close"
  ></app-alert>
  <div class="container with-nav ">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>

      <div class="form-control">
        <input type="text" v-model="textInput">
      </div>

      <button class="btn" @click="changeInfo">Изменить</button>
      <button class="btn danger" @click="toggle">{{ alert?'Закрыть':'Показать' }} сообщение</button>
    </div>
    <framework-info @change-version="changeVersion" />
  </div>
</template>

<script>
import {provide, reactive, ref, watch} from "vue";
import FrameworkInfo from "../FrameworkInfo";
import AppAlert from "../AppAlert";

export default {
  setup() {
    const name    = ref('VueJS')
    const version = ref('3')
    const textInput = ref('')
    const alert = ref(false)

    const toggle = () => alert.value = !alert.value
    const close = () => alert.value = false

    const framework = reactive({name:'VueJS', version: 3})

    function changeInfo() {
      name.value = 'Vue JS!'
      version.value = 4
      console.log(textInput.value)
    }

    watch(textInput, (newVal,oldVal)=> {
      console.log(newVal)
    })

    function changeVersion(num) {
      version.value = num
    }
    provide('name', name)
    provide('version', version)

    return {
      changeInfo,
      textInput,
      changeVersion,
      alert, toggle, close,
    }
  },
  components: {FrameworkInfo, AppAlert},
}
</script>

<style scoped>

</style>