const h = Vue.h
const app= Vue.createApp({
    data() {
        return {
            title: 'test'
        }
    },
    methods: {
        changeTitle() {
            console.log(this)
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

let data = {
    title: "Vue 3",
    message: "Это заголовок " + "Vue 3" //data.title
}
// console.log(data)

const proxy = new Proxy(data, { //handler
    get(target, key) {
        console.log(target)
        console.log(key)
    },
    set(target, key, value, receiver) {
        console.log(target)
        console.log(key)
        console.log(value)
    }
})
proxy.message
proxy.title = "Angular 10"

