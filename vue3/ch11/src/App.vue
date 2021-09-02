<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{upperCaseTitle}}</h1>
      <h2>Счетчик {{counter}} ({{doubleCounter}})</h2>
      <button class="btn" @click="add">++</button>
      <button class="btn" @click="incrementAsync({delay: 1500})">+10 (Async)</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import TheNavbar from './TheNavbar'
export default {
  computed: {
    ...mapGetters(['upperCaseTitle']),
    ...mapGetters('count',['counter', 'doubleCounter']),
  },
  methods: {
    ...mapMutations({add: 'count/increment'}),
    ...mapActions('count',['incrementAsync']),
  },
  components: {TheNavbar}
}
</script>
