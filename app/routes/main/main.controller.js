//@ts-check
const Produit = require('../../models/produit.service')
const produit = new Produit();
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/",
        /**
         * @param {object} req
         * @param {object} res
         */
        async (req, res) => {
            let data = {
                products: await produit.getRandomProducts(req)
            };
            req.vueOptions.head.title = "Accueil PuppyCo'";
            res.renderVue("main/main.vue", data, req.vueOptions);
        },
    );
};
