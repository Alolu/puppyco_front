//@ts-check
const Produit = require('../../models/produit.service')
const produitService = new Produit();
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/admin",
        /**
         * @param {object} req
         * @param {object} res
         */
        async (req, res) => {
            
            let data = {
            };
            req.vueOptions.head.styles.push({style:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"},{style:"https://use.fontawesome.com/releases/v5.3.1/css/all.css"})
            req.vueOptions.head.scripts.push({src: "https://code.jquery.com/jquery-3.3.1.slim.min.js"},{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"},{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"},
            {src:'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.15.3/bootstrap-table.min.js'})
            res.renderVue("admin/admin.vue", data, req.vueOptions);
        },
    );
};
