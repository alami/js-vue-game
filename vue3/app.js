const App = {
    data() {
        return {
            counter : 4,
            title: "Счетчик"
        }
    }
}
Vue.createApp(App).mount('#app')