const h = Vue.h
const app= Vue.createApp({
    data() {
        return {
            title: 'test'
        }
    },
    methods: {
        changeTitle() {
            this.title = 'New Title'
        }
    },
    render() {
        return h('div', {
            class: 'card center',
        }, [h('h1',{},this.title),
            h('button',{class: 'btn', onClick: this.changeTitle }, 'Изменить')
        ])
    }
})
app.mount('#app')