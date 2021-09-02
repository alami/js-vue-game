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
  computed: mapGetters(['counter', 'doubleCounter','upperCaseTitle']),
  methods: {
    ...mapMutations({add: 'increment'}),
    ...mapActions({incrementAsync: 'incrementAsync'}),
  },
  components: {TheNavbar}
}
</script>
