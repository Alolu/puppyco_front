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

    getProduct(id){
        return api.get("/produit/produit/" + id).then(
            (success) => {
                return success
            },
            (failure)=>{
                return failure
            }
        )
    }
}

module.exports = Produit