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
                if(resp.status == 200) req.session.token = resp.data.token
                res.status(resp.status).json(resp.data)
            })
        },
    );

    router.get("/verify",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req,res)=>{
            let resp = clientService.verifyClient(req);
            res.json(resp)        
        }
    )

    router.get("/logout",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req,res)=>{
            let resp = clientService.logoutClient(req);
            res.json(resp)        
        }
    )
};
