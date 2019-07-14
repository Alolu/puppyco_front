const api = require('./api.service.js').api
const baseUrl = require('../config').baseUrl;

class Categorie {
    constructor(){
        this.baseUrl = baseUrl;
    }
    // @ts-ignore
    getCategorie(id){
        return api.get('/categorie/'+id).then(
            (success)=>{
                return success.data
            },
            (failure)=>{
                return false
            }
        )
    }

    getProducts(id){
        return api.get('/produit/categorie/' + id).then(
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

module.exports = Categorie