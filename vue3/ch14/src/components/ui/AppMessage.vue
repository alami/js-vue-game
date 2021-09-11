<template>
  <div :class="['alert', 'danger']">
    <pre>{{message}}</pre>
    <p class="alert-title">title</p>
    <p>message, value</p>
    <span class="alert-close">&times;</span>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup () {``
    const store = useStore()

    const message = computed(() => store.state.message)
    return {message}
  }
}
</script>

<style scoped>

</style>