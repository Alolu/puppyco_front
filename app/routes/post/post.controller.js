//@ts-check
const Client = require('../../models/client.service')
const clientService = new Client();
/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.post("/login",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            clientService.loginClient(req.body).then((resp)=>{
                console.log(resp.status)
                res.status(resp.status).json(resp.data)
            })
        },
    );
};
