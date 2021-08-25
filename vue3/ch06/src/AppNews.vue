<template>
  <div class="card">
    <h3>{{title}}</h3>
    <button class="btn" @click="open">Open</button>
    <p v-if="isNewsOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, odit.</p>
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
      isNewsOpen: this.isOpen
      // item: 'Item string',
      // isOpen: false
    }
  },
  methods: {
    open() {
      this.isNewsOpen=!this.isNewsOpen
    }
  }
}
</script>

