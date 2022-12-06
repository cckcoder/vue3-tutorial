const vm = Vue.createApp({
    data() {
        return {
            firstName: 'CodeWizz',
            lastName: 'Coder',
            middleName: '',
            url: 'http://google.com',
            rawUrl: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++;
        },
        updateLastName(msg, event) {
            // console.log(msg);
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log("Full name computed property call!!");
            return  `${this.firstName} | ${this.middleName} | ${this.lastName.toUpperCase()}` 
        },
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000)