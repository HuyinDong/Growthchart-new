/**
 * Created by dongyin on 9/9/15.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var connection = require('../../config/mysql');
var mysql = require('mysql');
module.exports = function(app){
    passport.use(new LocalStrategy(
        function(email, password, done) {
            connection.query("select * from p_users where email = '"+email+"'",function(err,user){
                console.log(user);
                if(err){
                    return done(err);
                }
                if(user.length == 0){
                    console.log("length==0");
                    return done(null,false,{message:"Invalid Username or Password"});
                }
                if(user[0].password != password){
                    return done(null,false, {message : "Invalid Username or Password"});
                }
                return done(null,user[0]);
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
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        db.users.findById(id, function(err, user) {
            done(err, user);
        });
    });

    app.use(passport.initialize());
    app.use(passport.session());


    app.post('/login',function(req, res, next) {
         console.log("post");
        passport.authenticate('local', function(err, user, info) {
            console.log("auth cb");
            console.log(user);
            if (err) {
                console.log("err");
                return next(err); }
            // Redirect if it fails
            if (!user) {
                console.log("!user");
                return res.redirect('/login'); }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                // Redirect if it succeeds

            });
        })(req, res, next);
    });

    app.get('/login',function(req,res){
        console.log("login get");

        res.render('invalid');
    });
    app.get('/invalid',function(req,res){
        console.log("invalid");
        res.render('invalid');
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.clearCookie("username");
        res.clearCookie("id");
        res.redirect('/');
    });

};
