//@ts-check
const Produit = require('../../models/produit.service');
const produitService = new Produit();
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/produit", //chemin html
        /**
         * @param {object} req //request
         * @param {object} res //contient la reponse
         */
        async (req, res) => {
            let produit = await produitService.getProduct("1")
            const data = { //envoit les données à la vue
                product : produit.data
            };
            req.vueOptions.head.title = "Accueil PuppyCo'"; //contient le titre de la page
            res.renderVue("ficheproduit/ficheproduit.vue", data, req.vueOptions); //réponse, avec le chemin de la vue, la data, et les options de la vue.
        },
    );
};