const App = {
    data() {
        return {
            placeholderString: "Введите название заметки",
            title: "Список заметок",
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler(event) {
            // console.log("123 : ",event.target.value)
            this.inputValue = event.target.value
        }
    }
}
Vue.createApp(App).mount('#app')