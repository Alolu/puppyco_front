//@ts-check
const Client = require('../../models/client.service')
const Produit = require('../../models/produit.service')
const clientService = new Client();
const produitService = new Produit();
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

    router.post('/addToPanier',
        /**
         * @param {object} req
         * @param {object} res
         */
        async (req,res)=>{
            var produit = await produitService.getProduct(req.body.id)
            if(!req.session.produit) req.session.produit = [];
            req.session.produit.push(produit)
            res.status(produit.status).json()
        }
    )

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
