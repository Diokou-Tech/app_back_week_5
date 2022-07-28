const authService =  require('./auth.service');

module.exports.login = async (req,res)=>{
    const item = req.body;
    let result = await authService.login(item);
    res.send(result);
}
module.exports.findAll = async  (req,res)=>{
    let result  = await authService.findAll();
    res.send(result);
}
module.exports.register=  async (req,res)=>{
    const item = req.body;
    let result = await authService.register(item);
    res.send(result);
}