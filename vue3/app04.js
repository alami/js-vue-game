const app= Vue.createApp({
    data() {
        return {
            title: 'test'
        }
    },
    template: `
       <div class="card center">
         <h1>{{title}}</h1>
         <button class="btn" @click="title='New title'"></button>
       </div>
     `
})
app.mount('#app')