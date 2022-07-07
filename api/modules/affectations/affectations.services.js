const affectation = require('./affectation.schema').model;

function findAll(){
    const result = affectation.find({});
    return result;
}
function insertOne(item){
    const result = affectation.create(item);
    return result;
}
function deleteOne(id)
{
    const result = affectation.deleteOne({"_id": id});
    return result;
}
function getOne(id){
    const result =  affectation.findOne({"_id":id});
    return result;
}
function updateOne(id,item){
    const result = affectation.updateOne({"_id":id},{$set: item});
    return result;
}
module.exports ={
    findAll,
    insertOne,
    deleteOne,
    getOne,
    updateOne,
}