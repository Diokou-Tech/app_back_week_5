const EleveService = require('./eleves.services');
// const url_front= 'http://localhost:4200';
const header = 'Access-Control-Allow-Origin';
module.exports.getAll = async (req,res)=>{
    console.log(req.body);
    const eleves = await EleveService.findAll();
    // res.set(header,url_front);
    res.send(eleves);
}
module.exports.getOne = async (req,res)=>{
    let id = req.params.id;
    const result = await EleveService.getOne(id);
    res.send(result);
}
module.exports.insertOne = async (req,res)=>{
    try{
        console.log('data',req.body);
        const result =  await EleveService.insertOne(req.body);
        res.send(result);
    }
    catch(error){
        console.log('error new' + error);
        res.status(204).send({status: false,error: error});
    }
}
module.exports.deleteOne = async (req,res)=>{
    let id = req.params.id;
    // res.set(header,url_front);
    try{
        const result = await EleveService.deleteOne(id)
        res.send({status: true,data : result});
    }catch(error){
        res.send({status: false,error: error});
    }
}
module.exports.updateOne = async (req,res)=>{
    const id = req.params.id;
    const eleve = req.body;
    const result = await EleveService.UpdateOne(id,eleve);
    res.send(result);
}
