//@ts-check

/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    let data = {
        title: "Oh hi world!",
    };
    router.get("/categorie",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            
            req.vueOptions.head.title = "Categories";
            res.renderVue("categorie/categorie.vue", data, req.vueOptions);
        },
    );
};
