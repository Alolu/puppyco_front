const axios = require('axios')
const baseUrl = require('../config').baseUrl;

const api = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
});

function setToken(token){
    api.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}

function delToken(){
    api.defaults.headers.common = {}
}

module.exports = {api,setToken,delToken}