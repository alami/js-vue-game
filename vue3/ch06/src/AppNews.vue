<template>
  <div class="card">
    <h3>{{title}}</h3>
    <button class="btn" @click="isOpen=!isOpen">Open</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, odit.</p>
  </div>
</template>

<script>
export default {
  props: //['title',],
      {
        title: {
          type: String,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        },
        isOpen: {
          type: Boolean,
          required: false,
          default: true,
          validator(value) {
            console.log(value)
            return true
          }
        }
      },
  data() {
    return {
      // item: 'Item string',
      // isOpen: false
    }
  }
}
</script>

