const eleve = require('./eleves.schema').model;

function insertOne(item){
    let result = eleve.create(item);
    return result;
}
async function UpdateOne(id,item){
    try{
        const result = await eleve.updateOne({"_id":id},{ $set: item });
        return result;
    }catch(error)
    {
        return {status: false, error: "data vide or element introuvable"}
    }
}
function findAll(){
    const eleves = eleve.find({});
    console.log('find all');
    return eleves;
}
function deleteOne(id){
    const result = eleve.deleteOne({"_id" :  id});
    return result;
}
function getOne(id){
    const result = eleve.find({"_id": id});
    return result;
}
// exports 
module.exports={
    insertOne,
    UpdateOne,
    findAll,
    deleteOne,
    getOne,
}
