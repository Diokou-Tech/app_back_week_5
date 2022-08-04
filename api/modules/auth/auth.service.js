const userService = require('../users/users.service');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { KEY_TOKEN } = process.env;
const bcrypt = require("bcrypt");

module.exports.login = async function (item){
    // verif email user
    let user = await userService.findByEmail(item.email);
    if(!user){
        return {status : false, message : "Adresse introuvable !"}
    }else{
        if( bcrypt.compareSync(item.password, user.password))
        {
            let session = createToken(user);
            return {status: true, session};
        }else
        {
        return {status : false, message : "Identifiants incorrectes ! ou Compte désactivé ! "};
        }
    }
}

module.exports.register = async function (item){
    let user = await userService.insertOne(item);
    return user;
}
module.exports.findAll = ()=> {
    return userService.findAll();
}
module.exports.verifToken = function (token){
 let result =  new Promise((resolve,reject)=>{
        jwt.verify(token,KEY_TOKEN,null,(error,decoded)=>{
            if(error){
            reject(error);
        }else{
            resolve(decoded);
        }
    });
    })
    console.log(result);
    return result;
}
function createToken(user){
    user = {...user.toObject()};
    delete user.password;
    let token = jwt.sign({user},KEY_TOKEN,{ expiresIn: "3h" });
    return { user, token};
}
