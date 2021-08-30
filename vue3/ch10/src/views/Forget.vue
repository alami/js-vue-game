<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>
    <router-link to="/login">
      <button class="btn">Обратно к логину</button>
    </router-link>
    <button class="btn" @click="$router.push('/login')">Обратно к логину 2</button>
  </div>
</template>
<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>