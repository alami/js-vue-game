Vue.createApp({
    // data: () => { return { title: "Счетчик" }}
    data: () => ({ title: "Счетчик", myHTML: '<h1>Test Title</h1>',
        person: {firstName: 'Vlad', lastName: 'Minin', age: 27},
        items: [1,2,3,4,5,6,7]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(this.$refs.myInput.value)
        },
        stopPropagation(event){
             event.stopPropagation()
        }
    },
    computed : {
        evenItems() {
            return this.items.filter(i=>i%2===0)
        }
    }
}).mount('#app')