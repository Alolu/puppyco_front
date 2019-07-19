//@ts-check
const Client = require('../../models/client.service')
const Produit = require('../../models/produit.service')
const Categorie = require('../../models/categorie.service')
const categorieService = new Categorie();
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
            clientService.loginClient(req).then((resp)=>{
                res.status(resp.status).json(resp.data)
            })
        },
    );

    router.get('/getCategories',
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            categorieService.getCategories(req).then((resp)=>{
                res.status(200).json(resp.data)
            },(failure)=>{
                res.status(401).json(false)
            })
        },
    )

    router.post('/addToPanier',
        /**
         * @param {object} req
         * @param {object} res
         */
        async (req,res)=>{
            var produit = await produitService.getProduct(req.body.id)
            if(!req.session.produit) req.session.produit = [];
            let productInPanier = req.session.produit.findIndex(obj => obj.id == req.body.id)
            console.log(productInPanier)
            if(productInPanier > -1){
                req.session.produit[productInPanier].qte += req.body.qte;
            }else{
                req.session.produit.push(req.body)
            }
            console.log(req.session.produit)
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
    
    router.post('/createAccount',
        /**
         * @param {object} req
         * @param {object} res
         */
        async (req,res)=>{
            var client = await clientService.addClient(req);
            if(!client) res.status(401).json()
            req.body = {
                username: req.body.email,
                password: req.body.password
            }
            await clientService.loginClient(req)
            res.status(200).json()
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

    router.get("/rechercheavancee/:produit",  
    /**
    * @param {object} req
    * @param {object} res
    */
   async (req,res)=>{
      let recherche = await produitService.getSearchProduct(req.params.produit)
      if(recherche) res.status(200).json(recherche.data)
      else res.status(404).json()
   } )
    
};
