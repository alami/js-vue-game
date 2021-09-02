<template>
  <header class="navbar">
    Счетчик {{counter}}
    <button class="btn primary" @click="add">+5</button>
  </header>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    add() {
      // this.$store.commit('add', {value: 5} )
      this.$store.commit({
        type:'add',
        value: 5
      })
    }
  }
}
</script>
