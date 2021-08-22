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
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote (idx) {
            this.notes.splice(idx,1)
        },
        toUpperCase (item) {
            return item.toUpperCase()
        }
    },
    computed : {
        doubleCountComputed () {
            console.log("doubleCountComputed")
            return this.notes.length *2
        }
    }
}
Vue.createApp(App).mount('#app')