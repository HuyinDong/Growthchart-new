var express = require('express');
var bodyParser = require('body-parser');
var index = require('../app/routes/index.server.router');
var data = require('../app/routes/data.server.router');
var login = require('../app/routes/login.server.router');
module.exports = function(){
    var app = express();

    app.use(bodyParser.urlencoded({extended : true}));

    app.use(bodyParser.json());

    app.set('views','./app/views');

    app.set('view engine', 'ejs');



    index(app);
    data(app);
    login(app);
    app.use(express.static('./public'));
    return app;

}