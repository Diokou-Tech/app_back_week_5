const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EleveSchema = require('./../eleves/eleves.schema').EleveSchema;
const ClasseSchema = require('./../classes/classe.schema').ClasseSchema;
const AffecationSChema = new Schema({
    eleve : {type: EleveSchema,required: true},
    classe: {type: ClasseSchema, required: true}
},{ timestamps: true });
const model = mongoose.model('affectation',AffecationSChema);
module.exports = {
    model,
    AffecationSChema
}