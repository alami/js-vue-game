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
        removeNote (idx) {
            this.notes.splice(idx,1)
        }
    }
}
Vue.createApp(App).mount('#app')