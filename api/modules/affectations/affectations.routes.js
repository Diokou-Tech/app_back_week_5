module.exports = function(app){
    const Ctrl = require('./affectations.controller');
    app.route('/affectations')
        .get(Ctrl.getAll)
        .post(Ctrl.insertOne);
    app.route('/affectations/:id')
        .get(Ctrl.getOne)
        .put(Ctrl.updateOne)
        .delete(Ctrl.deleteOne);
}