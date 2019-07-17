//@ts-check
const Produit = require('../../models/produit.service');
const produitService = new Produit();
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/recherche/:id", //chemin html
        /**
         * @param {object} req //request
         * @param {object} res //contient la reponse
         */
        async (req, res) => {
            let page;
            let produit = await produitService.getSearchProduct(req.params.id)
            const data = { //envoit les données à la vue
                product : produit.data
            };
            req.vueOptions.head.title = "Recherche : " + req.params.id; //contient le titre de la page
            res.renderVue("recherche/recherche.vue", data, req.vueOptions); //réponse, avec le chemin de la vue, la data, et les options de la vue.
        },
    );
};