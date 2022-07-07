const classe = require('./classe.schema').model;

function findAll(){
    result = classe.find({});
    return result;
}
function insertOne(item){
    result = classe.create(item);
    return result;
}
function getOne(id){
    const result = classe.find({"_id": id});
    return result;
}
function deleteOne(id){
    const result = classe.deleteOne({"_id": id});
    return result;
}
function updateOne(id,item){
    const result = classe.updateOne({"_id": id},{$set: item});
    return result;
}
module.exports = {
    findAll,
    insertOne,
    getOne,
    deleteOne,
    updateOne
}