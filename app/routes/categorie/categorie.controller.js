//@ts-check
const Categorie = require('../../models/categorie.service')
const categorie = new Categorie()
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/categorie/:id",
        /**
         * @param {object} req
         * @param {object} res
         */
        async (req, res) => {
            let cat = await categorie.getCategorie(req.params.id)
            let data = {

            }
            if(cat){
                req.vueOptions.head.title = "Categorie " + cat.libelle;
                data = {
                    categorie: cat,
                    products: await categorie.getProducts(cat.id)
                }
                res.renderVue("categorie/categorie.vue", data, req.vueOptions);
            }else{
                req.vueOptions.head.title = "Cette categorie n'existe pas"
                res.renderVue('error.vue',data,req.vueOptions)  
            }
        },
    );
};
