const authService = require('./auth.service');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {TOKEN_KEY} = process.env;

module.exports =  function(app){
    app.use(async (req,res,next)=>{
        const authorization = req.headers.authorization;
        if(authorization){
            const token = authorization.replace("Bearer ","");
            const validationToken = await authService.verifToken(token);
            if(validationToken){
                req.user = validationToken;
                next();
            }else{
                res.status(403).send("Token Expired please reconnect  !");
            }
        }else{
            res.status(403).send('Token is required !');
        }
    })
}