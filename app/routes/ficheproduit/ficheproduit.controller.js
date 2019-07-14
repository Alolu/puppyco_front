//@ts-check

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
        (req, res) => {
            const data = { //envoit les données à la vue
                products: [
                    { large: true },
                    { large: false },
                    { large: false },
                    { large: true },
                    { large: false },
                    { large: false }
                ]
            };
            req.vueOptions.head.title = "Accueil PuppyCo'"; //contient le titre de la page
            res.renderVue("ficheproduit/ficheproduit.vue", data, req.vueOptions); //réponse, avec le chemin de la vue, la data, et les options de la vue.
        },
    );
};