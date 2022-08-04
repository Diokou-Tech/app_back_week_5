const userModel = require('./users.schema').model;
const bcrypt = require("bcrypt");
module.exports.insertOne = async (item)=>{
    try{
        const salt= 10;
        const hash = bcrypt.hashSync(item.password, salt);
        item.password = hash;
        let user = await userModel.create(item);
        return user;
    }catch(error){
        return error;
        console.log(error);
    }
}
module.exports.findByEmail = async (email)=>{
    let user = await userModel.findOne({"email" : email});
    return user;
}
module.exports.findAll = async ()=>{
    let result =  await userModel.find({});
    console.log({result});
    return result;
}