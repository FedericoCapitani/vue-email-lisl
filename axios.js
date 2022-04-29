const app = new Vue({
    el: '#app',
    data: {
        mail: '',
        my_data: null
    },
    methods: {},
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
            console.log(this);
            this.my_data = response.data
        })
    }
})