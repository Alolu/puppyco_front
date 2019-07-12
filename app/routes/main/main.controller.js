//@ts-check

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
        (req, res) => {
            const data = {
                products : [
                    {large:true},
                    {large:false},
                    {large:false},
                    {large:true},
                    {large:false},
                    {large:false}
                ]
            };
            req.vueOptions.head.title = "Accueil PuppyCo'";
            res.renderVue("main/main.vue", data, req.vueOptions);
        },
    );
};
