const baseUrl = require('../config').baseUrl;
const api = require('./api.service').api;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
class Produit {
    constructor(){
        this.baseUrl = baseUrl;
    }
    getRandomProducts(req){
        return api.get('/produit/random').then(
            (success)=>{
                return success.data
            },
            (failure)=>{
                console.log(failure)
                return false
            }
        )
    }
}

module.exports = Produit