//@ts-check

/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/inscription", //chemin html
        /**
         * @param {object} req //request
         * @param {object} res //contient la reponse
         */
        (req, res) => {
            const data = { //envoit les données à la vue

            };
            req.vueOptions.head.title = "Inscription PuppyCo'"; //contient le titre de la page
            res.renderVue("inscription/inscription.vue", data, req.vueOptions); //réponse, avec le chemin de la vue, la data, et les options de la vue.
        },
    );
};