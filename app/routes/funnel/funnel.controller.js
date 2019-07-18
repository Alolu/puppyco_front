//@ts-check
const Produit = require('../../models/produit.service');
const produitService = new Produit();
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/funnel", //chemin html
        /**
         * @param {object} req //request
         * @param {object} res //contient la reponse
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
            const data = { //envoit les données à la vue
                products: produits
            };
            req.vueOptions.head.title = "Achat PuppyCo'"; //contient le titre de la page
            res.renderVue("funnel/funnel.vue", data, req.vueOptions); //réponse, avec le chemin de la vue, la data, et les options de la vue.
        },
    );
};