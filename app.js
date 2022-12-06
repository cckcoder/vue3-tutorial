let vm = Vue.createApp({
    data() {
        return {
            isPurple: false
        }
    },
    computed: {
        circleClasses() {
            return { purple: this.isPurple }
        }
    }
}).mount('#app')