/**
 * Created by dongyin on 8/22/15.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1986070@Dong',
    database : 'growthchart'
});
module.exports = connection;