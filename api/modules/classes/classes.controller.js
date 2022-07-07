const ClasseService = require('./classes.services');

module.exports.getAll = async (req,res)=>{
    const classes = await ClasseService.findAll();
    console.log(classes);
    res.send(classes);
}
module.exports.getOne = async (req,res)=>{
    let id = req.params.id;
    console.log(id);
    let result = await ClasseService.getOne(id)
    res.send(result);
}
module.exports.insertOne = async (req,res)=>{
    const result = await ClasseService.insertOne(req.body);
    res.send(result);
}
module.exports.deleteOne = async  (req,res)=>{
    const id = req.params.id;
    console.log('delete One');
    const result = await ClasseService.deleteOne(id);
    res.send(result);
}
module.exports.updateOne = async (req,res)=>{
    console.log('update One');
    const id = req.params.id;
    const classe = req.body;
    const result =  await ClasseService.updateOne(id,classe);
    res.send(result);
}

