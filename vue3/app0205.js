const App = {
    data() {
        return {
            placeholderString: "Введите название заметки",
            title: "Список заметок",
            inputValue: '',
            notes: ['Note 1','Note 2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        inputKeyPress(event) {
            // console.log(event.key)
            if (event.key === 'Enter') this.addNewNote()
        }
    }
}
Vue.createApp(App).mount('#app')