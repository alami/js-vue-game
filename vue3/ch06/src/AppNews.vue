<template>
  <div class="card">
    <h3>{{title}}</h3>
    <button class="btn" @click="open">{{isNewsOpen?'Close':'Open'}}</button>
    <div v-if="isNewsOpen">
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, odit.</p>
      <button v-if="!wasRead" class="btn primary" @click="mark">Read news</button>
    </div>
  </div>
</template>

<script>
export default {
  props: //['title',],
      {
        title: String,
        id: Number,
        isOpen: Boolean,
        wasRead: Boolean
      },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('Empty "id" parameter for emit("read-news")')
      return false
    },
  },
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen=!this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark(){
      this.isNewsOpen=false
      this.$emit('read-news', this.id)
    }
  }
}
</script>

