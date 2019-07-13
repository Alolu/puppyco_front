const baseUrl = require('../config').baseUrl;
const axios = require('axios').default;
const https = require('https')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
class Client {
    constructor(){
        this.baseUrl = baseUrl;
    }
    // @ts-ignore
    loginClient(req){
            return axios.post(baseUrl + '/login_check',req).then((resp)=>{
                return resp
            }).catch((err)=>{
                return err.response
            })
    }
}

module.exports = Client;