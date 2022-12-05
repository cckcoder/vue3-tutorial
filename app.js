const vm = Vue.createApp({
    data() {
        return {
            firstName: 'CodeWizz',
            lastName: 'Coder'
        }
    },
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000)