const authService = require('./auth.service');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {TOKEN_KEY} = process.env;

module.exports = function(app){
    app.use(async (req,res,next)=>{
        const authorization = req.headers.authorization;
        if(authorization){
            const token = authorization.replace("Bearer ","");
            const validationToken = jwt.verify(token,TOKEN_KEY,)
        }else{
            res.send('Token is required !');
        }
    })
}