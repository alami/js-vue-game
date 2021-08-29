<template>
  <div class="container">
    <div class="card">
      <h2>Ди⁠рективы</h2>
      <div class="form-control">
        <label for="inp">Активный по умолчанию</label><br>
        <input type="text" id="inp" v-focus>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>

