const multer = require('multer');
// config files destinations and extenxions accepted 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/storages/')
    },
    filename: function (req, file, cb) {
      const ext = file.originalname.split('.',2)[1];
      if( ext == 'jpg' || ext == 'png' || ext == 'jpeg' || ext == 'jfif'  ){
        const uniqueSuffix = Date.now().toString() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-- ' + uniqueSuffix + "." + ext)
      }else{
        cb(new Error("Ce type de fichier n'est pas requis !"));
      }
    }
  })
  // function for ulpload files
const upload = multer({storage: storage, limits :  3 * 1000 });
// function call with 
const handleFile = async (req, res,handleUpdload) => {
  return new Promise((resolve, reject) => {
    handleUpdload(req, res, (error) => {
      if (error) {
        reject(error);
      }
      resolve({ file: req.file, body: req.body });
    });
  });
};
module.exports = {
  handleFile,
  upload
}