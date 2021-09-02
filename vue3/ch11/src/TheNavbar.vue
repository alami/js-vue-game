<template>
  <header class="navbar">
    Счетчик {{counter}}
    <button class="btn primary" @click="addFive">+5</button>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    /*counter() {
      return this.$store.state.counter
    }*/
    ...mapGetters(['counter'])
  },
  methods: {
    ...mapMutations(['add']),
    addFive() {
      this.add({value:5})
      /*this.$store.commit({
        type:'add',
        value: 5
      })*/
    }
  }
}
</script>
