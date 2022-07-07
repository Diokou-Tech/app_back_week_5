module.exports = function(app){
    const Ctrl = require('./eleves.controller');
    app.route('/eleves')
        .get(Ctrl.getAll)
        .post(Ctrl.insertOne);
    app.route('/eleves/:id')
        .get(Ctrl.getOne)
        .put(Ctrl.updateOne)
        .delete(Ctrl.deleteOne);
}
