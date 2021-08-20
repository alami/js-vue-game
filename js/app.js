let app = new Vue({
    el: '.main',
    data: {
        showMain: true, //отображать главный экран
        showSocial: false, //а соц сети скрыть
        showAchivments: false,
        showQuestions: false,
        showResult: false,
        number: 0, // OF QUESTION
        score: {
            'zerg':0,
            'terran':0,
            'primal':0,
            'protoss':0,
            'taldarim':0,
        },
        totalGame: localStorage.getItem('sc2TotalGame') ?
            JSON.parse(localStorage.getItem('sc2TotalGame'))
            :{
                'zerg':0,  //ЕЩЕ НИ РАЗУ НЕ ИГРАЛИ в эту игру
                'terran':0,
                'primal':0,
                'protoss':0,
                'taldarim':0,
                'hybrid':0,
                'infested':0,
            },                 // всего сыгранных матчей
        totalGames: localStorage.getItem('sc2TotalGames') ? ('sc2TotalGames'):0,
        questions: questions, // ищются в "js/const.js"
        results: results,
        resultRace: 'infested',
    },
    methods: {
        gotoMain() {  //для кнопки "Назад"
            this.showMain = true
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false
        },
        gotoSocial() {
            this.showMain = false
            this.showSocial = true
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false
        },
        gotoAchivments() {
            if (this.totalGames > 0) {
                this.showMain = false
                this.showSocial = false
                this.showAchivments = true
                this.showQuestions = false
                this.showResult = false
            } else {
                this.gotoQuestions()
            }
        },
        gotoQuestions() {
            this.score = {
                'zerg':0,
                    'terran':0,
                    'primal':0,
                    'protoss':0,
                    'taldarim':0,
            }
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = true
            this.showResult = false
        },
        gotoResult(race) {
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false
            this.resultRace = race
        }
    }
});