<template>
<div class="card">
  <h1>Переиспользование</h1>
  <button class="btn primary">Показать сообщение</button>
  <button class="btn" @click="navigate">Перейти на главную</button>
</div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
export default {
  setup(){
    const router = useRouter()
    const route = useRoute()
    const navigate = () => {
      router.push('/')
    }
    return {
      navigate,
    }
  }
}
</script>

<style scoped>

</style>