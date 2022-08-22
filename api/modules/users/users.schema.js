const mongoose = require('mongoose');
// define schema user
const userSchema = new mongoose.Schema({
    email: {type : String,required : true, unique: true},
    nom: {type : String,required : true},
    prenom: {type : String,required : true},
    password: {type : String,required : true},
    active : {type : Boolean, default: false},
    profil_url: {type: String}
},{ timestamps: true });
// define model user
const model = mongoose.model('user',userSchema);
// export 
module.exports = {
    model,
    userSchema
};