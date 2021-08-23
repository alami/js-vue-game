Vue.createApp({
    // data: () => { return { title: "Счетчик" }}
    data: () => ({ title: "Счетчик", myHTML: '<h1>Test Title</h1>',
        person: {firstName: 'Vlad', lastName: 'Minin', age: 27},
        items: [1,2,3,4,5,6,7]
    }),
    methods: {
        stopPropagation(event){
            event.stopPropagation()
        }
    }
}).mount('#app')