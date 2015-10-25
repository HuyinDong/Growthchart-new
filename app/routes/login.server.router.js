/**
 * Created by dongyin on 9/9/15.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var connection = require('../../config/mysql');
var mysql = require('mysql');
module.exports = function(app){

    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log("localstratege");
            connection.query("select * from p_users where email = '"+username+"'",function(err,user){
                if(err){
                    return done(err);
                }
                if(user.length == 0){
                    console.log("no user");
                    return done(null,false,{message:"Invalid Username or Password"});
                }
                if(user[0].password != password){
                    console.log("no password");
                    return done(null,false, {message : "Invalid Username or Password"});
                }
                return done(null,user);

            });
        }
    ));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
    passport.serializeUser(function(user, done) {

        done(null, user);

    });

    passport.deserializeUser(function(id, done) {
        done(null, id);
    });

    app.use(passport.initialize());
    app.use(passport.session());


    app.post('/login',loginPost);

    app.get('/login',function(req,res){
        res.redirect('/invalid');
    });
    app.get('/invalid',function(req,res) {
        res.render('invalid');
    });




    app.get('/logout', function(req, res){
        req.logout();
        res.clearCookie('username', { path: '/' });
        res.clearCookie('id', { path: '/' });
        res.redirect('/');
    });

};
    function loginPost(req,res,next){
    passport.authenticate('local', function(err, user, info) {
        console.log(info);
        if (err) {
            // if error happens
            return next(err);
        }
        if (!user) {
           // req.session.messages = "user undefined";
            return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if (err) {
              //  req.session.messages = "Error";
                return next(err);
            }
            console.log(user);
            res.cookie('username', user[0].email, { maxAge: 900000 });
            res.cookie('id', user[0].id, { maxAge: 900000 });
            //req.session.messages = "Login successfully";
            return res.redirect('/');
        });
    })(req, res, next);
    }


