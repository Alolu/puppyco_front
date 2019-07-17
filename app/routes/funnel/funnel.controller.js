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
            
            const data = { //envoit les données à la vue
                
            };
            req.vueOptions.head.title = "Accueil PuppyCo'"; //contient le titre de la page
            res.renderVue("funnel/funnel.vue", data, req.vueOptions); //réponse, avec le chemin de la vue, la data, et les options de la vue.
        },
    );
};