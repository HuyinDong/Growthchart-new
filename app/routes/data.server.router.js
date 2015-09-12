/**
 * Created by dongyin on 8/22/15.
 */
var data = require('../controllers/data.server.controller');
module.exports = function(app){

    app.route('/management/data/:table').post(data.insert)
        .get(data.selectAll);

    app.route('/management/data/:table/:id').delete(data.delete)
        .put(data.update)
        .get(data.selectOne);
}