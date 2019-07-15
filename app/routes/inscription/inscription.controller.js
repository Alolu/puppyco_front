//@ts-check
const Client = require('../../models/client.service')
const clientService = new Client()
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
            let page = "inscription/inscription.vue"
            if(req.session.token) clientService.verifyClient(req)? page = "error.vue" : page= "inscription/inscription.vue"
            const data = { //envoit les données à la vue

            };
            req.vueOptions.head.title = "Inscription PuppyCo'"; //contient le titre de la page
            res.renderVue(page, data, req.vueOptions); //réponse, avec le chemin de la vue, la data, et les options de la vue.
        },
    );
};