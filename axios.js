const app = new Vue({
    el: '#app',
    data: {
        mail: '',
        my_data: null,
        my_emails: []
    },
    methods: {},
    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                console.log(this);
                this.my_data = response.data
                this.my_emails.push(response.data)
            })
            
        }
    }
})