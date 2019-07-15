//@ts-check
const Produit = require('../../models/produit.service');
const produitService = new Produit();
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/produit/:id", //chemin html
        /**
         * @param {object} req //request
         * @param {object} res //contient la reponse
         */
        async (req, res) => {
            let page;
            let produit = await produitService.getProduct(req.params.id)
            produit.status == 200 ? page = "ficheproduit/ficheproduit.vue" : page = "error.vue"
            const data = { //envoit les données à la vue
                product : produit.data
            };
            req.vueOptions.head.title = "Accueil PuppyCo'"; //contient le titre de la page
            res.renderVue(page, data, req.vueOptions); //réponse, avec le chemin de la vue, la data, et les options de la vue.
        },
    );
};