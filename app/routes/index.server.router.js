/**
 * Created by dongyin on 8/22/15.
 */
var index = require('../controllers/index.server.controller');

module.exports = function(app){

    app.get('/',index);

};

