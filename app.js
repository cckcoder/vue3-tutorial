const vm = Vue.createApp({
    data() {
        return {
            firstName: 'CodeWizz',
            lastName: 'Coder',
            url: 'http://google.com',
            rawUrl: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        fullName() {
            return  `${this.firstName} ${this.lastName.toUpperCase()}` 
        },
        increment() {
            this.age++;
        },
        updateLastName(event) {
            this.lastName = event.target.value
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000)