<template>
  <div class="container with-nav ">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>

      <div class="form-control">
        <input type="text" v-model="textInput">
      </div>

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
    <framework-info @change-version="changeVersion" />
  </div>
</template>

<script>
import {provide, reactive, ref, watch} from "vue";
import FrameworkInfo from "../FrameworkInfo";

export default {
  setup() {
    const name    = ref('VueJS')
    const version = ref('3')
    const textInput = ref('')

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
    }
  },
  components: {FrameworkInfo},
}
</script>

<style scoped>

</style>