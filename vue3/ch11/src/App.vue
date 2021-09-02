<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{$store.getters.counter}} ({{$store.getters.doubleCounter}})</h2>
      <button class="btn" @click="add">++</button>
      <button class="btn" @click="incrementAsync">+10 (Async)</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
export default {
  methods: {
    add(){
      this.$store.commit('increment')
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync',{delay: 1500})
    },
  },
  components: {TheNavbar}
}
</script>
