//@ts-check
const Produit = require('../../models/produit.service')
const produitService = new Produit();
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/panier",
        /**
         * @param {object} req
         * @param {object} res
         */
        async (req, res) => {
            let produits
            let produitsArray = []
            if(req.session.produit){
                await req.session.produit.forEach(element => {
                    produitsArray.push(element.id)
                }); 
                produits = await produitService.getProducts(produitsArray)
                await produits.forEach(element => {
                    let id = req.session.produit.findIndex(obj => obj.id == element.id)
                    element.qte = req.session.produit[id].qte
                });
            }else{
                produits = []
            }
            let data = {
                products: produits
            };
            req.vueOptions.head.title = "Panier";
            res.renderVue("panier/panier.vue", data, req.vueOptions);
        },
    );
};
