const userModel = require('./users.schema').model;

module.exports.insertOne = async (item)=>{
    try{
        let user = await userModel.create(item);
        return user;
    }catch(error){
        return error;
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