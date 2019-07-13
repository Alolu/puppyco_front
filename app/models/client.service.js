const baseUrl = require('../config').baseUrl;
const axios = require('axios').default;
const https = require('https')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
class Client {
    constructor(){
        this.test = baseUrl;
    }
    loginClient(req){
        console.log(baseUrl)
        axios.post(baseUrl + '/login_check',req).then((resp)=>{
            console.log(resp.data);
        }).catch((err)=>{
            console.log(err.response.data)
        })
    }
}

module.exports = Client;