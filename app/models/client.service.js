const baseUrl = require('../config').baseUrl;
const api = require('./api.service').api;
const jwt = require('jsonwebtoken')
const fs = require('fs')
const key = fs.readFileSync('app/jwt/public.pem');
let setToken = require('./api.service').setToken;
let delToken = require('./api.service').delToken;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
class Client {
    constructor(){
        this.baseUrl = baseUrl;
    }
    // @ts-ignore
    loginClient(req){
        return api.post(baseUrl + '/login_check',req).then((resp)=>{
            setToken(resp.data.token)
            return resp
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    verifyClient(req){
        if(req.session.token) {
            try {
                var decodedKey = jwt.verify(req.session.token, key);
            } catch(err) {
                return false;
            }
            if(decodedKey) return true;
            return false;
        }
        return false;
    }

    logoutClient(req){
        if(req.session.token) {
            delete req.session.token
        }
        delToken()
        return true;
    }
}

module.exports = Client;