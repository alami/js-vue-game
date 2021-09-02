<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{counter}}</h2>
      <button class="btn" @click="increment">++</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment(){
      this.counter++
    }
  },
  components: {TheNavbar}
}
</script>
