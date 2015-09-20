var express = require('express');
var bodyParser = require('body-parser');
var index = require('../app/routes/index.server.router');
var data = require('../app/routes/data.server.router');
var login = require('../app/routes/login.server.router');
var auth = require("http-auth");
var cookie = require('cookie-parser');

module.exports = function(){

    var app = express();

    app.use(bodyParser.urlencoded({extended : true}));

    app.use(bodyParser.json());

    console.log("cookie");
    app.use(cookie());


    app.set('views','./app/views');

    app.set('view engine', 'ejs');


    app.use(express.static('./public'));

    var basic = auth.basic({
        realm: "Private area",
        file: "htpasswd"
    });

    app.use(auth.connect(basic));

    index(app);
    data(app);
    login(app);

    return app;

}