module.exports = function(app){
    const Ctrl = require('./auth.controller');
    app.route('/users').get(Ctrl.findAll);
    app.route('/auth/login').post(Ctrl.login);
    app.route('/auth/register').post(Ctrl.register);
    app.route('/auth/profil').post(Ctrl.profil);
}