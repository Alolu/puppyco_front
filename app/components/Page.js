var axios = require('axios')
module.exports =  {
    data(){
        return {
            loggedOn: null
        }
    },
    methods:{
        verifyClient: function(){
            axios.get('/verify').then((resp)=>{
                this.loggedOn = resp.data;
            })
        },
        onLogin: function () {
            this.loggedOn = true
        },
        onLogout: function() {
            this.loggedOn = false
        }
    },
    mounted: function(){
        this.verifyClient()
        this.$on('login',this.onLogin)
        this.$on('logout',this.onLogout)
    }
}
