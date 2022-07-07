const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClasseSchema = new Schema({
    code: {type: String, required: true},
    nomination : {type: String, required: true}
},{timestamps: true});

const model = mongoose.model('classe',ClasseSchema);
module.exports = {
    model,
    ClasseSchema
}