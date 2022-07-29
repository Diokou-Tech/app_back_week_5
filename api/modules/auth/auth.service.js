const userService = require('../users/users.service');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// const { KEY_TOKEN } = process.env;
const KEY_TOKEN = "diokoutechschoolkey";
module.exports.login = async function (item){
    // verif email user
    let user = await userService.findByEmail(item.email);
    if(!user){
        return {status : false, message : "Adresse introuvable !"}
    }else{
        if(user.password == item.password && user.active == true){
            let session = createToken(user);
            return {status: true, session};
        }else{
        return {status : false, message : "Identifiants incorrectes ! ou Compte désactivé !"};
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

}
function createToken(user){
    user = {...user.toObject()};
    delete user.password;
    let token = jwt.sign({user},KEY_TOKEN,{ expiresIn: "3h" });
    return { user, token};
}
