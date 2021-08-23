Vue.createApp({
    /*data() {
        return {
            title: "Счетчик"
        }
    }*/
    // data: () => { return { title: "Счетчик" }}
    data: () => ({ title: "Счетчик", myHTML: '<h1>Test Title</h1>' })
}).mount('#app')