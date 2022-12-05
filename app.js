const vm = Vue.createApp({
    data() {
        return {
            firstName: 'CodeWizz',
            lastName: 'Coder',
            url: 'http://google.com'
        }
    },
    methods: {
        fullName() {
            return  `${this.firstName} ${this.lastName.toUpperCase()}` 
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000)