module.exports = function(app){
    const Ctrl = require('./classes.controller');
    app.route('/classes')
        .get(Ctrl.getAll)
        .post(Ctrl.insertOne);
    app.route('/classes/:id')
        .get(Ctrl.getOne)
        .put(Ctrl.updateOne)
        .delete(Ctrl.deleteOne);
}