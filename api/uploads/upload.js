const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/storages/')
    },
    filename: function (req, file, cb) {
      const ext = file.originalname.split('.',2)[1];
      if( ext == 'jpg' || ext == 'png' || ext == 'jpeg'  ){
        const uniqueSuffix = Date.now().toString() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-- ' + uniqueSuffix + "." + ext)
      }else{
        cb(new Error("Ce type de fichier n'est pas requis !"));
      }
    }
  })
const upload = multer({storage: storage });

module.exports = upload;