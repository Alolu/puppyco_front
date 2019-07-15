//@ts-check
const path = require("path");
const DEV_BASEURL = 'http://localhost:8000'
const PROD_BASEURL = 'adresse de prod'

function getBaseUrl(env){
    let baseUrl
    env == "development" ? baseUrl = DEV_BASEURL : baseUrl = PROD_BASEURL
    return baseUrl
}
class Config {
    constructor() {
        this.env = process.env.NODE_ENV || "development";
        this.root = path.normalize(__dirname + "/..");
        this.rootPath = process.env.ROOT_PATH || "/";
        this.app = {
            name: "puppyco_front",
        };
        this.baseUrl = getBaseUrl(this.env);
        this.port = Number(process.env.PORT) || 9000;
    }
}
module.exports = Config;
