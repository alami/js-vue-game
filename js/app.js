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
        totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem('sc2TotalGames'):0,
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
        },
        nextQuestions (answer) {
            if(this.number == 24) {
                this.number = 0
                this.endGame()
            } else {
                this.number++
            }
            eval(answer)
        },
        endGame () {
            this.totalGames++
            localStorage.setItem('sc2TotalGames',this.totalGames)
            if (this.score.zerg > this.score.protoss && this.score.zerg > this.score.terran
             && this.score.primal < 8 && Math.abs(this.score.protoss - this.score.zerg)>3) {
                this.gotoResult('zerg')
                this.totalGame.zerg++
            } else if (this.score.primal > this.score.protoss && this.score.primal > this.score.terran
                && this.score.primal == 8 ) {
                this.gotoResult('primal') //изначальный
                this.totalGame.primal++
            } else if (this.score.protoss > this.score.zerg && this.score.protoss > this.score.terran
                && this.score.taldarim > 5 && Math.abs(this.score.protoss - this.score.zerg)>3) {
                this.gotoResult('protoss')
                this.totalGame.protoss++
            } else if (this.score.protoss > this.score.zerg && this.score.protoss > this.score.terran
                && this.score.taldarim == 5 ) {
                this.gotoResult('taldarim')
                this.totalGame.taldarim++
            } else if (this.score.terran > this.score.zerg
                    && this.score.terran > this.score.protoss) {
                this.gotoResult('terran')
                this.totalGame.terran++
            } else if (Math.abs(this.score.protoss - this.score.zerg) <= 3) {
                this.gotoResult('hybrid')  // редкий
                this.totalGame.hybrid++
            } else {
                this.gotoResult('infested') //зараженный терран - совсем редкий
                this.totalGame.infested++
            }
            localStorage.setItem('sc2TotalGame',JSON.stringify(this.totalGame))
        }
    }
});