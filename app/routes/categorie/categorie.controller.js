//@ts-check

/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/categorie/{cat}",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Oh hi world!",
            };
            req.vueOptions.head.title = "Express-Vue MVC Starter Kit";
            res.renderVue("categorie/categorie.vue", data, req.vueOptions);
        },
    );
};
