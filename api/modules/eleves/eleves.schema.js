const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.objectId;

const EleveSchema = new Schema({
    matricule: {type: String, required: true},
    nom : {type: String, required: true},
    prenom : {type: String, required: true},
    date_naiss : {type: Date, required: true},
},{timestamps: true});

const model = mongoose.model('eleve',EleveSchema);
module.exports ={
    model,
    EleveSchema
}

