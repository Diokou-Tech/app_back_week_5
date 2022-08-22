const authService =  require('./auth.service');
const upload = require('./../../uploads/upload').upload;
const uploadHandle = require('./../../uploads/upload').handleFile;

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
module.exports.profil = async (req, res) => {
    let uploadResult;
    try {
      uploadResult = await uploadHandle(req, res,upload.single('profil'));
    } catch (e) {
      return res.status(422).json({ errors: [e.message] });
    }
    console.log(req.file);
    const uploaded = req.file;
    res.send(uploaded);
}